import React, { ReactElement } from 'react'

import Link from 'next/link'

import { Invoice } from '../../types/invoice'

import styles from './InvoiceRow.module.css'

interface InvoiceRowProps {
  invoice: Invoice
}

const paidStyle = (state: string): string => {
  if (state === 'paid') {
    return styles.paid
  }

  return styles.unpaid
}

interface StatusCellProps {
  status: string
}

const StateCell = ({ status }: StatusCellProps) => (
  <td className={`${styles.cell} ${styles.state} ${paidStyle(status)}`}>
    <div className={paidStyle(status)}>{status}</div>
  </td>
)

const InvoiceRow = ({ invoice }: InvoiceRowProps): ReactElement => {
  return (
    <Link href={`/invoices/${invoice.id}`}>
      <tr className={styles.row}>
        <StateCell status={invoice.status} />
        <td className={styles.cell}>{invoice.date}</td>
        <td className={styles.cell}>{invoice.number}</td>
        <td className={styles.cell}>{invoice.client.name}</td>
        <td className={styles.cell}>{invoice.amount}</td>
      </tr>
    </Link>
  )
}

export default InvoiceRow
