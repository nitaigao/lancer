import React, { ReactElement } from 'react'

import InvoiceAddress from './InvoiceAddress'

import styles from './InvoiceHeader.module.css'

interface InvoiceHeaderProps {
  supplier: Supplier
}

const InvoiceHeader = ({ supplier }: InvoiceHeaderProps): ReactElement => (
  <div className={styles.container}>
    <strong className={styles.invoice}>INVOICE</strong>
    <strong className={styles.supplierName}>{supplier.name}</strong>
    <InvoiceAddress contact={supplier} />
  </div>
)

export default InvoiceHeader
