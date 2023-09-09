import React from 'react';
import styles from '@/app/styles/common.module.css'

const Loading = () => {
    return (
        <>
            <div className={styles.loading_section}></div>
            <div className={styles.loading}></div>
        </>
    );
};

export default Loading;