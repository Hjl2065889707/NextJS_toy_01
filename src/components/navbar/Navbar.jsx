"use client"
import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'

const links = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    id: 3,
    label: "Blog",
    href: "/blog",
  },
  {
    id: 4,
    label: "About",
    href: "/about",
  },
  {
    id: 5,
    label: "Contact",
    href: "/contact",
  },
  {
    id: 6,
    label: "Dashboard",
    href: "/dashboard",
  },
]

const Navbar = () => {
  const session = useSession()
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>lamamia</Link>
     <div className={styles.links}>
      <DarkModeToggle />
      {links.map((link) => (
        <Link key={link.id} href={link.href} className={styles.link}>
          {link.label}
        </Link>
      ))}
      {session.status === "authenticated" && (
        <button className={styles.logout}
        onClick={signOut}
        >
          Logout
        </button>
      )}
     </div>
    </div>
  )
}

export default Navbar