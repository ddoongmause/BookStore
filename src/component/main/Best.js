import styles from './Best.module.css';
import Link from "next/link";

export default function Best({status}){
  let title, url = '';

  if(status === 'best'){
    title = 'BEST 상품';
    url = '/best';
  }else{
    title = '신상품';
    url = '/new';
  }
  return (
    <div className={styles.best}>
      <div className={styles.bestMargin}>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
        <div className={styles.itemBoxes}>
          <section className={styles.itemBox}>
            <Link href='/view/25'><a>
              <img className={styles.itemImages} src='/images/harry01.jpg'/>
              <p>
                <span className={styles.itemTitle}>해리포터</span>
              </p>
              <p>
                <span className={styles.itemPublisher}>로렌 에이스</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className={styles.itemPublisher}>노란돼지</span>
              </p>
              <p>
                <span className={styles.itemDiscount}>10%</span>
                <span className={styles.itemPrice}>12,870원</span>
                <span className={styles.itemSellPrice}>11,700원</span>
              </p>
            </a></Link>
          </section>
          <section className={styles.itemBox}>
            <Link href='/view/25'><a>
              <img className={styles.itemImages} src='/images/harry01.jpg'/>
              <p>
                <span className={styles.itemTitle}>해리포터</span>
              </p>
              <p>
                <span className={styles.itemPublisher}>로렌 에이스</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className={styles.itemPublisher}>노란돼지</span>
              </p>
              <p>
                <span className={styles.itemDiscount}>10%</span>
                <span className={styles.itemPrice}>12,870원</span>
                <span className={styles.itemSellPrice}>11,700원</span>
              </p>
            </a></Link>
          </section>
          <section className={styles.itemBox}>
            <Link href='/view/25'><a>
              <img className={styles.itemImages} src='/images/harry01.jpg'/>
              <p>
                <span className={styles.itemTitle}>해리포터</span>
              </p>
              <p>
                <span className={styles.itemPublisher}>로렌 에이스</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className={styles.itemPublisher}>노란돼지</span>
              </p>
              <p>
                <span className={styles.itemDiscount}>10%</span>
                <span className={styles.itemPrice}>12,870원</span>
                <span className={styles.itemSellPrice}>11,700원</span>
              </p>
            </a></Link>
          </section>
          <section className={styles.itemBox}>
            <Link href='/view/25'><a>
              <img className={styles.itemImages} src='/images/harry01.jpg'/>
              <p>
                <span className={styles.itemTitle}>해리포터</span>
              </p>
              <p>
                <span className={styles.itemPublisher}>로렌 에이스</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className={styles.itemPublisher}>노란돼지</span>
              </p>
              <p>
                <span className={styles.itemDiscount}>10%</span>
                <span className={styles.itemPrice}>12,870원</span>
                <span className={styles.itemSellPrice}>11,700원</span>
              </p>
            </a></Link>
          </section>
          <section className={styles.itemBox}>
            <Link href='/view/25'><a>
              <img className={styles.itemImages} src='/images/harry01.jpg'/>
              <p>
                <span className={styles.itemTitle}>해리포터</span>
              </p>
              <p>
                <span className={styles.itemPublisher}>로렌 에이스</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className={styles.itemPublisher}>노란돼지</span>
              </p>
              <p>
                <span className={styles.itemDiscount}>10%</span>
                <span className={styles.itemPrice}>12,870원</span>
                <span className={styles.itemSellPrice}>11,700원</span>
              </p>
            </a></Link>
          </section>
          <section className={styles.itemBox}>
            <Link href='/view/25'><a>
              <img className={styles.itemImages} src='/images/harry01.jpg'/>
              <p>
                <span className={styles.itemTitle}>해리포터</span>
              </p>
              <p>
                <span className={styles.itemPublisher}>로렌 에이스</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className={styles.itemPublisher}>노란돼지</span>
              </p>
              <p>
                <span className={styles.itemDiscount}>10%</span>
                <span className={styles.itemPrice}>12,870원</span>
                <span className={styles.itemSellPrice}>11,700원</span>
              </p>
            </a></Link>
          </section>
          <section className={styles.itemBox}>
            <Link href='/view/25'><a>
              <img className={styles.itemImages} src='/images/harry01.jpg'/>
              <p>
                <span className={styles.itemTitle}>해리포터</span>
              </p>
              <p>
                <span className={styles.itemPublisher}>로렌 에이스</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className={styles.itemPublisher}>노란돼지</span>
              </p>
              <p>
                <span className={styles.itemDiscount}>10%</span>
                <span className={styles.itemPrice}>12,870원</span>
                <span className={styles.itemSellPrice}>11,700원</span>
              </p>
            </a></Link>
          </section>
          <section className={styles.itemBox}>
            <Link href='/view/25'><a>
              <img className={styles.itemImages} src='/images/harry01.jpg'/>
              <p>
                <span className={styles.itemTitle}>해리포터</span>
              </p>
              <p>
                <span className={styles.itemPublisher}>로렌 에이스</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className={styles.itemPublisher}>노란돼지</span>
              </p>
              <p>
                <span className={styles.itemDiscount}>10%</span>
                <span className={styles.itemPrice}>12,870원</span>
                <span className={styles.itemSellPrice}>11,700원</span>
              </p>
            </a></Link>
          </section>
        </div>
        <div className={styles.itemMoreBox}>
          <Link href={url}><a>
            <button className={styles.itemMore}>{title} 더보기 > </button>
          </a></Link>
        </div>
      </div>
    </div>
  )
}