import React from 'react'
import styles from "./App.module.css"
import Tracking from './components/tracking/tracking'
import Details from './components/details/details'
import Order from './components/details/order'
import Map from './components/map/map'

export default function App() {
  return (
    <div className={styles.main}>
      <Tracking/>
      <div className={styles.content}>
        <div className={styles.detailsDiv}>
            <Details/>
            <Order/>
        </div>
        <div className={styles.mapDiv}>
        <Map/>
        </div>
      </div>
    </div>
  )
}
