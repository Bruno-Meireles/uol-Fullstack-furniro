import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { category } from '@prisma/client';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<category> {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  async findAll(): Promise<category[]> {
    return this.categoryService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<category> {
    return this.categoryService.findOne(Number(id));
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<category> {
    return this.categoryService.remove(Number(id));
  }
}
