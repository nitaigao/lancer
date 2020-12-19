import React, { ReactElement } from 'react'

interface CurrencyProps {
  value: number
  locale: string
  currency: string
}

const Currency = ({ value, locale, currency }: CurrencyProps): ReactElement => {
  const formatter = new Intl.NumberFormat(locale, { style: 'currency', currency })
  const formttedValue = formatter.format(value)
  return <>{formttedValue}</>
}

export default Currency
