import React, { ReactElement } from 'react'

interface FormattedDateProps {
  value: string
  locale: string
  style: string
}

const FormattedDate = ({ value, locale, style }: FormattedDateProps): ReactElement => {
  const date = Date.parse(value)
  const formatter = Intl.DateTimeFormat(locale, {
    dateStyle: style,
  })
  return <>{formatter.format(date)}</>
}

export default FormattedDate
