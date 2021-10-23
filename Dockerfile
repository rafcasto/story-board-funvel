FROM node:carbon

run apt-get update
run apt-get upgrade -y
run apt-get -y install autoconf automake libtool nasm make pkg-config git apt-utils

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Version 
RUN npm -v 
run node -v

# Install app dependencies
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/

RUN npm install

# Bundle app source
COPY . /usr/src/app

# Port to listener
EXPOSE 6006

# Environment variables
ENV NODE_ENV production
ENV PORT 6006
ENV PUBLIC_PATH "/"

RUN npm run start:build

# Main command
CMD [ "npm", "run", "storybook" ]