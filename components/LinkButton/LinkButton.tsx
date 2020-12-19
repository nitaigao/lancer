import React, { ReactElement } from 'react'

import Link from 'next/link'

import styles from './LinkButton.module.css'

interface LinkButtonProps {
  href: string
  text: string
}

const LinkButton = ({ href, text }: LinkButtonProps): ReactElement => (
  <Link href={href}>
    <a className={styles.anchor}>{text}</a>
  </Link>
)

export default LinkButton
