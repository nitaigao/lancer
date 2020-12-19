-- CreateTable
CREATE TABLE "LineItem" (
"id" SERIAL,
    "title" TEXT NOT NULL,
    "quantity" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "invoiceId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
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
CREATE TABLE "Supplier" (
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
CREATE TABLE "Invoice" (
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

-- AddForeignKey
ALTER TABLE "LineItem" ADD FOREIGN KEY("invoiceId")REFERENCES "Invoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD FOREIGN KEY("clientId")REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD FOREIGN KEY("supplierId")REFERENCES "Supplier"("id") ON DELETE CASCADE ON UPDATE CASCADE;
