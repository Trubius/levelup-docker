FROM node:8

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

ADD tsconfig.json ./
ADD src ./src

RUN yarn build

CMD [ "npm", "start" ]
