FROM node:18-alpine as build-step

# RUN npm install -g npm@latest

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY src ./src
COPY public ./public

RUN npm install

CMD ["npm", "start"]