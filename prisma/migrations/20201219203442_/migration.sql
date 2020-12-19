/*
  Warnings:

  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Invoice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LineItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Supplier` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_supplierId_fkey";

-- DropForeignKey
ALTER TABLE "LineItem" DROP CONSTRAINT "LineItem_invoiceId_fkey";

-- CreateTable
CREATE TABLE "line_items" (
"id" SERIAL,
    "title" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "invoiceId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "line1" TEXT,
    "line2" TEXT,
    "town" TEXT,
    "postcode" TEXT,
    "country" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suppliers" (
"id" SERIAL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "line1" TEXT,
    "line2" TEXT,
    "town" TEXT,
    "postcode" TEXT,
    "country" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoices" (
"id" SERIAL,
    "status" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "due" TIMESTAMP(3) NOT NULL,
    "number" TEXT NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "notes" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "clientId" INTEGER NOT NULL,
    "supplierId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- DropTable
DROP TABLE "Client";

-- DropTable
DROP TABLE "Invoice";

-- DropTable
DROP TABLE "LineItem";

-- DropTable
DROP TABLE "Supplier";

-- AddForeignKey
ALTER TABLE "line_items" ADD FOREIGN KEY("invoiceId")REFERENCES "invoices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD FOREIGN KEY("clientId")REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD FOREIGN KEY("supplierId")REFERENCES "suppliers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
