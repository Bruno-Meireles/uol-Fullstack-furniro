import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
      serveRoot: '/assets/',
    }),
  ],
  controllers: [AppController, ProductController, CategoryController],
  providers: [AppService, PrismaService, ProductService, CategoryService],
})
export class AppModule {}
