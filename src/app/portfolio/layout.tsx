import React from 'react'
import styles from './page.module.css';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Work</h1>
    {children}
    
    </div>
  );
}
