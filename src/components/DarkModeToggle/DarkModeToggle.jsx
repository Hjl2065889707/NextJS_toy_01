"use client"

import React from 'react'
import styles from './DarkModeToggle.module.css'
import { ThemeContext } from '../../../context/ThemeContext';
import { useContext } from 'react';

const DarkModeToggle = () => {
    const { mode, toggle } = useContext(ThemeContext);
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>☀️</div>
            <div className={styles.ball}
                style={mode === "light" ? { left: "4px" } : { right: "4px" }}
            />
        </div>
    )
}

export default DarkModeToggle