![메인 소개 이미지](https://qportminiprojectmini.s3.ap-northeast-2.amazonaws.com/sample/%EC%8B%B8%EC%9D%B4%EC%9B%94%EB%93%9C+%EB%A9%94%EC%9D%B8.png)
![미니홈피](https://qportminiprojectmini.s3.ap-northeast-2.amazonaws.com/sample/cyword+myhomp.png)
---------------------------

# ✨Cyworld (추억의 싸이월드)

- **그 때 우리가 느꼈던 그 시절 감성.**

# 📆 프로젝트 기간

- 2022/10/28 ~ 2022/11/03

# 👒 팀 소개
| 역할 | 이름 | git |
| ------ | -- | ----|
| Back-end | 정현진 | https://github.com/hyunjin9603|
| Back-end | 예지완 | https://github.com/kmdet1235|
| Back-end | 장용호 | https://github.com/JangKroed|
| Front-end | 정도은 | https://github.com/do-eun|
| Front-end | 안치영 | https://github.com/Returnmakdo|  


# 👔 Project Architecture

![아키텍처](./img/architecture.png)


# 🩳 API 명세서
[▶ 추억의 드싸이월드 REST API 바로가기](https://www.notion.so/05a9b7f3797647bbba6acfddfcf93a8c?v=f9309d1483704ed7b90d09d77e70a2f7)

# 🧦 DB 설계도(ERD)
![erd최최치최최최최최최최치ㅗ치ㅚ최최최최종](./img/drawSQL-export-2022-11-02_22_07.png)



# 👟 사용한 라이브러리(패키지)


### ✅ 백엔드에서 이미지 처리를 한 이유

- 이미지 용량 제한을 할 수 있고, DB와 S3를 연동하여 확실한 데이터 처리가 가능함. 예를 들어, 유저가 게시물을 삭제하거나 회원 탈퇴할 경우, 어떤 유저의 파일인지 추적, 처리하여 메모리 낭비를 줄이고, 데이터의 무결성을 증대할 수 있음.



### ✅ 관계형 데이터베이스(RDBMS)를 사용한 이유

- 프로젝트 구조 상 유저를 중심으로 관계를 맺는 데이터가 많기 때문에 DB indexing으로 데이터 관리를 용이하게 함.



### ✅ 왜 session이 아닌 jwt방식을 선택했을까?

- **세션 방식**은 서버의 메모리 내부에 유저의 정보를 저장함. 유저의 수가 증가할수록 세션의 양이 많아지는 만큼 메모리에 부하가 걸릴 수 있음. 실제 서비스 배포를 위한 프로젝트에서는 유저의 수가 적지 않을 거라 예상하여 **JWT 토큰 인증방식** 선택. JWT는 서버의 메모리에 저장 공간을 확보하지 않고 토큰 발급 및 확인 절차만 거치므로 서버 자원과 비용을 절감할 수 있음.
- 하지만 현재 프로젝트의 **jwt 방식은 토큰의 유효기간이 만료되지 않으면 소멸하지 않기 때문에 토큰 탈취, 해킹 등 보안에 취약점을 가지고 있음. access token/refresh token으로 변경하여 보안 강화 필요.**

# 💍 기술 소개

```json

"dependencies"
	
    "aws-sdk": "^2.1242.0",     // aws 서비스를 사용하기 위한 라이브러리
    "bcrypt": "^5.0.1",         // 비밀번호 해쉬화를 위한 라이브러리
    "cookie-parser": "^1.4.6",  // 요청 된 쿠키를 추출 할 수있게 해주는 미들웨어
    "cors": "^2.8.5",           // CORS 이슈 해결을 위한 라이브러리
    "bcrypt": "^5.1.0",         // 유저 비밀번호 해쉬를 위한 라이브러리
    "dotenv": "^16.0.3",        //.env의 정보를 환경변수로 등록해주는 라이브러리
    "express": "^4.18.2",       // 웹 서버를 구현하기 위한 라이브러리
    "helmet": "^6.0.0",         // header에 설정을 통해 웹 취약점으로부터 서버 보호
    "jsonwebtoken": "^8.5.1",   // jwt로그인 방식을 위한 라이브러리
    "multer": "^1.4.5-lts.1",   // image를 form데이터로 받기 위한 라이브러리
    "multer-s3": "^2.10.0",     // aws s3를 multer와 연결해주는 라이브러리
    "mysql2": "^2.3.3",         // mysql을 사용할 수 있게 해주는 라이브러리
    "joi": "^17.6.4",           // 들어오는 입력값에 대한 유효성 검사를 해주는 
    "prettier": "^2.7.1",       // 코드 컨벤션을 위한 라이브러리
    "sequelize": "^6.25.3",     // ORM 라이브러리
    "hpp": "^0.2.3",            // HTTP 파라미터 오염 공격 방어
    "node-schedule": "^2.1.0",  // 스케쥴 업무 자동화
    "winston": "^3.8.2",        // 로그 파일 생성
    "winston-daily-rotate-file": "^4.7.1"  // 로그 파일 관리

"devDependencies": {
    "sequelize-cli": "^6.5.2"    // Sequelize 지원 라이브러리
    "nodemon": "^2.0.20",        // 서버 재 가동을 쉽게 해주는 라이브러리
    "morgan": "^1.10.0",         // 통신 로그를 남기기 위한 라이브러리
  }
  
```

# 💎트러블 슈팅

