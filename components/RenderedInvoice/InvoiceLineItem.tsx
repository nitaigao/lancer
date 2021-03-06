import React, { ReactElement } from 'react'

import { LineItem } from '../../types/invoice'
import Currency from '../Currency/Currency'

import styles from './InvoiceLineItem.module.css'

interface InvoiceLineItemProps {
  lineItem: LineItem
  currency: string
  locale: string
}

const InvoiceLineItem = ({
  currency,
  locale,
  lineItem: { title, quantity, price, amount },
}: InvoiceLineItemProps): ReactElement => (
  <tr className={styles.row}>
    <td className={styles.leftCell}>{title}</td>
    <td className={styles.rightCell}>{quantity}</td>
    <td className={styles.rightCell}>
      {<Currency value={price} locale={locale} currency={currency} />}
    </td>
    <td className={styles.rightCell}>
      <Currency currency={currency} locale={locale} value={amount} />
    </td>
  </tr>
)

export default InvoiceLineItem
