import Header from "../src/component/Header";
import Gnb from "../src/component/Gnb";
import LoginBody from "../src/component/login/LoginBody";
import SNSLogin from "../src/component/login/SNSLogin";


export default function Login(){
  return (
    <>
      <Header/>
      <Gnb/>
      <LoginBody/>
      <SNSLogin/>
    </>
  )
}