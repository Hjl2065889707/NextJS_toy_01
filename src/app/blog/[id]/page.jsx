import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  return {
    title: data.title,
    description: data.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.image}
              alt="test"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span>{data.username}</span>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src={data.image}
            alt="test"
            fill
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          {data.content}
        </div>
      </div>
    </div>
  )
}

export default BlogPost