import styles from './Event.module.css'
import Link from "next/link";

export default function Event(){
  return (
    <div className={styles.eventMargin}>
      <div>
        <p className={styles.eventTitle}>EVENT</p>
      </div>
      <div >
        <Link href='/event'><a>
          <img className={styles.eventImageFirst} src='/images/harry01.jpg'/>
        </a></Link>
        <Link href='/event'><a>
          <img className={styles.eventImage} src='/images/harry01.jpg'/>
        </a></Link>
      </div>
    </div>
  )
}