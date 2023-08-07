import { Button } from "@/components";
import Image from "next/image";
import styles from "./page.module.css";
// locale에서 data fetch하기
import { items } from "./data";
import { notFound } from "next/navigation";
import { Category } from "@/types/index";
type Props = {
  params: {
    category: string;
  };
};

const getData = (cat: string) => { 
  const itemss: Category =  items
  const data = itemss[cat];
  if (data) {
    return data;
  }

  return notFound();
};

export default function Category({ params: { category } }: Props) {
  const data = getData(category);

  return (
    <div className={styles.container}>
      <h2 className={styles.categoryTitle}>{category}</h2>
      {data.map((data) => (
        <div className={styles.item} key={data.id}>
          <div className={styles.content}>
            <h3 className={styles.title}>{data.title}</h3>
            <p className={styles.desc}>{data.desc}</p>
            <Button url="#" title="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={data.image}
              alt="illust image"
              fill={true}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
