#!/bin/sh

npx prisma migrate deploy
npx prisma generate
node ./.output/server/index.mjs
