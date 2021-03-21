import styles from './SNSLogin.module.css'

export default function SNSLogin(){

  return (
    <div className={styles.padding}>
      <div className={styles.titleMain}>
        <span>-</span><span>SNS 로그인 / 가입</span><span>-</span>
      </div>
      <section>
        <button className={styles.looginKakao}>카카오로 로그인 하기</button>
        <button className={styles.looginNaver}>네이버로 로그인 하기</button>
        <button className={styles.loginFacebook}>페이스북으로 로그인 하기</button>
      </section>
    </div>
  )
}