/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Category` table. All the data in the column will be lost.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_category_id_fkey";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "id",
ADD COLUMN     "category" SERIAL NOT NULL,
ALTER COLUMN "created_date" DROP NOT NULL,
ALTER COLUMN "created_date" SET DATA TYPE TIMESTAMP(6),
ALTER COLUMN "updated_date" DROP NOT NULL,
ALTER COLUMN "updated_date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updated_date" SET DATA TYPE TIMESTAMP(6),
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("category");

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "id",
ADD COLUMN     "product" SERIAL NOT NULL,
ALTER COLUMN "image_link" DROP NOT NULL,
ALTER COLUMN "other_images_link" DROP NOT NULL,
ALTER COLUMN "created_date" DROP NOT NULL,
ALTER COLUMN "created_date" SET DATA TYPE TIMESTAMP(6),
ALTER COLUMN "updated_date" DROP NOT NULL,
ALTER COLUMN "updated_date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updated_date" SET DATA TYPE TIMESTAMP(6),
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("product");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category") ON DELETE CASCADE ON UPDATE CASCADE;
