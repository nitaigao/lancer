import React, { ReactElement } from 'react'

import { LineItem } from '../../types/invoice'

import InvoiceLineItem from './InvoiceLineItem'

import styles from './InvoiceLineItems.module.css'

interface InvoiceLineItemsProps {
  lineItems: LineItem[]
  currency: string
  locale: string
}

const InvoiceLineItems = ({ lineItems, currency, locale }: InvoiceLineItemsProps): ReactElement => (
  <>
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          <td className={styles.header}>Items</td>
          <td className={`${styles.header} ${styles.right}`}>Quantity</td>
          <td className={`${styles.header} ${styles.right}`}>Price</td>
          <td className={`${styles.header} ${styles.right}`}>Amount</td>
        </tr>
      </thead>
      <tbody>
        {lineItems.map((lineItem, i) => (
          <InvoiceLineItem key={i} lineItem={lineItem} currency={currency} locale={locale} />
        ))}
      </tbody>
    </table>
  </>
)

export default InvoiceLineItems
