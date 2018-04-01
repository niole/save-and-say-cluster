FROM node:latest

WORKDIR .
COPY . .

EXPOSE 3000/tcp

CMD ["npm", "i"]
CMD ["npm", "start"]
