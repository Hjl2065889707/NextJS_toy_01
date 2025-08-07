"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Dashboard = () => {


  const session = useSession()

  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, isLoading, error } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)
  console.log(session)

  if(session.status === "loading"){
    return <div>Loading...</div>
  }
  if(session.status === "unauthenticated"){
    router.push("/dashboard/login")
  }

  if(session.status === "authenticated"){
    return <div>Dashboard</div>
  }
}

export default Dashboard