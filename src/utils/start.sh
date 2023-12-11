#!/bin/sh

npm run db:migrate:prod
npm run db:generate
node ./.output/server/index.mjs
