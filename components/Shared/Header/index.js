import React from 'react';
import styles from './styles.module.scss';

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <h1 className={styles.header__title}>Banco de Sangue do Frontal</h1>
            </div>
        </>
    )
};

export default Header;
