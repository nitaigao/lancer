import React, { ReactElement } from 'react'

import { Client } from '@prisma/client'

import InvoiceAddress from './InvoiceAddress'

import styles from './InvoiceCustomer.module.css'

interface InvoiceCustomerProps {
  client: Client
}

const InvoiceCustomer = ({ client }: InvoiceCustomerProps): ReactElement => (
  <div>
    <strong className={styles.clientName}>{client.name}</strong>
    <strong className={styles.contactName}>{client.contact}</strong>
    <InvoiceAddress contact={client} />
    <span>{client.email}</span>
  </div>
)

export default InvoiceCustomer
