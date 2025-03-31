FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
RUN npm run build
FROM node:18
WORKDIR /app
COPY --from=builder /app .
CMD ["node", "dist/main"]