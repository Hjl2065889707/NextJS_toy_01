"use client"
import React from 'react'
import { signIn } from 'next-auth/react'
import styles from './page.module.css'
const Login = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const email = formData.get('email')
    const password = formData.get('password')
    signIn("credentials", {
      email,
      password,
    })
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email"
          placeholder='Email' 
          className={styles.input} 
          required 
        />
        <input 
          type="password" 
          name="password"
          placeholder='Password' 
          className={styles.input} 
          required 
        />
        <button className={styles.button}>Login</button>
      </form>
      <button onClick={() => signIn("github")}>Login with GitHub</button>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  )
}

export default Login  