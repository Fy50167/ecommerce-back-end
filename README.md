[![License](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

# E-Commerce Back End

## Description

This application uses MySQL in conjunction with Sequelize to allow users to store product information in a MySQL database. Information can be freely manipulated via various HTTP requests such as GET, POST, PUT, DELETE for various organizational purposes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

All necessary dependencies are already installed. However, users will have to include their own .env file which includes a DB_NAME, DB_USER, and DB_PW in order to get the application working correctly.

## Usage

The user first must provide their own seeds file to populate their database with any data that is already available. Then they can access the database in the server by running npm start. From there, using different endpoints and HTTP requests to view or modify the database however you want. For a demo of the application, view the video at the following link: [Demo link](https://www.loom.com/share/353310b7eb7049c9ad074677109393f4?sid=c4e83a2f-5a00-4e61-ab80-3bd6bd89500d)

## Credits

No other people contributed to this project.

## License

This project uses a The Unlicense license.

## How to Contribute

This application currently not accepting contributions.

## Tests

In order to test full functionality after installation, run npm start to open the server and attempt to use each of the requests (GET, GET with id, POST, PUT, and DELETE) for each of the endpoint (/api/products, /api/tags, /api/categories) and ensure that they all return valid JSON. Be sure that the JSON body for any requests that take in a body is valid JSON, as otherwise you will get an error even if the HTTP request endpoint is correct. 

## Questions

My GitHub profile: github.com/Fy50167.
For further questions, you can email me at Fy50167@gmail.com.
