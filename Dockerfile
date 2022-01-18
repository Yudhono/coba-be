FROM node:12-slim
RUN rm -f /etc/localtime && ln -s /usr/share/zoneinfo/Asia/Jakarta /etc/localtime
RUN apt-get update
RUN apt-get install -y ca-certificates
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install --production && npm cache clean --force
COPY . /usr/src/app/
EXPOSE 3000
CMD [ "npm", "start" ]