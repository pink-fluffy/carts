# Use Node v16 as the base image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9046

ARG CARTS_PORT
ARG IDENTITY_PORT
ARG CARTS_API_ROOT
ARG IDENTITY_HOST
ARG CARTS_MONGODB_URI
ARG JWT_ACCESS_SECRET
# Run node
RUN npm start
CMD ["node", "dist/server.js"]
