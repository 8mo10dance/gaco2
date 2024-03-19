FROM php:7.4

RUN apt-get update && \
    apt-get install -y git unzip && \
    pecl install redis && \
    docker-php-ext-install pdo pdo_mysql && \
    docker-php-ext-enable redis

COPY --from=composer:2.2 /usr/bin/composer /usr/bin/composer
