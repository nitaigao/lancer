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
      notes:
        'Please send payments to the United Kingdom\nBank Account numnber 93493484\nPlease send notification after payment',
      locale: 'en-GB',
      currency: 'GBP',
      client: {
        create: {
          name: 'Switcher',
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
          name: 'Nicholas Kostelnik',
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
