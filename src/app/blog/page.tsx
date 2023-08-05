import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Blog() {
    return (
        <div className={styles.mainContainer}>
            <Link href={'/blog/id'} className={styles.container}>
                <div className={styles.imgContainer}>
                    <Image 
                        src={''}
                        alt=''
                        width={400}
                        height={250}
                        className={styles.img}
                    />
                </div>

                <div className={styles.content}>
                    <h3 className={styles.title}></h3>
                    <p className={styles.desc}>

                    </p>
                </div>
            </Link>
        </div>
    )
}
