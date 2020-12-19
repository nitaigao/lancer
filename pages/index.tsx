import React, { ReactElement } from 'react'

import Head from 'next/head'
import InvoicesTable from '../components/InvoicesTable/InvoicesTable'

import styles from '../styles/Home.module.css'
import LinkButton from '../components/LinkButton/LinkButton'

import { PrismaClient, Invoice } from '@prisma/client'

interface HomeProps {
  invoices: Invoice[]
}

const Home = ({ invoices }: HomeProps): ReactElement => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Invoices</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Invoices</h1>
        <LinkButton href={'/invoices/new'} text="Create Invoice" />
        <InvoicesTable invoices={invoices} />
      </main>
    </div>
  )
}

interface GetServerSidePropsProps {
  props: {
    invoices: Invoice[]
  }
}

export const getServerSideProps = async (): Promise<GetServerSidePropsProps> => {
  const prisma = new PrismaClient()
  const invoices = await prisma.invoice.findMany({
    include: {
      supplier: true,
      client: true,
      line_items: true,
    },
  })
  return {
    props: {
      invoices: JSON.parse(JSON.stringify(invoices)),
    },
  }
}

export default Home
