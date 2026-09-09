FROM node:22-alpine
WORKDIR /app
COPY package.json tsconfig.json ./
RUN npm install --ignore-scripts
COPY src src
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/index.js"]
