'use client'

import Link from 'next/link'
import React from 'react'
import { links } from '@/utils/constants'
import styles from './nav.module.css'

export default function Navbar() {
    return (
        <nav className={styles.container}>
            <Link href={`/`}
                className={styles.logo}>lamamia!</Link>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link href={link.url} key={link.id} className={styles.link} >
                        {link.title}
                    </Link>
                ))}

                <button
                    className={styles.logout}
                    onClick={() => {

                    }}
                >
                    Logout
                </button>
            </div>
        </nav>
    )
}
