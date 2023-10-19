#set node version
FROM node:18

#create working folder
WORKDIR /app

#download package/-lock.json and build 
COPY package*.json ./
COPY cfg.json ./
COPY out ./out

RUN npm install

CMD ["npm", "start"]