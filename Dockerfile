FROM node:16-alpine

RUN yarn global add lerna

RUN apk add --no-cache git openssh

ENTRYPOINT sh
