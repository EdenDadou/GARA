#!/bin/bash
echo "Starting deployment in the nginx server"
ls /home
cp -R $(pwd)/dist/* /home/nginx/console/

echo "Done. You can check your server"
