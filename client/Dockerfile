# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire source code
COPY . .

# Install nodemon globally
RUN npm install -g nodemon

# Expose the development server port
EXPOSE 3000

# Start the development server using nodemon
CMD ["nodemon", "--watch", "src", "--exec", "react-scripts start"]