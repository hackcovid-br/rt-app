FROM alpine:edge

RUN apk add --no-cache \
    nodejs \
    npm \
    yarn

COPY docker-start.sh $HOME/

WORKDIR $HOME/

EXPOSE 8000