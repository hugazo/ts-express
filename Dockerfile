# ARG NODE_VERSION
FROM node:15.3.0-alpine AS BUILD

WORKDIR /app
COPY package*.json ./
COPY . .
RUN yarn
RUN yarn build:prod

#
FROM node:15.3.0-alpine AS SERVER
WORKDIR /app
COPY package*.json ./
RUN yarn install --production
COPY --from=BUILD /app/.env /app/.env
COPY --from=BUILD /app/build /app

RUN ls -lah

ENTRYPOINT ["node", "index.js"]
