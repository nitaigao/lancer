import React, { ReactElement } from 'react'

import { Invoice } from '../../types/invoice'

import InvoiceRow from '../InvoiceRow'

interface InvoicesTableProps {
  invoices: Invoice[]
}

const InvoicesTable = ({ invoices }: InvoicesTableProps): ReactElement => (
  <table>
    <thead>
      <tr>
        <th>Status</th>
        <th>Date</th>
        <th>No</th>
        <th>Client</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      {invoices.map((invoice) => (
        <InvoiceRow key={invoice.number} invoice={invoice} />
      ))}
    </tbody>
  </table>
)
export default InvoicesTable
