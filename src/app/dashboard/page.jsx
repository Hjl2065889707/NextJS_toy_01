"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'

const Dashboard = () => {

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, isLoading, error } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)
  console.log(data)
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard