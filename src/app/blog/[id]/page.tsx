import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
export default function Post() {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h3 className={styles.title}></h3>
            <p className={styles.desc}></p>
            <div className={styles.author}>
              <Image
                src={""}
                alt=""
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}></span>
            </div>
          </div>
          {/* //info */}

          <div className={styles.imgContainer}>
            <Image src={""} alt="" fill={true} className={styles.img} />
          </div>
          {/* //imgContainer */}
        </div>
        {/* //top */}
        <div className={styles.content}>
          <p className={styles.text}></p>
        </div>
      </div>
    );
}
