#!/bin/bash

version=$1

[ -z $version ] && version=0.1 && echo "\nset defaul version 0.1\n"

docker build --no-cache -t nestorsanchezz/intalnet_frontend:$version .

docker tag nestorsanchezz/intalnet_frontend:$version nestorsanchezz/intalnet_frontend:latest

docker push nestorsanchezz/intalnet_frontend:$version
docker push nestorsanchezz/intalnet_frontend:latest

ssh -o StrictHostKeyChecking=no -i ./server-key.pem ubuntu@intalnettelecomunicaciones.com "cd /home/ubuntu/IntalnetConfigServer && make reload-front" 
