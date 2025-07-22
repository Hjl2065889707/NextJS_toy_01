import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Description</p>
          <div className={styles.author}>
            <Image
              src="/illustration.png"
              alt="test"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span>John Doe</span>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/illustration.png"
            alt="test"
            fill
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
        texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
        </div>
      </div>
    </div>
  )
}

export default BlogPost