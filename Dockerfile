FROM node:12-alpine

WORKDIR ./app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

RUN npm run build

ENTRYPOINT ["node", "--max_old_space_size=4096", "dist/main.js"]