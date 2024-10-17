import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
  InternalServerErrorException,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/updateProductDto';
import { product } from '@prisma/client';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}


  //tirar promisse 

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<product> {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll(): Promise<product[]> {
    return this.productService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<product> {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<product> {
    try {
      const deletedProduct = await this.productService.remove(id);
      if (!deletedProduct) {
        throw new NotFoundException(`Produto com ID ${id} não encontrado`);
      }
      return deletedProduct;
    } catch (error) {
      console.error('Erro ao tentar excluir o produto:', error);
      throw new InternalServerErrorException(
        'Erro ao tentar excluir o produto',
      );
    }
  }
}
