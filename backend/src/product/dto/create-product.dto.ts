import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsPositive,
  IsArray,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  sku: string;

  @IsNumber()
  category_id: number;

  @IsString()
  description: string;

  @IsString()
  large_description: string;

  @IsPositive()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsPositive()
  @IsNumber()
  discount_price?: number;

  @IsOptional()
  @IsPositive()
  @IsNumber()
  discount_percent?: number;

  @IsOptional()
  @IsBoolean()
  is_new?: boolean;

  @IsOptional()
  @IsString()
  image_link?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  other_images_link?: string[];

  @IsOptional()
  @IsString()
  selectedCategories?: string;
}
