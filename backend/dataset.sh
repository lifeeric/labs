
#!/usr/bin/env bash

# Truncate data in ShopItems collection
mongo openlab --host localhost:27017 --eval 'db.getCollection("users").remove({})'

# Import seed data into ShopItems collection
mongoimport --host localhost:27017 --db openlab --collection users --type JSON --file labs.json
