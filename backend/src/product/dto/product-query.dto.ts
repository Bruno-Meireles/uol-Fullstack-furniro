import { IsOptional, IsEnum, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export enum OrderBy {
  DEFAULT = 'default',
  LOWEST = 'lowest',
  HIGHEST = 'highest', 
}


export class ProductQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  limit?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  offset?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  categoryId?: number;

  @IsOptional()
  @IsEnum(OrderBy)
  orderBy?: OrderBy;
}
