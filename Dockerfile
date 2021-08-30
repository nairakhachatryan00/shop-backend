FROM node:latest

WORKDIR /shop

COPY package.json package-lock.json /shop/

COPY src/ /shop/src/

RUN npm i

EXPOSE 5000

CMD npm run dev
