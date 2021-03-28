import Header from "../src/component/Header";
import Gnb from "../src/component/Gnb";
import SNSLogin from "../src/component/login/SNSLogin";
import useState from 'react';
import LoginBody from "../src/component/login/LoginBody";

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
