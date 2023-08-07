import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import getAllPost from "@/lib/getAllPost";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "blog",
  description: "blog 페이지입니다.",
};


export default async function Blog() {
  const postData: Promise<ApiPost[]> = getAllPost();
  const post = await postData;

  return (
    <div className={styles.mainContainer}>
      {post.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          key={item._id}
          className={styles.container}
        >
          <div className={styles.imgContainer}>
            <Image
              src={item.img}
              alt="item img"
              width={400}
              height={250}
              className={styles.img}
            />
          </div>

          <div className={styles.content}>
            <h3 className={styles.title}>
              {item.title}
         
            </h3>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
