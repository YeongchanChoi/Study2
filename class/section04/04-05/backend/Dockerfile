#1. 운영체제 및 프로그램 설치
# FROM ubuntu:22.04

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn


FROM node:14
RUN mkdir myfolder

COPY ./package.json /myfolder
COPY ./yarn.lock /myfolder
WORKDIR /myfolder/
RUN yarn install


COPY . /myfolder/
CMD yarn start