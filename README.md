# General Notes

## Deployment

* will deploy to node marked with label `main=true`

## Service

* automates targetPort resolution by depending on the name of
the deployment's port rather than a hardcoded number
* is of type NodePort and exposes the deployment it's linked to
  to the web given a dynamic host and port

## App

* a node server built with express
* exposes `/saved/` and `/save/:stringToSave/` GET endpoints
* `/saved` returns a csv which is appended to by
  `/save/:stringToSave/`
