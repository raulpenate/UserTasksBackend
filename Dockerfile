# Stage 1: Build the application
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the NestJS project
RUN npm run build

# Stage 2: Serve the application
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the build from the previous stage
COPY --from=build /app/dist ./dist

# Copy package.json and install production dependencies
COPY package*.json ./
RUN npm install --production

# Expose the port the app will run on
EXPOSE 3000

# Set environment variables if needed (optional)
# ENV NODE_ENV=production

# Command to run
