# Use an official Node runtime as a base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install --production

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the specified port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]