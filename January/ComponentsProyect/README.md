# Comandos vía terminal (linux), para encender el proyecto

## EN CASO DE NO TENER DOCKER
    sudo apt install docker

## Montar el proyecto (tener instalado docker)
    docker compose up -d

## Montar la carpeta vendor
    composer install

## Problemas de permisos
### Cambiarselos a la carpeta storage
    chmod -R gu+w storage

    chmod -R guo+w storage

    sudo chown -R $USER:www-data storage

    sudo chown -R $USER:www-data bootstrap/cache



# Comandos generales

## Encender contenedores del proyectoproyecto
    docker start laravel-app mysql nginx-webserver

## Parar contenedores del proyecto proyecto
    docker stop laravel-app mysql nginx-webserver

## Borrar contenedores del proyecto
    docker rm laravel-app mysql nginx-webserver

## Modificar algo del contenedor
    docker exec -it laravel-app sh

## Archivo .env
    APP_NAME=Laravel
    APP_ENV=local
    APP_KEY=base64:Mo/BvUzEAceLywoFfpH97fmk6jLOU6DNODVGTGKnJl4=
    APP_KEY=
    APP_DEBUG=true
    APP_TIMEZONE=UTC
    APP_URL=http://localhost

    APP_LOCALE=en
    APP_FALLBACK_LOCALE=en
    APP_FAKER_LOCALE=en_US

    APP_MAINTENANCE_DRIVER=file
    # APP_MAINTENANCE_STORE=database

    PHP_CLI_SERVER_WORKERS=4

    BCRYPT_ROUNDS=12

    LOG_CHANNEL=stack
    LOG_STACK=single
    LOG_DEPRECATIONS_CHANNEL=null
    LOG_LEVEL=debug

    DB_CONNECTION=mysql
    DB_HOST=mysql
    DB_PORT=3306
    DB_DATABASE=laravel
    DB_USERNAME=laravel
    DB_PASSWORD=laravel

    SESSION_DRIVER=database
    SESSION_LIFETIME=120
    SESSION_ENCRYPT=false
    SESSION_PATH=/
    SESSION_DOMAIN=null

    BROADCAST_CONNECTION=log
    FILESYSTEM_DISK=local
    QUEUE_CONNECTION=database

    CACHE_STORE=database
    CACHE_PREFIX=

    MEMCACHED_HOST=127.0.0.1

    REDIS_CLIENT=phpredis
    REDIS_HOST=127.0.0.1
    REDIS_PASSWORD=null
    REDIS_PORT=6379

    MAIL_MAILER=log
    MAIL_SCHEME=null
    MAIL_HOST=127.0.0.1
    MAIL_PORT=2525
    MAIL_USERNAME=null
    MAIL_PASSWORD=null
    MAIL_FROM_ADDRESS="hello@example.com"
    MAIL_FROM_NAME="${APP_NAME}"

    AWS_ACCESS_KEY_ID=
    AWS_SECRET_ACCESS_KEY=
    AWS_DEFAULT_REGION=us-east-1
    AWS_BUCKET=
    AWS_USE_PATH_STYLE_ENDPOINT=false

    VITE_APP_NAME="${APP_NAME}"
