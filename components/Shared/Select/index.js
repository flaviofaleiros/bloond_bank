import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../TextError'
import styles from "../Input/styles.module.scss";


const Select = (props) => {
  const { label, name, options, ...rest } = props

  return (
    <>
      <Field as='select' id={name} name={name} className={styles.Form__Field} {...rest}>
        {options?.map(option => {
          return (
            <option key={option.key} value={option.value}>
              {option.value}
            </option>
          )
        })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </>
  );
};

export default Select;
