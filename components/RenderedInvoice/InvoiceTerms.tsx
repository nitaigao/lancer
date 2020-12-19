import React, { ReactElement } from 'react'
import { Invoice } from '../../types/invoice'
import Currency from '../Currency/Currency'
import FormattedDate from '../FormattedDate/FormattedDate'

import styles from './InvoiceTerms.module.css'

interface InvoiceTermsProps {
  invoice: Invoice
}

const InvoiceTerms = ({ invoice }: InvoiceTermsProps): ReactElement => (
  <div className={styles.container}>
    <table className={styles.table}>
      <tr>
        <td className={styles.term}>Invoice Number:</td>
        <td className={styles.cell}>{invoice.number}</td>
      </tr>
      <tr>
        <td className={styles.term}>Invoice Date:</td>
        <td className={styles.cell}>
          <FormattedDate value={invoice.date} locale={invoice.locale} style="medium" />
        </td>
      </tr>
      <tr>
        <td className={styles.term}>Payment Due:</td>
        <td className={styles.cell}>
          <FormattedDate value={invoice.due} locale={invoice.locale} style="medium" />
        </td>
      </tr>
      <tr className={styles.amountDue}>
        <td className={styles.term}>Amount Due:</td>
        <td className={styles.cell}>
          <Currency value={invoice.amount} locale={invoice.locale} currency={invoice.currency} />
        </td>
      </tr>
    </table>
  </div>
)

export default InvoiceTerms
