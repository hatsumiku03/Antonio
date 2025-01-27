# Comandos vía terminal (linux), para encender el proyecto

## EN CASO DE NO TENER DOCKER
    sudo apt install docker

## Montar el proyecto (tener instalado docker)
    docker compose up -d

## Encender contenedores del proyectoproyecto
    docker start laravel-app mysql nginx-webserver

## Parar contenedores del proyecto proyecto
    docker stop laravel-app mysql nginx-webserver

## Borrar contenedores del proyecto
    docker stop laravel-app mysql nginx-webserver