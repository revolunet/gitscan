# Demo

This demonstration is to show an nginx in front of a node and a python app on
the same scalingo app.

- the `.buildpacks` file uses three buildpacks (python, node and nginx) ;
- the `Procfile` just starts a `start.sh` shell that takes care of terminating
  all the children processes at the same time ;
- the Nginx listen on the port given by scalingo and redirects traffic to the
  python and node apps on two different ports

Before using this pattern, make sure your composite app is able to work correctly when scaling above 1 the number of containers
