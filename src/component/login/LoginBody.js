import styles from './LoginBody.module.css';
import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginBody(){
  function check(){
    alert("하이")
  }

  return (
    <div className={styles.padding}>
      <div className={styles.greeting}>
        <span>환영합니다 :)</span>
      </div>
      <div className={styles.info}>
        <span>통합회원으로 로그인 가능합니다</span>
      </div>
      <section>
        <input className={styles.inputId} placeholder='아이디 입력'/>
        <input className={styles.inputPassword} type='password' placeholder='비밀번호 입력' />
        <button className={styles.loginButton} onClick={check}>로그인</button>
      </section>
      <section className={styles.find}>
        <Link href='/naver'><a><span>아이디 찾기</span></a></Link>
        <Link href='/naver'><a><span className={styles.findCenter}>비밀번호 찾기</span></a></Link>
        <Link href='/naver'><a><span>회원가입</span></a></Link>
      </section>
    </div>
  );
}
