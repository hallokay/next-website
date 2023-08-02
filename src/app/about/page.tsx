import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { Button } from '@/components'

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                {/* <Image src={ } fill={true} alt='' className={styles.img} /> */}

                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>
                        Digital Storytellers
                    </h1>
                    <h2 className={styles.imgDesc}>
                        handcrafting award winning digital experiences
                    </h2>
                </div>
            </div>


            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>
                        Who are we?
                    </h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        <br />
                        Mollitia, est? Voluptatem dicta repellat ipsum, voluptas iste, accusamus inventore totam laudantium natus soluta facere placeat quisquam, voluptatum accusantium nulla? Nobis, ea.
                    </p>
                </div>

                <div className={styles.item}>
                    <h1 className={styles.title}>

                    </h1>
                    <p className={styles.desc}>

                    </p>

                    <Button title='contact' url='/contact' />
                </div>
            </div>
        </div>
    )
}
