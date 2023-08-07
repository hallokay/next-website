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
  const postData: Promise<ApiPost> = getPost(id);
  const post = await postData;

  
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.desc}>{post.desc}</p>
            <div className={styles.author}>
              <Image
                src={post.img}
                alt="img"
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}>{post.username}</span>
            </div>
          </div>
          {/* //info */}

          <div className={styles.imgContainer}>
            <Image
              src={post.img}
              alt="post img"
              fill={true}
              className={styles.img}
            />
          </div>
          {/* //imgContainer */}
        </div>
        {/* //top */}
        <div className={styles.content}>
          <p className={styles.text}>{post.content}</p>
        </div>
      </div>
    );
}
