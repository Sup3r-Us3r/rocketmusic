FROM node:alpine

ENV HOME=/usr/app

WORKDIR $HOME/rocketmusic

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]
