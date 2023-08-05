import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { Button } from '@/components'

export default function Contact() {
    return (
        <div className={styles.container}>

            <h1 className={styles.title}>
                Let's Keep in Touch
            </h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image src="/contact.png" alt='contact Img'
                        fill={true}
                        className={styles.img}
                    />
                </div>
                <form className={styles.form}>

                    <input type="text" className={styles.input} placeholder='name' />
                    <input type="text" className={styles.input} placeholder='email' />
                    <textarea className={styles.textArea} cols={30} rows={10} placeholder='message'/>
                    <Button title='Send' url='#'/>
                
                </form>
            </div>
        </div>
    )
}
