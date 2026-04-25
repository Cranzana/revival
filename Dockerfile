FROM node:22-alpine AS base
WORKDIR /app
RUN corepack enable

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

FROM deps AS builder
ARG NEXT_PUBLIC_APP_URL
ARG NEXT_PUBLIC_DEFAULT_TENANT=demo
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL
ENV NEXT_PUBLIC_DEFAULT_TENANT=$NEXT_PUBLIC_DEFAULT_TENANT
COPY . .
RUN pnpm build:scramjet && pnpm build:web

FROM base AS runner
ENV NODE_ENV=production
ENV PORT=3000
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/app ./app
COPY --from=builder /app/assets ./assets
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/lib ./lib
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/scripts ./scripts
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/next.config.ts ./next.config.ts
EXPOSE 3000
CMD ["node", "scripts/run-server.mjs", "--production"]
