FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run

EXPOSE 3001

CMD ["npm", "start"]