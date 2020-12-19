import React, { ReactElement } from 'react'

import { Contact } from '../../types/invoice'

import styles from './InvoiceAddress.module.css'

interface InvoiceAddressProps {
  contact: Contact
}

const InvoiceAddress = ({
  contact: { line1, line2, town, postcode, country },
}: InvoiceAddressProps): ReactElement => (
  <div className={styles.container}>
    {line1 && <div>{line1}</div>}
    {line2 && <div>{line2}</div>}
    {town && <div>{town}</div>}
    {postcode && <div>{postcode}</div>}
    {country && <div>{country}</div>}
  </div>
)

export default InvoiceAddress
