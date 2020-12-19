import React, { ReactElement } from 'react'

import { Invoice } from '../../types/invoice'

interface InvoiceRowProps {
  invoice: Invoice
}

const InvoiceRow = ({ invoice }: InvoiceRowProps): ReactElement => (
  <tr>
    <td>{invoice.status}</td>
    <td>{invoice.date}</td>
    <td>{invoice.number}</td>
    <td>{invoice.client}</td>
    <td>{invoice.amount}</td>
  </tr>
)

export default InvoiceRow
