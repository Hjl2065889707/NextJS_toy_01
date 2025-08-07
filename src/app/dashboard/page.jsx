"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'

const Dashboard = () => {

  const session = useSession()
  console.log(session)

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, isLoading, error } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard