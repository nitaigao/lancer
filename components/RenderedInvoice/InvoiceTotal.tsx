import React, { ReactElement } from 'react'
import { Invoice } from '../../types/invoice'
import Currency from '../Currency/Currency'

import styles from './InvoiceTotal.module.css'

interface InvoiceTotalProps {
  invoice: Invoice
}

const InvoiceTotal = ({ invoice }: InvoiceTotalProps): ReactElement => (
  <div className={styles.container}>
    <table>
      <tr>
        <td className={styles.title}>
          <strong>Total:</strong>
        </td>
        <td>
          <Currency value={invoice.total} locale={invoice.locale} currency={invoice.currency} />
        </td>
      </tr>
      <tr>
        <td className={styles.title}>
          <strong>Amount Due ({invoice.currency}):</strong>
        </td>
        <td>
          <Currency value={invoice.amount} locale={invoice.locale} currency={invoice.currency} />
        </td>
      </tr>
    </table>
  </div>
)

export default InvoiceTotal
