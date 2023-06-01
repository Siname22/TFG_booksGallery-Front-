FROM registry.access.redhat.com/ubi8/nodejs-16 

EXPOSE 4200/tcp

USER root

RUN mkdir /app && curl -fsSL https://rpm.nodesource.com/setup_16.x |  bash -

WORKDIR /app

RUN git clone https://github.com/Siname22/TFG_booksGallery-Front-.git

WORKDIR TFG_booksGallery-Front-/

RUN git pull && npm cache clean --force && npm install -g @angular/cli && npm install --save-dev  --force @angular-devkit/build-angular

ENTRYPOINT npm run-script container
