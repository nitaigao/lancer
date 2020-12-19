import React, { ReactElement } from 'react'

import Head from 'next/head'
import InvoicesTable from '../components/InvoicesTable'

import styles from '../styles/Home.module.css'
import { Invoice } from '../types/invoice'

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
  return {
    props: {
      invoices: [
        {
          status: 'paid',
          date: '2010-10-10',
          number: '1',
          client: 'Switcher',
          amount: 1000,
        },
        {
          status: 'paid',
          date: '2020-10-10',
          number: '2',
          client: 'Aircury',
          amount: 2000,
        },
      ],
    }, // will be passed to the page component as props
  }
}

export default Home
