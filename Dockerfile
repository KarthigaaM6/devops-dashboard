FROM mhart/alpine-node

# create app directory
RUN mkdir -p /usr/src/app && echo "devops-dashboard"
WORKDIR /usr/src/app

# install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# bundle app source
COPY . /usr/src/app/

EXPOSE 3000

CMD ["npm", "start"]
