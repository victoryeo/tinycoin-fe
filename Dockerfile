FROM node:11.1.0-alpine
  
RUN mkdir -p /usr/local/victor
WORKDIR /usr/local/victor

RUN apk --update add  git
RUN git clone -b master https://github.com/victoryeo/tinycoin-fe.git
WORKDIR /usr/local/victor/tinycoin-fe
RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm"]
CMD ["start"]
