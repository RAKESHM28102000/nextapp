// "use client"
import React from 'react';
import styles from "./footer.module.css"
import Image from 'next/image';

function Footer() {
  return (
    <div className={styles.container}>
     <div className={styles.h}><p>@Rakesh 2023</p></div>
    <div className={styles.images}>
      <Image src="/images/email.png" alt="img in footer" className={styles.icon} width={15} height={15}></Image>
      <Image src="/images/git.png" alt="img in footer" className={styles.icon} width={15} height={15}></Image>
      <Image src="/images/api.png" alt="img in footer" className={styles.icon} width={15} height={15}></Image>
      <Image src="/images/nb.png" alt="img in footer"  className={styles.icon} width={15} height={15}></Image>
    </div>
    </div>


 
  )
}

export default Footer;