import { Button } from '@/components';
import Image from 'next/image';
import styles from './page.module.css';

type Props = {
    params: {
        category: string;
    }
}

export default function Category({params: {category}}:Props) {
    return (
      <div className={styles.container}>
        <h2 className={styles.categoryTitle}>{category}</h2>

        <div className={styles.item}>
          <div className={styles.content}>
            <h3 className={styles.title}>title</h3>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              suscipit rerum facilis voluptates, hic fugiat provident eveniet
              commodi assumenda aliquid, quisquam magni aliquam, quidem officiis
              quibusdam doloremque veniam praesentium soluta.
            </p>
            <Button url="#" title="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={""}
              alt="illust image"
              fill={true}
            />
          </div>
        </div>
      </div>
    );
}
