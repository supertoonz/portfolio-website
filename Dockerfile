# Stage 1: Build the Vite React App
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build the project
COPY . .
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the custom nginx config for SPA routing and correct port (8080)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Cloud Run defaults to exposing port 8080
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
