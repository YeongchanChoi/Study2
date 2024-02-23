#1. 운영체제 및 프로그램 설치
# FROM ubuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn


# 1. 운영체제 및 프로그램 설치(이미 리눅스, node, npm, yarn까지 모두 깔려있는 컴퓨터 다운로드 하는 방식)
FROM node:14
# 2. 내 컴퓨터 안에 있는 폴더나 파일을 도커안으로 복사하기
COPY ./index.js /index.js
# 3. 도커 안에서 index.js 실행시키기
# RUN : 저장 CMD: 저장x
CMD node index.js
# docker exec -it 52bf538004fd /bin/bash