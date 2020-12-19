import React, { ReactElement } from 'react'
import { Invoice } from '../../types/invoice'
import InvoiceCustomer from './InvoiceCustomer'
import InvoiceTerms from './InvoiceTerms'

import styles from './InvoiceDetails.module.css'

interface InvoiceDetailsProps {
  invoice: Invoice
}

const InvoiceDetails = ({ invoice }: InvoiceDetailsProps): ReactElement => (
  <div className={styles.container}>
    <InvoiceCustomer client={invoice.client} />
    <InvoiceTerms invoice={invoice} />
  </div>
)

export default InvoiceDetails
