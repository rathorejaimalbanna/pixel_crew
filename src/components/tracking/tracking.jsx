import React from 'react'
import styles from "./tracking.module.css"

export default function Tracking() {
  return (
    <div className={styles.tracking}>
      <div>
        <ul className={styles.trackUl}>
          <li className={styles.trackItem}>1</li>
          <li className={`${styles.trackItem} ${styles.item2}`}>2</li>
          <li className={`${styles.trackItem} ${styles.item3}`}>3</li>
        </ul>
      </div>
        <div>
          <ul className={styles.trackDUl}>
            <li className={styles.trackDitem}>Order Received</li>
            <li className={`${styles.trackDitem} ${styles.Ditem2}`}>Order Picked</li>
            <li className={`${styles.trackDitem} ${styles.Ditem3}`}>Order Delevered</li>
          </ul>
        </div>
        <div>
          <ul className={styles.trackDUl} style={{marginTop:"1%",color:"rgb(146,146,146)"}}>
            <li className={styles.trackDitem}>10 April 5:00AM</li>
            <li className={`${styles.trackDitem} ${styles.Ditem2}`}>12 April 4:00AM</li>
            <li className={`${styles.trackDitem} ${styles.Ditem3}`}>15 April 7:00AM</li>
          </ul>
        </div>
    </div>
  )
}
