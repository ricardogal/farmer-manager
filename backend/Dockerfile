# Etapa de build
FROM node:20-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production=false
COPY . .
RUN npm run build

# Etapa de produção
FROM node:20-alpine AS production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/.env* ./
EXPOSE 3000

# Por padrão, inicia em produção. Para dev, sobrescreva o CMD no docker-compose
CMD ["npm", "run", "start:prod"]
