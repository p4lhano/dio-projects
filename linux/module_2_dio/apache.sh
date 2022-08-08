#!/bin/bash

apt-get update
apt-get upgrade -y
apt-get install apache2 unzip -y

cd /tmp
wget https://github.com/denilsonbonatti/linux-site-dio/archive/refs/heads/main.zip
unzip main.zip
mv -f ./linux-site-dio-main/* /var/www/html/