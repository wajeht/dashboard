# Build Stage
FROM node:20.6.1-alpine3.17 AS build

RUN apk update && apk upgrade

WORKDIR /usr/src/app

COPY package* ./

RUN npm install

COPY . ./

RUN npx nuxt build

# Final Image
FROM node:20.6.1-alpine3.17

# Update, Upgrade, Install dumb-init and curl
RUN apk update && apk upgrade && apk add dumb-init curl && adduser -D nuxtuser

USER nuxtuser

WORKDIR /usr/src/app

# Copy built files from build stage
COPY --chown=nuxtuser:nuxtuser --from=build /usr/src/app/.output ./

EXPOSE 3000

# Environment Variables
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

# Health Check
HEALTHCHECK CMD curl -f http://localhost:3000/api/healthz || exit 1

# Entry Point
ENTRYPOINT ["dumb-init", "node", "./.output/server/index.mjs"]
