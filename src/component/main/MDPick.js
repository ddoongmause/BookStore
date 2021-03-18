import styles from './MDPick.module.css'

export default function MDPick(){
  return (
      <div className={styles.mdPickDiv}>
        <div className={styles.mdPickTitle}>
          MD가 추천하는 상품을 한 눈에 보기
        </div>
        <div>
          <span>상품 슬라이드?</span>
        </div>
        <div>
          <button className={styles.mdPickBtn}>MD 추천 상품 더 보기</button>
        </div>
      </div>
    )
}