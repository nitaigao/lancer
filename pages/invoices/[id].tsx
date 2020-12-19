import React, { ReactElement } from 'react'

import RenderedInvoice from '../../components/RenderedInvoice/RenderedInvoice'

import { Invoice } from '../../types/invoice'

import styles from '../../styles/Invoice.module.css'

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

export const getServerSideProps = async (): Promise<GetServerSidePropsProps> => {
  return {
    props: {
      invoice: {
        id: 1,
        status: 'paid',
        date: '2010-10-10',
        due: '2010-10-15',
        number: '1',
        notes:
          'Reference: Invoice Number\nRecipient: Nicholas Karl William Kostelnik\nBank: JSC TBC Bank\nBranch: Marjanishvili Street 7, 0102 Tbilisi, Georgia\nIBAN: GE36TB7189936110100005\nSWIFT code: TBCBGE22',
        line_items: [
          {
            title: 'Software Development',
            quantity: 18,
            price: 500,
            amount: 9000,
          },
        ],
        total: 9000,
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
        locale: 'en-GB',
        currency: 'GBP',
      },
    },
  }
}

export default InvoicePage
