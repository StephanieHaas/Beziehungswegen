FROM nginx:latest
EXPOSE 80

COPY ./artifact /usr/share/nginx/html