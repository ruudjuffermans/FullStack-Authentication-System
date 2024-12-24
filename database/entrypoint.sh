#!/bin/bash
set -euo pipefail


echo "Setting search_path to 'compass'..."
psql -v ON_ERROR_STOP=1 --username "ruud" --dbname "store" <<-EOSQL
    ALTER ROLE ruud SET search_path TO compass;
EOSQL

echo "Database environment is ready."


exec "$@"