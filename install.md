# 초반 세팅 정리 

1. yarn global add create-react-app

2. create-react-app bookstore(create-react-app '해당폴더')

3. cd bookstore

4. yarn add mobx mobx-react

5. yarn start

6. yarn add express

7. yarn global add http-rpoxy-middleware 

8. yarn gloabl add npm-run-all

9. package.json 값 수정
```
"start": "npm-run-all -p start:**",
"start:client": "react-scripts start",
"start:server": "node ./server/server.js",
```
