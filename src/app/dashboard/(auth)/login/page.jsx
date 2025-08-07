"use client"
import React from 'react'
import { signIn } from 'next-auth/react'
import styles from './page.module.css'
const Login = () => {


  return (
    <div className={styles.container}>
      <button onClick={() => signIn("github")}>Login with GitHub</button>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  )
}

export default Login