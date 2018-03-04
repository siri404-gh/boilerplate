FROM node:latest
WORKDIR /usr/src/app
ADD package.json /tmp/package.json
ADD yarn.lock /tmp/yarn.lock
RUN cd /tmp && yarn
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
WORKDIR /opt/app
ADD .babelrc /opt/app/.babelrc
ADD index.js /opt/app/index.js
ADD globals.js /opt/app/globals.js
EXPOSE 5000
CMD [ "./node_modules/.bin/webpack-dev-server", "--config=webpack/webpack.config.js", "--env=dev", "--hot", "--inline", "--host=0.0.0.0"]
