-- SET SEARCH_PATH = 'context';
SET client_min_messages = warning;

CREATE TYPE enum_example AS ENUM (
    'Public',
    'Private'
);


-- Create the template table
CREATE TABLE example (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
);
