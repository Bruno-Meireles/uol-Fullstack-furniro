import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
  BadRequestException,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/updateProductDto';
 import { ProductQueryDto } from './dto/product-query.dto';
import { product } from '@prisma/client';


@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  async findAll(
    @Query() queryParams: ProductQueryDto,
  ): Promise<{ totalCount: number; items: product[] }> {
    return this.productService.findAll(queryParams);
  }

  @Get('category/:categoryId')
  async findByCategory(
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ): Promise<product[]> {
    return this.productService.findByCategory(categoryId);
  }

  @Get('count')
  countProducts() {
    return this.productService.countProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const productId = parseInt(id, 10);
    if (isNaN(productId)) {
      throw new BadRequestException('Invalid product ID');
    }
    return this.productService.update(productId, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}
