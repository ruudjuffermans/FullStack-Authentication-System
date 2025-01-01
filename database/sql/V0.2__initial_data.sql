-- SET SEARCH_PATH = 'context';
SET client_min_messages = warning;

INSERT INTO users (email, password_hash, full_name)
VALUES ('ruudjuf2@gmail.com', 'hashed_password', 'John Doe');

INSERT INTO activation_codes (user_id, activation_code, expires_at)
VALUES (
    1, -- Replace with the user's ID
    LPAD(FLOOR(RANDOM() * 1000000)::TEXT, 6, '0'), -- Generate a random 6-digit code
    NOW() + INTERVAL '1 day' -- Set the expiry to 24 hours from now
);