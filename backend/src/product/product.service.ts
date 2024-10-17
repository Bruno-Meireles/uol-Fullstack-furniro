import { Injectable, InternalServerErrorException } from '@nestjs/common';
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

  async findAll(): Promise<product[]> {
    return this.prisma.product.findMany({
      include: {
        category: true,
      },
    });
  }

  async findOne(id: number): Promise<product> {
    return this.prisma.product.findUnique({
      where: { id },
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
      throw new Error('Produto não encontrado');
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
