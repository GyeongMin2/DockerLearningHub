# 환경변수

```bash
docker run -e PORT=8080 -e NODE_ENV=development ...
# 파일로
docker run --env-file .env ...
```

비밀값은 이미지에 넣지 않기.
