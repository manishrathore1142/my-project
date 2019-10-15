FROM node:10.16.3
RUN mkdir -p /app/test
WORKDIR /app/test
COPY . /app/test
RUN npm install
EXPOSE 3000
CMD ["npm","start"]
