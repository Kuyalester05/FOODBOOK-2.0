# Use Node LTS version
FROM node:22

# Set working directory inside container
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Expose Angular dev server port
EXPOSE 4200

# Start Angular in development mode
CMD ["npm", "run", "start"]