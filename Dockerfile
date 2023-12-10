FROM node:20.6.1-alpine3.17 AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY ./ .

RUN npm run build

FROM node:20.6.1-alpine3.17

RUN apk update && apk upgrade && apk add dumb-init curl && adduser -D nuxtuser

USER nuxtuser

WORKDIR /usr/src/app

COPY --chown=nuxtuser:nuxtuser --from=build /usr/src/app ./

EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/api/healthz || exit 1

ENTRYPOINT ["dumb-init", "node", "./.output/server/index.mjs"]
