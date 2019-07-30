#!/bin/bash
echo "Starting deployment in the nginx server"
set -x
cp -R $(pwd)/dist/* /home/nginx/console/

echo "Done. You can check your server"
