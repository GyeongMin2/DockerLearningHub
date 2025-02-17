# Volume

컨테이너 파일시스템은 기본적으로 휘발성.

데이터 남기려면:
```bash
docker volume create mydata
docker run -v mydata:/app/data ...
# 또는 바인드 마운트
docker run -v $(pwd)/data:/app/data ...
```
