import React, { ReactElement } from 'react'

import styles from './InvoiceNotes.module.css'

interface InvoiceNotesProps {
  notes: string
}

const InvoiceNotes = ({ notes }: InvoiceNotesProps): ReactElement => (
  <div className={styles.container}>
    {notes.split('\n').map((line, i) => (
      <span className={styles.note} key={i}>
        {line}
      </span>
    ))}
  </div>
)

export default InvoiceNotes
