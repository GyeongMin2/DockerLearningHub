# Docker 치트시트

## 이미지/컨테이너
- `docker images`
- `docker ps -a`
- `docker run -d -p 8080:8080 --name app IMAGE`
- `docker stop/rm/rmi`

## 빌드
- `docker build -t name:tag .`

## 로그/디버깅
- `docker logs -f name`
- `docker exec -it name sh`

## Compose
- `docker compose up -d --build`
- `docker compose logs -f`
- `docker compose down`
