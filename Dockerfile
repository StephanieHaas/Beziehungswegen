FROM nginx:latest
EXPOSE 80

COPY ./public /usr/share/nginx/html