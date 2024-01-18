FROM php:7.1.33-stretch

RUN echo "deb http://archive.debian.org/debian/ stretch main" > /etc/apt/sources.list && \
    echo "deb http://archive.debian.org/debian-security stretch/updates main" >> /etc/apt/sources.list && \
    apt-get update && \
    apt-get install -y git unzip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
