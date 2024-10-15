import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

import { Product } from '@prisma/client';
import { UpdateProductDto } from './dto/updateProductDto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(productData: CreateProductDto): Promise<Product> {
    return this.prisma.product.create({
      data: {
        ...productData,
        created_date: new Date(),
        updated_date: new Date(),
      },
    });
  }

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async findOne(id: number): Promise<Product> {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  async update(id: number, productData: UpdateProductDto): Promise<Product> {
    return this.prisma.product.update({
      where: { id },
      data: {
        ...productData,
        updated_date: new Date(), // Atualiza a data de modificação
      },
    });
  }

  async remove(id: number): Promise<Product> {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
