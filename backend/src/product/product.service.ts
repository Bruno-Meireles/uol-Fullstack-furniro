import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { product } from '@prisma/client';
import { UpdateProductDto } from './dto/updateProductDto';
import { ProductQueryDto } from './dto/product-query.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  // async create(createProductDto: CreateProductDto): Promise<product> {
  //   return this.prisma.product.create({
  //     data: {

  //       name: createProductDto.name,
  //       sku: createProductDto.sku,
  //       description: createProductDto.description,
  //       large_description: createProductDto.large_description,
  //       price: createProductDto.price,
  //       discount_price: createProductDto.discount_price,
  //       discount_percent: createProductDto.discount_percent,
  //       is_new: createProductDto.is_new,
  //       image_link: createProductDto.image_link,
  //       other_images_link: createProductDto.other_images_link || [],
  //       created_date: new Date(),
  //       updated_date: new Date(),
  //       category: {
  //         connect: { id: createProductDto.category_id },
  //       },
  //     },
  //   });
  // }
  async create(createProductDto: CreateProductDto): Promise<product> {
    const { category_id, ...productData } = createProductDto;

    const newProduct = await this.prisma.product.create({
      data: {
        ...productData,
        created_date: new Date(),
        updated_date: new Date(),
        category: {
          connect: { id: category_id },
        },
      },
    });

    return newProduct;
  }

  sanitizePayload(queryParams: ProductQueryDto) {
    const { limit, offset, categoryId, orderBy } = queryParams;
    const MAX_LIMIT = 100;

    const result: any = {
      skip: offset ? Number(offset) : 0,
      take: Math.min(limit ? Number(limit) : 16, MAX_LIMIT),
      orderBy: orderBy ? { [orderBy]: 'asc' } : undefined,
    };

    if (categoryId) {
      result.where = { category_id: parseInt(categoryId.toString(), 10) };
    }

    return result;
  }

  async findAll(
    queryParams: ProductQueryDto,
  ): Promise<{ totalCount: number; items: product[] }> {
    const payload = this.sanitizePayload(queryParams);

    const totalCount = await this.prisma.product.count({
      where: payload.where,
    });

    const items = await this.prisma.product.findMany({
      ...payload,
      include: {
        category: true,
      },
    });

    return { totalCount, items };
  }

  async countProducts(): Promise<number> {
    return this.prisma.product.count();
  }

  async findOne(id: number): Promise<any> {
    const product = await this.prisma.product.findUnique({
      where: { id: Number(id) },
      include: {
        category: true,
      },
    });

    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }

    return product;
  }

  async findByCategory(categoryId: number): Promise<product[]> {
    return this.prisma.product.findMany({
      where: {
        category_id: categoryId,
      },
      include: {
        category: true,
      },
    });
  }

  async update(id: number, productData: UpdateProductDto): Promise<product> {
    console.log('Updating product with ID:', id);
    const { category_id, ...updatedData } = productData;

    return this.prisma.product.update({
      where: { id },
      data: {
        ...updatedData,
        updated_date: new Date(),
        ...(category_id && {
          category: {
            connect: { id: category_id },
          },
        }),
      },
    });
  }

  async remove(id: number): Promise<product> {
    const productToDelete = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!productToDelete) {
      throw new NotFoundException('Produto não encontrado');
    }

    try {
      return await this.prisma.product.delete({
        where: { id },
      });
    } catch (error) {
      throw new InternalServerErrorException(
        `Erro ao tentar excluir o produto: ${error.message}`,
      );
    }
  }

  async transaction() {
    return this.prisma.$transaction(async (prisma) => {
      const count = await prisma.product.count();
      const products = await prisma.product.findMany({
        take: 4,
        cursor: {
          id: 5,
        },
      });

      return { count, products };
    });
  }
}
