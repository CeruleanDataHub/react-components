FROM nginx:1.17.9-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
COPY storybook-static ./
