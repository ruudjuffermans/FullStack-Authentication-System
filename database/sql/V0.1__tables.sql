-- SET SEARCH_PATH = 'context';
SET client_min_messages = warning;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Enum for user roles
CREATE TYPE user_role AS ENUM ('admin', 'user', 'moderator');

-- Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    role user_role DEFAULT 'user',
    is_active BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
