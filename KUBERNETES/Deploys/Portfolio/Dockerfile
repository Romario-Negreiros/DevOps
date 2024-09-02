FROM nginx:alpine

RUN mkdir /app

COPY dist /app

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5500

CMD [ "nginx", "-g", "daemon off;"]