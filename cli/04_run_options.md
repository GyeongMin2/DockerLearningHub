# docker run 옵션

자주 쓸 것:
- `-d` : 백그라운드
- `-p host:container` : 포트 포워딩
- `--name` : 컨테이너 이름
- `-it` : 대화형 터미널

예시:
```bash
docker run -d --name web -p 8080:80 nginx
```
