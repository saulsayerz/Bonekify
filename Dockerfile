FROM php:8.0-apache
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
RUN apt-get update && apt-get upgrade -y
RUN a2enmod rewrite
RUN printf 'upload_max_filesize = 256M\n' >> /usr/local/etc/php/conf.d/uploads.ini

ADD . /var/www/html