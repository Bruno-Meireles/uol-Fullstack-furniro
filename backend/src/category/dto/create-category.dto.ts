import { IsString, IsOptional, IsArray } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  image_link?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  other_images_link?: string[];
}
