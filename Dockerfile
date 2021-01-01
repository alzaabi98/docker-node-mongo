FROM node:12

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install -g nodemon
RUN npm install

EXPOSE 8000

CMD ["npm", "start"]