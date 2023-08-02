import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import { Button } from '@/components'

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title} >Better design for your digital products.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ipsum at amet hic, consequatur nisi asperiores molestiae perspiciatis distinctio placeat minus vero ullam sint voluptates repellat ex tenetur dicta quo?
        </p>
        <Button title='See Our Works' url='/portfolio' />
      </div>
      <div className={styles.item}>

        <Image className={styles.img} src={Hero} alt='hero Img' />
      </div>


    </main>
  )
}
