import { IsOptional, IsString, IsNumber, IsBoolean } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  name?: string; 

  @IsOptional()
  @IsString()
  sku?: string;

  @IsOptional()
  @IsNumber()
  category_id?: number; 

  @IsOptional()
  @IsString()
  description?: string; 

  @IsOptional()
  @IsString()
  large_description?: string; 

  @IsOptional()
  @IsNumber()
  price?: number; 

  @IsOptional()
  @IsNumber()
  discount_price?: number; 

  @IsOptional()
  @IsNumber()
  discount_percent?: number; 

  @IsOptional()
  @IsBoolean()
  is_new?: boolean; 

  @IsOptional()
  @IsString()
  image_link?: string;

  @IsOptional()
  @IsString()
  other_images_link?: string; 
}
