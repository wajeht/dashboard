#!/bin/sh

npm run db:generate
npm run db:migrate:prod
node ./.output/server/index.mjs
