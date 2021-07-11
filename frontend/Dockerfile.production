# pull the official base image
FROM node:alpine as build-step
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json .
COPY yarn.lock .
COPY .env .
RUN yarn install
# add app
COPY . .
# start app
RUN yarn build

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/build /usr/share/nginx/html