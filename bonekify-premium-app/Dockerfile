# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR ./

# add `/app/node_modules/.bin` to $PATH
ENV PATH ./node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm cache clean --force
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]
