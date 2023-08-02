import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div>©2023 Lamamia. All rights reserved.</div>
            <div className={styles.social}>
                <Image
                    className={styles.icon}
                    src='/1.png'
                    alt='icon'
                    width={15}
                    height={15} />

                <Image
                    className={styles.icon}
                    src='/2.png'
                    alt='icon'
                    width={15}
                    height={15} />

                <Image
                    className={styles.icon}
                    src='/3.png'
                    alt='icon'
                    width={15}
                    height={15} />

                <Image
                    className={styles.icon}
                    src='/4.png'
                    alt='icon'
                    width={15}
                    height={15} />

            </div>
        </div>
    )
}
