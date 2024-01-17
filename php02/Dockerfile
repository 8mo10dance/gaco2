FROM php:7.4-cli

RUN apt-get update && \
    apt-get install -y git unzip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
