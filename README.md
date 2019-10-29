# LEVEL UP: Docker

We have a webserver which returns

```json
{ "status": "ok" }
```

for every `GET` call against it.

## The task

1. Make an image out of this application with the help of `Dockerfile`
2. Create a `docker-compose.yml` which has a service called `app` using this the docker image created in the first step
3. Expose the application to your localhost by binding it to the local network (default port of the application is `2000` but can be set via the environment variable `PORT`)
