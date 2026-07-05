FROM node:24-alpine

WORKDIR /app/backend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

CMD ["sh", "-c", "npx prisma generate && npm run dev"]
