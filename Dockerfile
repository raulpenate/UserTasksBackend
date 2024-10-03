# Stage 1: Build the application
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy the rest of the application code
COPY . .

# Build the NestJS project
RUN pnpm run build

# Stage 2: Serve the application
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the build and node_modules from the previous stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

# Copy package.json
COPY package*.json ./

# Expose the port the app will run on
EXPOSE 3000

# Set environment variables if needed (optional)
# ENV NODE_ENV=production

# Command to run the application
CMD ["node", "dist/main"]