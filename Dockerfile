# Base image
FROM node:10
# Maintainer name
LABEL maintainer="dracnea@dracnea.io"
# Copying angular folder from local directory to Educative directory
COPY angular /usr/local/educative/angular
# Installing Angular cli and node modules in angular directory
RUN     npm install -g @angular/cli &&\
        # npm i for both server and Angular
        # Start server
        # Start angular
        # May need to change based on system
        cd /usr/local/educative/angular &&\
        npm i
        
EXPOSE 4200