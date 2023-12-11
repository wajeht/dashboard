#!/bin/sh

npx prisma generate
npx prisma migrate deploy
node ./.output/server/index.mjs
