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

  async create(createProductDto: CreateProductDto): Promise<product> {
    return this.prisma.product.create({
      data: {
        name: createProductDto.name,
        sku: createProductDto.sku,
        description: createProductDto.description,
        large_description: createProductDto.large_description,
        price: createProductDto.price,
        discount_price: createProductDto.discount_price,
        discount_percent: createProductDto.discount_percent,
        is_new: createProductDto.is_new,
        image_link: createProductDto.image_link,
        other_images_link: createProductDto.other_images_link || [],
        created_date: new Date(),
        updated_date: new Date(),
        category: {
          connect: { id: createProductDto.category_id },
        },
      },
    });
  }

  sanitizePayload(queryParams: ProductQueryDto) {
    const { limit, offset, categoryId, orderBy } = queryParams;
    const MAX_LIMIT = 100;

    const result: any = {
      skip: offset ? Number(offset) : 0,
      take: Math.min(limit ? Number(limit) : 10, MAX_LIMIT),
      orderBy: orderBy ? { [orderBy]: 'asc' } : undefined,
    };

    if (categoryId) {
      result.where = { category_id: parseInt(categoryId.toString(), 10) };
    }

    return result;
  }

  async findAll(queryParams: ProductQueryDto): Promise<product[]> {
    const payload = this.sanitizePayload(queryParams);

    return this.prisma.product.findMany({
      ...payload,
      include: {
        category: true,
      },
    });
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
    return this.prisma.product.update({
      where: { id },
      data: {
        name: productData.name,
        sku: productData.sku,
        description: productData.description,
        large_description: productData.large_description,
        price: productData.price,
        discount_price: productData.discount_price,
        discount_percent: productData.discount_percent,
        is_new: productData.is_new,
        image_link: productData.image_link,
        other_images_link: productData.other_images_link || [],
        updated_date: new Date(),
        ...(productData.category_id && {
          category: {
            connect: { id: productData.category_id },
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

  async exampleTransaction() {
    return this.prisma.$transaction(async (prisma) => {
      const count = await prisma.product.count();
      const products = await prisma.product.findMany({
        take: 5,
        cursor: {
          id: 5,
        },
      });

      return { count, products };
    });
  }
}
