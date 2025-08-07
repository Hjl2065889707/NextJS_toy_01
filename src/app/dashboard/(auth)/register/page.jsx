"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Register = () => {
  const router = useRouter()
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      })
      if (res.status === 201) {
        router.push('/dashboard/login?success=Account has been created successfully')
      } else {
        setError(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          placeholder='Username' 
          className={styles.input} 
          required 
        />
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
        <button className={styles.button}>Register</button>
      </form>
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  )
}

export default Register