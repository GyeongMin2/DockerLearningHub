# DockerLearningHub

Docker 기초 학습 메모와 실습 모음.

## 구성

- `note/` : 기존 학습 노트
- `basics/` : 개념 정리
- `cli/` : 기본 명령 연습
- `dockerfile/` : Dockerfile 실습
- `compose/` : Compose 실습
- `practice/` : 치트시트/체크리스트
- `dockertest/` : 기존 node 테스트

## 빠른 시작

```bash
cd dockerfile/node-app
docker build -t node-practice:0.1 .
docker run --rm -p 8080:8080 node-practice:0.1
```

## Compose

```bash
cd compose
docker compose up -d --build
docker compose logs -f web
```
