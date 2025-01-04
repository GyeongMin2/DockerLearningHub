# 보통 OS정도 넣어줌
FROM node:23.5-slim

# 작업 디렉토리 설정
WORKDIR /app

# . 은 현재 디렉토리를 의미 COPY로 복사
COPY . .

# package.json 파일에 있는 모든 모듈 설치
# 1. RUN npm install
# 2. RUN ["npm", "install"] 권장
RUN ["npm", "install"]

# 포트 노출 (안써도 됨)
EXPOSE 8080

# 컨테이너 실행시 실행할 명령어
CMD ["node", "server.js"]