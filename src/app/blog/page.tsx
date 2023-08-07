import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import getAllPost from "@/lib/getAllPost";

export default async function Blog() {
  const postData: Promise<Post[]> = getAllPost();
  const post = await postData;

  return (
    <div className={styles.mainContainer}>
      {post.map((item) => (
        <Link href={`/blog/${item.id}`} key={item.id} className={styles.container}>
          <div className={styles.imgContainer}>
            <Image
              src={""}
              alt=""
              width={400}
              height={250}
              className={styles.img}
            />
          </div>

          <div className={styles.content}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
