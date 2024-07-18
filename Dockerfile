#a stage 1 : build from official docker hub node.js images
FROM node:lts-alpine as build

#set the working directory
WORKDIR /app

#Copy the package.json and package-lock.json
COPY package*.json ./

#Install the dependencies
RUN npm install


#Copy the rest of the aplication
COPY . .  
ARG NEXT_PUBLIC_TMDB_API_KEY
ENV NEXT_PUBLIC_TMDB_API_KEY=$NEXT_PUBLIC_TMDB_API_KEY

ARG NEXT_PUBLIC_TMDB_BASE_URL
ENV NEXT_PUBLIC_TMDB_BASE_URL=$NEXT_PUBLIC_TMDB_BASE_URL

#Start App
EXPOSE 3000
CMD [ "npm", "run", "dev" ]