import React from 'react';
import * as yup from 'yup';
import { Formik, Form as FormikForm, Field } from 'formik';

import { useRegister } from "../../../context/Register";
import styles from './styles.module.scss';
import Input from '../../Shared/Input';
import Select from '../../Shared/Select';

const validations = yup.object().shape({
    name: yup.string().required('O nome do doador é obrigatório!'),
    email: yup.string().email('Informe um e-mail válido!').required(),
    age: yup.number('Apenas numeros são permitidos!')
        .required('Idade é obrigatória!')
        .min(18,'O doador deve ter no minimo 18 anos!')
        .max(75, 'O doador deve ter no maximo 75 anos!')
})

const dropdownOptions = [
    { key: 'Select an option', value: 'Tipo sanguinio' },
    { key: 'A+', value: 'A+' },
    { key: 'A-', value: 'A-' },
    { key: 'B+', value: 'B+' },
    { key: 'B-', value: 'B-' },
    { key: 'AB+', value: 'AB+'},
    { key: 'AB-', value: 'AB-'},
    { key: 'O+', value: 'O+' },
    { key: 'O-', value: 'O-' }
]

const Form = () => {
    const { register, setRegister } = useRegister([]);

    const handleSubmit = values => {
        setRegister([...register, values]);
    }
    const initialValues = {}


    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations}>
            {formik => {
                return(
                    <FormikForm className={styles.Form}>
                        <h1 className={styles.Form__Welcome}>Cadastro</h1>

                        <h2 className={styles.Form__Info}>Informe seus dados para o cadastro</h2>

                        <div className={styles.Form__Group}>
                            <Input
                                type='text'
                                label='Nome do doador'
                                name='name'
                            />
                        </div>

                        <div className={styles.Form__Group}>
                            <Input
                                type='email'
                                label='E-mail do doador'
                                name='email'
                            />
                        </div>

                        <div className={styles.Form__Group}>
                            <Input
                                type='text'
                                label='Idade do doador'
                                name='age'
                            />
                        </div>

                        <div className={styles.Form__Group}>
                            <Select
                                type='select'
                                label='Tipo sanguíneo'
                                name='bloodType'
                                options={dropdownOptions}
                            />
                        </div>
                        <button className={styles.Form__Btn} type="submit" disabled={!formik.isValid}>Confirmar</button>
                    </FormikForm>
                )
            }}
        </Formik>
    )

}

export default Form
