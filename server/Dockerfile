FROM node:18-slim AS base

ENV NODE_ENV=production

ARG PORT=3001
ENV PORT $PORT

# Install the latest npm globally
RUN npm install -g npm@latest

# Set working directory and adjust permissions
WORKDIR /app
RUN chown -R node:node /app

# Switch to non-root user
USER node

# Copy package files and install dependencies
COPY --chown=node:node package.json package-lock.json* ./
RUN npm ci && npm cache clean --force

# Set PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy application source code
COPY --chown=node:node ./src ./src

# Expose port
EXPOSE $PORT

# Command to start the server
CMD ["node", "src/server.js"]
