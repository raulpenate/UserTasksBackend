#!/bin/bash

TARGET_DIR="mssql"

# Check if the target directory exists
if [ -d "$TARGET_DIR" ]; then
    echo "About to remove: $TARGET_DIR"
else
    echo "Directory $TARGET_DIR does not exist. Exiting."
    exit 1
fi

# Create the SQL initialization file
echo "CREATE DATABASE test_integral;" > "mssql/init.sql"

# Change ownership of the target directory
sudo chown 10001:10001 "$TARGET_DIR"

# Bring up the Docker containers
docker-compose up --force-recreate