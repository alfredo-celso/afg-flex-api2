# AFG-FLEX-API2

This is a improve of the API v1, gathering more data. This is a Nodejs and Express web application for gather data  from AFG FLEX transactions.
The version of NodeJs used during development is 10.22.1


## Installation

Use a terminal to clone and install AFG-FLEX-API2

### Database
```none

### Web application
```bash
npm install

Create a .env file in the root folder with the labels
# Miscelaneous
TRAINING_CENTER=NONE
SIMULATOR_MODEL=NONE
ENVIRONMENT=PRODUCTION
SLOGAN='Mi casa es su casa'
IMAGE_LOGO='logo50-50.png'
# Web server 
WEB_SERVER='localhost'
SERVER_PORT=3900
# Flex API
FLEX_API='http://192.168.1.177:3900/flex-api-sessions/_api/SessionOfTheDay/55'
# Localhost
DB_HOST='localhost'
DB_DATABASE='afgsim'
DB_USER='admin'
DB_PASSWORD='MariaDB'
DB_PORT=3306
```

## Usage

```nodejs
If nodemon is insalled: npm start
Otherwise: node ./bin/www

With .env file
# BROWSER
type http://localhost:3900/start

Without .env file
# BROWSER
type http://localhost:3000/start


```

## Contributing
Pull requests are welcome. For major changes, please contact Alfredo Celso to have a chat about the changes to implement.
