import React from 'react';

import styles from './Greeting.css'


export function Greeting() {
    return (
        <div className={styles.container}>
            <p className='greeting'>Hello, Dani</p>
            <p className='message'>Just a quick check in</p>
        </div>
    )
};