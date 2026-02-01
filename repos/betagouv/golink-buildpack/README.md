# golink-buildpack

Be careful, golink build take space and you might need to set your container limit to a higher value. 
If you are working on Scalingo you can ask them to set this value higher.

## Config :
Set GOLINK_VERSION to the desire version (without the "v") and launch deploy

## Migration :
We experimented issue during migration. 
- All rows from Schedule must be dropped before executing : 20220305233635_availability_schedules

## Debug on local :

docker run --name golink -it -p 8065:8065 -v "$(pwd)"/.env:/env/.env -v "$(pwd)":/buildpack scalingo/scalingo-18:latest bash

bash buildpack/bin/detect
bash buildpack/bin/compile /build /cache /env
bash buildpack/bin/release
