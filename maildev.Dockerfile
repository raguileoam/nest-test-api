FROM node:18

RUN npm i -g maildev@2.0.5

CMD maildev
