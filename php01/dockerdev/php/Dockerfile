FROM php:8.3.3

RUN apt-get update && \
    apt-get install -y git unzip

COPY --from=composer /usr/bin/composer /usr/bin/composer
