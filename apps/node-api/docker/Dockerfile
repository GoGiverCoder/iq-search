FROM node:carbon

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install -g nodemon --build-from-source
# RUN npm install node-libcurl --build-from-source
RUN npm install

CMD [ "nodemon", "server.js" ]

EXPOSE 3001
