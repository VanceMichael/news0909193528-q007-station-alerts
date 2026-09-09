FROM node:22-alpine
WORKDIR /app
COPY package.json index.js index.test.js ./
RUN npm install --ignore-scripts
EXPOSE 3000
CMD ["node", "index.js"]
