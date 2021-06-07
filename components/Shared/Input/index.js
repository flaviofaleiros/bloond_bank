import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'
import styles from './styles.module.css'

const Input = (props) => {
  const { label, name, ...rest } = props

  return (
    <>
      <Field name={name} placeholder={label} className={styles.Form__Field} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </>
  )
}

export default Input
