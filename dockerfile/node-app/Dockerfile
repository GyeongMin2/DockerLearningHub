FROM node:23.5-slim

WORKDIR /app

# package만 먼저 복사하면 의존성 레이어 캐시에 유리
COPY package.json .
RUN ["npm", "install"]

COPY . .

EXPOSE 8080
CMD ["node", "server.js"]
