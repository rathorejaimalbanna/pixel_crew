import React from 'react'
import styles from "./details.module.css"

export default function Details() {
  return (
    <div className={styles.details} >
     <h3>Order Details</h3> 
     <span >Your order will reach by:</span>
     <span style={{color:"rgb(10, 147, 132)",fontSize:"larger",marginLeft:"25%"}}>20th April'24 11:00 AM IST</span>
    </div>
  )
}
