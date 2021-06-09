import React, { useState, useEffect }from 'react';
import {Formik, Form as FormikForm, Field, ErrorMessage} from 'formik';

import { dropdownOptions } from './utils/bloodTypeOptions';
import { validations } from './utils/validationForm';
import TextError from "../../Shared/TextError";
import styles from './styles.module.scss';
import List from "../List";


const Form = () => {
    const initialValues = {
        name: '',
        age: '',
        email: ''
    }

    const [list, setList] = useState([])

    const handleSubmit = values => {
        setList([...list, values])
    }

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations}>
                {formik => {
                    return(
                        <FormikForm className={styles.Form}>
                            <h1 className={styles.Form__Welcome}>Cadastro</h1>

                            <h2 className={styles.Form__Info}>Informe seus dados para o cadastro</h2>

                            <div className={styles.Form__Group}>
                                <Field id="name" name="name" placeholder="Nome do doador" className={styles.Form__Field}/>
                                <ErrorMessage component={TextError} name={'name'} />
                            </div>

                            <div className={styles.Form__Group}>
                                <Field id="email" name="email" placeholder="E-mail do doador" className={styles.Form__Field}/>
                                <ErrorMessage component={TextError} name={'email'} />
                            </div>

                            <div className={styles.Form__Group}>
                                <Field id="age" name="age" placeholder="Idade do doador" className={styles.Form__Field}/>
                                <ErrorMessage component={TextError} name={'age'} />
                            </div>

                            <div className={styles.Form__Group}>
                                <Field as='select' id={'bloodType'} name={'bloodType'} className={styles.Form__Field}>
                                    {dropdownOptions?.map(option => {
                                        return (
                                            <option key={option.key} value={option.value}>
                                                {option.value}
                                            </option>
                                        )
                                    })}
                                </Field>
                                <ErrorMessage component={TextError} name={'bloodType'} />
                            </div>
                            <button className={styles.Form__Btn} type="submit" disabled={!formik.isValid}>Confirmar</button>
                        </FormikForm>
                    )
                }}
            </Formik>

            <List data={list}/>
        </>
    )

}

export default Form
