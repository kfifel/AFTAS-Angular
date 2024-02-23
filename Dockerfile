FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli@14.0.0

COPY . .

RUN npm build-prod

EXPOSE 80
