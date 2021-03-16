import styles from './Gnb.module.css';
import {useRouter} from "next/router";
import Link from "next/link";

export default function Gnb(){
  const router = useRouter();
  return (
    <div className={styles.category}>
      <ul className={styles.categoryUl}>
        <li className={styles.categoryLiFirst}><Link href='/naver'><a>단권</a></Link></li>
        <li className={styles.categoryLi}><Link href='/naver'><a href='/naver'>전집</a></Link></li>
        <li className={styles.categoryLi}><Link href='/naver'><a href='/naver'>공지사항</a></Link></li>
        <li className={styles.categoryLi}><Link href='/naver'><a href='/naver'>이벤트</a></Link></li>
        <li className={styles.categoryLi}><Link href='/naver'><a href='/naver'>고객센터</a></Link></li>
      </ul>
    </div>
  )
}