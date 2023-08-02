'use client'
import styles from './button.module.css'
import { CustomButtonProps } from '@/types';
import Link from 'next/link';
export default function Button({ title, url, btnType, handleClick }: CustomButtonProps) {

    const customButton = url ? (
        <button className={styles.container}
            type={btnType || 'button'}
        >
            <Link href={url} >
                {title}
            </Link>
        </button>
    ) : (

        <button className={styles.container}
            type={btnType || 'button'}
            onClick={handleClick}
        >
            {title}
        </button>
    )

    return customButton;


}
