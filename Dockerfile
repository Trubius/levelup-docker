FROM node:8

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY .prettierrc /app

ADD src /app/src

RUN yarn build

CMD [ "npm", "start" ]
