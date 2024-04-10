import React from 'react'
import styles from "./details.module.css"

export default function Order() {
  return (
    <div className={styles.order}>
      <div className={styles.details2}>
        <h3>Order Number</h3>
        <p>28374744</p>
        <h3>Pickup Address</h3>
        <p>Gaurav Tower, GT Bazaar Gt Marg,  Malviya Nagar, Jaipur, Rajasthan 302017</p>
      </div>
      <div className={styles.details1}>
        <h3>Payment Mode</h3>
        <p>Prepaid</p>
        <h3>Delivery Address</h3>
        <p>Gaurav Tower, GT Bazaar Gt Marg, Malviya Nagar, Jaipur, Rajasthan 302017</p>
      </div>
    </div>
  )
}
