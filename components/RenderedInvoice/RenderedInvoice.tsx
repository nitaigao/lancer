import React, { ReactElement } from 'react'
import { Invoice } from '../../types/invoice'

import styles from './RenderedInvoice.module.css'

import InvoiceDetails from './InvoiceDetails'
import InvoiceHeader from './InvoiceHeader'
import InvoiceLineItems from './InvoiceLineItems'
import InvoiceNotes from './InvoiceNotes'
import InvoiceTotal from './InvoiceTotal'

interface RenderedInvoiceProps {
  invoice: Invoice
}

const RenderedInvoice = ({ invoice }: RenderedInvoiceProps): ReactElement => (
  <div className={styles.container}>
    <InvoiceHeader supplier={invoice.supplier} />
    <InvoiceDetails invoice={invoice} />
    <InvoiceLineItems
      lineItems={invoice.line_items}
      currency={invoice.currency}
      locale={invoice.locale}
    />
    <InvoiceTotal invoice={invoice} />
    <InvoiceNotes notes={invoice.notes} />
  </div>
)

export default RenderedInvoice
