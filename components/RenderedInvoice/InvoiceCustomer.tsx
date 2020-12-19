import React, { ReactElement } from 'react'

import { Client } from '../../types/invoice'

import InvoiceAddress from './InvoiceAddress'

import styles from './InvoiceCustomer.module.css'

interface InvoiceCustomerProps {
  client: Client
}

const InvoiceCustomer = ({ client }: InvoiceCustomerProps): ReactElement => (
  <div>
    <strong className={styles.clientName}>{client.name}</strong>
    <strong className={styles.contactName}>{client.contact.name}</strong>
    <InvoiceAddress contact={client.contact} />
    <span>{client.contact.email}</span>
  </div>
)

export default InvoiceCustomer
