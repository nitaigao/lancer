import React, { ReactElement } from 'react'

import RenderedInvoice from '../../components/RenderedInvoice/RenderedInvoice'

import styles from '../../styles/Invoice.module.css'

import { PrismaClient, Invoice } from '@prisma/client'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

interface InvoicePageProps {
  invoice: Invoice
}

const InvoicePage = ({ invoice }: InvoicePageProps): ReactElement => (
  <div className={styles.container}>
    <RenderedInvoice invoice={invoice} />
  </div>
)

interface GetServerSidePropsProps {
  props: {
    invoice: Invoice
  }
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsProps> => {
  const prisma = new PrismaClient()
  const invoice = await prisma.invoice.findFirst({
    where: {
      id: parseInt(context.params.id as string),
    },
    include: {
      supplier: true,
      client: true,
      line_items: true,
    },
  })
  console.log(invoice)
  return {
    props: {
      invoice: JSON.parse(JSON.stringify(invoice)),
    },
  }
}

export default InvoicePage
