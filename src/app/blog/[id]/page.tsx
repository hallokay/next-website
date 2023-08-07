import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
import getPost from '@/lib/getPost';

type Params = {
  params: {
    id: string;
  }
}

export default async function Post({params: {id}}: Params) {
  const postData: Promise<Post> = getPost(id);
  const post = await postData;

  
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.desc}>{post.body}</p>
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
          <p className={styles.text}>{post.body}</p>
        </div>
      </div>
    );
}
