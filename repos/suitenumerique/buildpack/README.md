# La Suite Numérique Buildpack

This is a custom Scalingo buildpack designed to build JavaScript+Python applications from La Suite Numérique.

More generally, it could build any Frontend+Backend app for Scalingo. You can view it as a specialized version of the [Scalingo multi-buildpack](https://github.com/Scalingo/multi-buildpack).

It has optional Nginx support.

## Configuration

It requires the following env variables to be set in your app:

- `BUILDPACK_URL` : Pointing to this repository!
- `LASUITE_APP_NAME` : One of "docs", "visio", "people", "drive", ...

The following are optional. All paths are relative to the root of the repository.

- `LASUITE_FRONTEND_DIR` : The directory where the frontend buildpack will be run. Default is `src/frontend/`.
- `LASUITE_BACKEND_DIR` : The directory where the backend buildpack will be run. Default is `src/backend/`.
- `LASUITE_NGINX_DIR` : The directory where the nginx buildpack will be run. Default is empty (no nginx support). Use `./` for the root.
- `LASUITE_FRONTEND_BUILDPACK` : The URL of the frontend buildpack. Default `https://github.com/Scalingo/nodejs-buildpack`.
- `LASUITE_BACKEND_BUILDPACK` : The URL of the backend buildpack. Default `https://github.com/Scalingo/python-buildpack`.
- `LASUITE_NGINX_BUILDPACK` : The URL of the frontend buildpack. Default `https://github.com/Scalingo/nginx-buildpack`.
- `LASUITE_SCRIPT_PRECOMPILE` : A script to run before both buildpacks. Default empty.
- `LASUITE_SCRIPT_POSTFRONTEND` : A script to run after the frontend buildpack but before the backend buildpack. Default empty.
- `LASUITE_SCRIPT_POSTBACKEND` : A script to run after the backend buildpack but before the nginx buildpack. Default empty.
- `LASUITE_SCRIPT_POSTCOMPILE` : A script to run after all buildpacks. Default empty.


## What it does

See the source in `bin/compile`. In a nutshell:

- It fetches all buildpacks
- It runs `LASUITE_SCRIPT_PRECOMPILE` if it exists
- It runs the frontend buildpack in `LASUITE_FRONTEND_DIR`
- It runs `LASUITE_SCRIPT_POSTFRONTEND` if it exists
- It runs the backend buildpack in `LASUITE_BACKEND_DIR`
- It runs `LASUITE_SCRIPT_POSTBACKEND` if it exists
- It runs the nginx buildpack in `LASUITE_NGINX_DIR` if it is set
- It runs `LASUITE_SCRIPT_POSTCOMPILE` if it exists
