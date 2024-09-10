# Dockerfile for local development
# UI pulls data from from testbed api in local docker-compose network

# Builder
FROM node:16.13.2-alpine3.15 as builder
WORKDIR /app

ARG ENV_FILE_PATH=.env.development

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY ${ENV_FILE_PATH} .env
COPY public public
COPY src src
#RUN npm run reactBuild
RUN npm run reactCleanBuild
RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh /

# Final
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Specify the entrypoint script
ENTRYPOINT ["/entrypoint.sh"]
