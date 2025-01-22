# 포트 포워딩

호스트의 8080을 컨테이너 80으로 연결:

```bash
docker run -p 8080:80 dockercloud/hello-world
```

브라우저에서 localhost:8080으로 확인.
