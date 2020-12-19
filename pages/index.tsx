import React, { ReactElement } from 'react'

import Head from 'next/head'
import InvoicesTable from '../components/InvoicesTable/InvoicesTable'

import styles from '../styles/Home.module.css'
import { Invoice } from '../types/invoice'
import LinkButton from '../components/LinkButton/LinkButton'

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
  return {
    props: {
      invoices: [
        {
          id: 1,
          status: 'paid',
          date: '2010-10-21',
          due: '2010-10-26',
          number: '1',
          client: {
            name: 'Switcher',
            contact: {
              name: 'Carl Gaywood',
              email: 'test@example.com',
              line1: 'Address Line 1',
              line2: 'Address Line 2',
              town: 'Town',
              postcode: 'Postcode',
              country: 'Country',
            },
          },
          supplier: {
            name: 'Nicholas Kostelnik',
            email: 'nkostelnik@gmail.com',
            line1: 'Address Line 1',
            line2: 'Address Line 2',
            town: 'Town',
            postcode: 'Postcode',
            country: 'Country',
          },
          amount: 1000,
          line_items: [
            {
              title: 'Software Development',
              quantity: 18,
              price: 500,
              amount: 9000,
            },
          ],
          total: 9000,
          notes:
            'Reference: Invoice Number\nRecipient: Nicholas Karl William Kostelnik\nBank: JSC TBC Bank\nBranch: Marjanishvili Street 7, 0102 Tbilisi, Georgia\nIBAN: GE36TB7189936110100005\nSWIFT code: TBCBGE22',
        },
        {
          id: 1,
          status: 'unpaid',
          date: '2010-10-21',
          due: '2010-10-26',
          number: '1',
          client: {
            name: 'Aircury',
            contact: {
              name: 'jose Diaz',
              email: 'test@example.com',
              line1: 'Address Line 1',
              line2: 'Address Line 2',
              town: 'Town',
              postcode: 'Postcode',
              country: 'Country',
            },
          },
          supplier: {
            name: 'Nicholas Kostelnik',
            email: 'nkostelnik@gmail.com',
            line1: 'Address Line 1',
            line2: 'Address Line 2',
            town: 'Town',
            postcode: 'Postcode',
            country: 'Country',
          },
          amount: 1000,
          line_items: [
            {
              title: 'Software Development',
              quantity: 18,
              price: 500,
              amount: 9000,
            },
          ],
          total: 9000,
          notes:
            'Reference: Invoice Number\nRecipient: Nicholas Karl William Kostelnik\nBank: JSC TBC Bank\nBranch: Marjanishvili Street 7, 0102 Tbilisi, Georgia\nIBAN: GE36TB7189936110100005\nSWIFT code: TBCBGE22',
        },
      ],
    },
  }
}

export default Home
