"use client"
import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'

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
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>lamamia</Link>
     <div className={styles.links}>
      {links.map((link) => (
        <Link key={link.id} href={link.href} className={styles.link}>
          {link.label}
        </Link>
      ))}
      <button className={styles.logout}
      onClick={() => {
        console.log("logout");
      }}
      >
        Logout
      </button>
     </div>
    </div>
  )
}

export default Navbar