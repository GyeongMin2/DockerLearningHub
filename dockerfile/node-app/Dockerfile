FROM node:23.5-slim

WORKDIR /app

COPY . .

RUN ["npm", "install"]

EXPOSE 8080

CMD ["node", "server.js"]
