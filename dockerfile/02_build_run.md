# 빌드 / 실행

```bash
cd dockerfile/node-app
docker build -t node-practice:0.1 .
docker run -p 8080:8080 node-practice:0.1
```

태그 형식: `이름:버전`
