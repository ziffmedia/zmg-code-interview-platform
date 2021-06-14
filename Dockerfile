FROM codercom/code-server:latest

USER root

# install packges here

USER 1000

ENTRYPOINT ["/usr/bin/entrypoint.sh", "--bind-addr", "0.0.0.0:8080", "./project"]
