FROM node:18-alpine as base

WORKDIR /app

COPY . .

RUN apk add --no-cache git g++ make py3-pip
RUN yarn install --pure-lockfile --non-interactive

ENV NODE_ENV=production

RUN yarn build
