import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { product } from '@prisma/client';
import { UpdateProductDto } from './dto/updateProductDto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto): Promise<product> {
    return this.prisma.product.create({
      data: {
        ...createProductDto,
        created_date: new Date(),
        updated_date: new Date(),
      },
    });
  }

  async findAll(): Promise<any[]> {
    const products = await this.prisma.product.findMany({
      include: {
        category: true,
      },
    });

    return products.map((product) => ({
      id: product.id,
      name: product.name,
      sku: product.sku,
      category_id: product.category_id,
      description: product.description,
      large_description: product.large_description,
      price: product.price,
      discount_price: product.discount_price,
      discount_percent: product.discount_percent,
      is_new: product.is_new,
      image_link: product.image_link,
      other_images_link: product.other_images_link || [],
      created_date: product.created_date,
      updated_date: product.updated_date,
      category: product.category,
    }));
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

    return {
      id: product.id,
      name: product.name,
      sku: product.sku,
      category_id: product.category_id,
      description: product.description,
      large_description: product.large_description,
      price: product.price,
      discount_price: product.discount_price,
      discount_percent: product.discount_percent,
      is_new: product.is_new,
      image_link: product.image_link,
      other_images_link: product.other_images_link || [], 
      created_date: product.created_date,
      updated_date: product.updated_date,
      category: product.category,
    };
  }

  async findByCategory(categoryId: number): Promise<product[]> {
    return this.prisma.product.findMany({
      where: {
        category_id: categoryId,
      },
    });
  }

  async update(id: number, productData: UpdateProductDto): Promise<product> {
    return this.prisma.product.update({
      where: { id },
      data: {
        ...productData,
        updated_date: new Date(),
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
      return this.prisma.product.delete({
        where: { id },
      });
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
      throw new InternalServerErrorException(
        'Erro ao tentar excluir o produto',
      );
    }
  }
}
