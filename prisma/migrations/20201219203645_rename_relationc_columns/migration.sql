/*
  Warnings:

  - You are about to drop the column `clientId` on the `invoices` table. All the data in the column will be lost.
  - You are about to drop the column `supplierId` on the `invoices` table. All the data in the column will be lost.
  - You are about to drop the column `invoiceId` on the `line_items` table. All the data in the column will be lost.
  - Added the required column `client_id` to the `invoices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supplier_id` to the `invoices` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "invoices" DROP CONSTRAINT "invoices_clientId_fkey";

-- DropForeignKey
ALTER TABLE "invoices" DROP CONSTRAINT "invoices_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "line_items" DROP CONSTRAINT "line_items_invoiceId_fkey";

-- AlterTable
ALTER TABLE "invoices" DROP COLUMN "clientId",
DROP COLUMN "supplierId",
ADD COLUMN     "client_id" INTEGER NOT NULL,
ADD COLUMN     "supplier_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "line_items" DROP COLUMN "invoiceId",
ADD COLUMN     "invoice_id" INTEGER;

-- AddForeignKey
ALTER TABLE "invoices" ADD FOREIGN KEY("client_id")REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD FOREIGN KEY("supplier_id")REFERENCES "suppliers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "line_items" ADD FOREIGN KEY("invoice_id")REFERENCES "invoices"("id") ON DELETE SET NULL ON UPDATE CASCADE;
