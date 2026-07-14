########################################
# Stage 1 — build
########################################
FROM 227294514868.dkr.ecr.us-east-1.amazonaws.com/node:22-slim AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

RUN npm prune --omit=dev

########################################
# Stage 2 — runtime
########################################
FROM 227294514868.dkr.ecr.us-east-1.amazonaws.com/node:22-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./

# Transfere ownership para o usuário node antes de trocar de usuário.
# Necessário porque os COPY acima rodam como root — sem isso o Next.js
# não consegue escrever o cache ISR em .next/cache e .next/server/app/.
RUN chown -R node:node /app

USER node

EXPOSE 3000

CMD ["npm", "start"]
