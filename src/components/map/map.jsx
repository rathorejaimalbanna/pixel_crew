import React from "react";
import styles from "./map.module.css";

export default function Map() {
  return (
    <div className={styles.map}>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5115661153177!2d75.80411697522226!3d26.85548337668139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db675f594300b%3A0x16a3a8393db6f913!2sGaurav%20Tower!5e0!3m2!1sen!2sin!4v1712717604673!5m2!1sen!2sin"
        width="95%"
        height="90%"
        style={{border:"0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
