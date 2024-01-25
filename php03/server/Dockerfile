FROM php:7.4

RUN apt-get update && \
    apt-get install -y git unzip && \
    docker-php-ext-install pdo_mysql

COPY --from=composer:2.2 /usr/bin/composer /usr/bin/composer
