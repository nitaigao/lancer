const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const seed = async () => {
  await prisma.invoice.create({
    data: {
      due: new Date(),
      status: 'paid',
      date: new Date(),
      number: '1',
      total: 123,
      amount: 123,
      notes: 'some notes',
      locale: 'en-GB',
      currency: 'GBP',
      client: {
        create: {
          name: 'me',
          contact: 'Carl Gaywood',
          email: 'test@example.com',
          country: 'United Kingdom',
          line1: '123 Large Drive',
          town: 'Carshalton',
          postcode: 'SM5 2DH',
        },
      },
      supplier: {
        create: {
          name: 'me',
          email: 'test@example.com',
          country: 'United Kingdom',
          line1: '123 Large Drive',
          town: 'Carshalton',
          postcode: 'SM5 2DH',
        },
      },
      line_items: {
        create: [
          {
            title: 'Software Engineering',
            quantity: 1,
            price: 100,
            amount: 500,
          },
        ],
      },
    },
  })
}

seed()
