# Network

기본 bridge 네트워크로 컨테이너끼리 통신 가능.

```bash
docker network ls
docker network create appnet
docker run --network appnet --name api ...
```

이름으로 서로 찾는 연습 해보기.
