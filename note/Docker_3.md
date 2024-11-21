## Dockerfile로 이미지 빌드

1. Q. 내가 만든 프로그램을 이미지로 만들고싶으면?
- A. Dockerfile을 작성하고, 이미지를 빌드하면 됨

2. Dockerfile 작성
- 이미지에 넣을 내용 채우기
  - 어떤 OS를 사용할 것인지
  - 어떤 프로그램을 사용할 것인지
  - 어떤 터미널명령어를 사용할 것인지
  - 어떤 파일을 집어넣을 것인지
  - ...
- 이미지 빌드 명령어 입력
- 이미지 실행 명령어 입력

```dockerfile
FROM 이미지
#보통 OS 이미지를 사용 ex) Ubuntu가 사용하고싶으면 DockerHub에서 ubuntu 이미지 pull 후 FROM ubuntu:latest 입력


```