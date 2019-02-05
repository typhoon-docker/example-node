FROM node:8.15-stretch-slim

# Setup
RUN mkdir /typhoon
WORKDIR /typhoon
ENV PATH /typhoon/node_modules/.bin:$PATH

# Package requirements
COPY package.json /typhoon/package.json

RUN yarn

# Source code
COPY . /typhoon

# Build the code
RUN yarn build

# Expose the ports for the server
EXPOSE 3000

# Launch the script which will run the server
CMD ["node", "index.js"]
