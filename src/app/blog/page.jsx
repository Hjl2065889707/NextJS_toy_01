import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/test" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image 
          src="/illustration.png" 
          alt="test" 
          width={400}
          height={250}
          className={styles.image} 
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="/blog/test">
        <div className={styles.imageContainer}>
          <Image 
          src="/illustration.png" 
          alt="test" 
          width={400}
          height={250}
          className={styles.image} 
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
      <Link href="/blog/test">
        <div className={styles.imageContainer}>
          <Image 
          src="/illustration.png" 
          alt="test" 
          width={400}
          height={250}
          className={styles.image} 
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog