FROM node:18-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /usr/src/app/web-build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
