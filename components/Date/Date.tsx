import React, { ReactElement } from 'react'

interface FormattedDateProps {
  value: string
  locale: string
}

const FormattedDate = ({ value, locale }: FormattedDateProps): ReactElement => {
  const date = Date.parse(value)
  const formatter = Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
  })
  return <>{formatter.format(date)}</>
}

export default FormattedDate
