import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const Category = ({params}) => {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Test
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
          src="/illustration.png" 
          alt="category" 
          fill={true} 
          className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Test
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image 
          src="/illustration.png" 
          alt="category" 
          fill={true} 
          className={styles.img}
          />
        </div>
      </div>
    </div>
  )
}

export default Category