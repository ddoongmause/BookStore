import styles from './Best.module.css';

export default function Best(){
  return (
    <div className={styles.best}>
      <div className={styles.bestMargin}>
        <div className={styles.title}>
          <p>BEST 상품</p>
        </div>
        <div>
          <div>
            <section className={styles.itemBox}>
              <img className={styles.itemImages} src='/images/harry01.jpg'/>
              <p>
                <span className={styles.itemTitle}>해리포터</span>
              </p>
              <p>
                <span>로렌 에이스</span>
                <span>노란돼지</span>
              </p>
              <p>
                <span>10%</span>
                <span>12,870원</span>
                <span>11,700원</span>
              </p>
            </section>
            <section className={styles.itemBox}>
              <img className={styles.itemImages} src='/images/harry01.jpg'/>
              <p>
                <span className={styles.itemTitle}>해리포터</span>
              </p>
              <p>
                <span>로렌 에이스</span>
                <span>노란돼지</span>
              </p>
              <p>
                <span>10%</span>
                <span>12,870원</span>
                <span>11,700원</span>
              </p>
            </section>
            <section className={styles.itemBox}>
              <img className={styles.itemImages} src='/images/harry01.jpg'/>
              <p>
                <span className={styles.itemTitle}>해리포터</span>
              </p>
              <p>
                <span>로렌 에이스</span>
                <span>노란돼지</span>
              </p>
              <p>
                <span>10%</span>
                <span>12,870원</span>
                <span>11,700원</span>
              </p>
            </section>
            <section className={styles.itemBox}>
              <img className={styles.itemImages} src='/images/harry01.jpg'/>
              <p>
                <span className={styles.itemTitle}>해리포터</span>
              </p>
              <p>
                <span>로렌 에이스</span>
                <span>노란돼지</span>
              </p>
              <p>
                <span>10%</span>
                <span>12,870원</span>
                <span>11,700원</span>
              </p>
            </section>
            <section className={styles.itemBox}>
              <img className={styles.itemImages} src='/images/harry01.jpg'/>
            </section>
            <section className={styles.itemBox}>
              <img className={styles.itemImages} src='/images/harry01.jpg'/>
            </section>
            <section className={styles.itemBox}>
              <img className={styles.itemImages} src='/images/harry01.jpg'/>
            </section>

          </div>
        </div>
        <div>
          <img src='/images/harry01.jpg'/>
          <img src='/images/harry01.jpg'/>
          <img src='/images/harry01.jpg'/>
          <img src='/images/harry01.jpg'/>
        </div>
        <div></div>
      </div>
    </div>
  )
}