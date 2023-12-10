FROM node:20.6.1-alpine3.17 AS build

RUN apk update && apk upgrade

WORKDIR /usr/src/app

COPY package* ./

RUN npm install

COPY . ./

RUN npx nuxt build

FROM node:20.6.1-alpine3.17

RUN apk update && apk upgrade && apk add dumb-init && adduser -D nuxtuser

USER nuxtuser

WORKDIR /usr/src/app

COPY --chown=nuxtuser:nuxtuser --from=build /usr/src/app/.output ./

EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

ENTRYPOINT ["dumb-init", "node", ".output/server/index.mjs"]
