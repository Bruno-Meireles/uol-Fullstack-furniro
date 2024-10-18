import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsPositive,
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

  @IsString()
  image_link?: string;

  @IsString()
  other_images_link?: string;
}
