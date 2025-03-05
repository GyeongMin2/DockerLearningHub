# 자주 한 실수

1. 포트 방향을 거꾸로 적음 (`컨테이너:호스트`로 헷갈림)
2. `docker rm` 전에 stop 안 함
3. build 컨텍스트(.)를 잘못 지정
4. node_modules를 이미지에 그대로 넣음 -> .dockerignore 필요
