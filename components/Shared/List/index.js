import React from 'react';
import styles from './styles.module.scss';

const List = ({data}) => {

    return (
        <>
            <table className={styles.container}>
                <thead >
                    <tr className={styles.header}>
                        <th className={styles.header}>Nome do doador</th>
                        <th className={styles.header}>E-Mail</th>
                        <th className={styles.header}>Idade</th>
                        <th className={styles.header}>Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    { data?.map((row, index) => (
                        <tr key={index} >
                            <td className={styles.coll}>{row?.name}</td>
                            <td className={styles.coll}>{row?.email}</td>
                            <td className={styles.coll}>{row?.age}</td>
                            <td className={styles.coll}>{row?.bloodType}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default List;
