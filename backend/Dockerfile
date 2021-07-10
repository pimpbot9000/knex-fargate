FROM node:latest

WORKDIR /usr/src/app
COPY index.js index.js
COPY package.json package.json
COPY src src
COPY .env .env
COPY yarn.lock yarn.lock
RUN yarn install
CMD ["yarn", "start"]