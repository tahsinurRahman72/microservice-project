# backend/Dockerfile

FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the backend port
EXPOSE 5000

# Start the Express.js server
CMD ["node", "src/server.js"]