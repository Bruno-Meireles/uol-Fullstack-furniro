/*
  Warnings:

  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal`.
  - You are about to alter the column `discount_price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal`.

*/
-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "image_link" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "price" SET DATA TYPE DECIMAL,
ALTER COLUMN "discount_price" SET DATA TYPE DECIMAL,
ALTER COLUMN "discount_percent" SET DATA TYPE DECIMAL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
