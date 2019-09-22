# base image
FROM node:11-alpine

# set working directory
WORKDIR /usr/src/app

# environment vars must be included in heroku.yml and dockerfile
ARG NODE_ENV=production

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
# COPY package.json /usr/src/app/package.json
COPY . /usr/src/app/

# COPY frontend/package.json /usr/src/app/frontend/package.json
RUN npm install --silent
RUN npm run heroku-postbuild

# start app
CMD ["npm", "start"]
