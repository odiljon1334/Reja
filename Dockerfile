FROM node:16.19.0

COPY . /reja
WORKDIR /reja

COPY package*.json /reja

CMD npm install && node server.js


# DOCKERFILE => DOCKER IMAGE => direckt docker: CONTAINER
# DOCKERFILE => DOCKER IMAGE => direckt docker-compose: CONTAINER