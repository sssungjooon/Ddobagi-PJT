# syntax=docker/dockerfile:1
FROM node:18
WORKDIR /ddobagi
COPY package.json .
RUN npm install
RUN npm install typescript
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]