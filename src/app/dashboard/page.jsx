"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'


const Dashboard = () => {


  const session = useSession()

  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, mutate, isLoading, error } = useSWR(
    `api/posts?username=${session?.data?.user?.name}`,
    fetcher
  )

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      })
      mutate()
    } catch (error) {
      console.log(error)
    }
  }

  if (session.status === "loading") {
    return <div>Loading...</div>
  }
  if (session.status === "unauthenticated") {
    router.push("/dashboard/login")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const title = formData.get("title")
    const desc = formData.get("desc")
    const img = formData.get("img")
    const content = formData.get("content")

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, desc, img, content, username: session?.data?.user?.name }),
      })
      mutate()
      e.target.reset()
    } catch (error) {
      console.log(error)
    }
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" width={200} height={100} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" name="title" placeholder="Title" className={styles.input} />
          <input type="text" name="desc" placeholder="Description" className={styles.input} />
          <input type="text" name="img" placeholder="Image" className={styles.input} />
          <textarea
            name="content"
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.button}>Add</button>
        </form>
      </div>
    )
  }
}

export default Dashboard