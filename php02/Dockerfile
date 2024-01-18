FROM php:7.4

RUN apt-get update && \
    apt-get install -y git unzip libfreetype6-dev libjpeg62-turbo-dev libpng-dev && \
    pecl install grpc && \
    docker-php-ext-install gd && \
    docker-php-ext-enable grpc

COPY --from=composer:2.2 /usr/bin/composer /usr/bin/composer
