import React, { ReactElement } from 'react'

import { Invoice } from '../../types/invoice'

import InvoiceRow from '../InvoiceRow/InvoiceRow'

import styles from './InvoicesTable.module.css'

interface InvoicesTableProps {
  invoices: Invoice[]
}

const InvoicesTable = ({ invoices }: InvoicesTableProps): ReactElement => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headings}>
          <th className={styles.heading}>Status</th>
          <th className={styles.heading}>Date</th>
          <th className={styles.heading}>No.</th>
          <th className={styles.heading}>Client</th>
          <th className={styles.heading}>Amount</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice) => (
          <InvoiceRow key={invoice.number} invoice={invoice} />
        ))}
      </tbody>
    </table>
  )
}

export default InvoicesTable
