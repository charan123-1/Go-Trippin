FROM node:16-alpine3.12

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

COPY ./ ./

RUN npm i

EXPOSE 3000

CMD ["npm","start"]
