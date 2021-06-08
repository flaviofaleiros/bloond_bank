import React from 'react';
import styles from './styles.module.css';
import {useRegister} from "../../../context/Register";

const List = () => {
    const { register } = useRegister();

    return (
        <>
            <table className={styles.container}>
                <thead>
                    <tr className={styles.header}>
                        <th>Nome do doador</th>
                        <th>E-Mail</th>
                        <th>Idade</th>
                    </tr>
                </thead>
                <tbody>
                    { register?.map((row, index) => (
                        <tr key={index} >
                            <td className={styles.coll}>{row?.name}</td>
                            <td className={styles.coll}>{row?.email}</td>
                            <td className={styles.coll}>{row?.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default List;
