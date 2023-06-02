# ORM-E-Commerce-Back-End

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This project aims to build the back end for an e-commerce site using Express.js API and Sequelize to interact with a MySQL database. The main goal is to implement the fundamental architecture of an e-commerce platform and showcase the latest technologies in back-end development.

The project focuses on creating server routes and their corresponding Sequelize models. It involves the use of routes, relationships, database seeding, and testing with tools like Postman. The project and its successful implementation led to a successful test of my abilities in back-end development as well as a learning opportunity in using routes, relations, seeding databases, and using Postman.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [API Documentation](#api-documentation)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To deploy this code locally, follow these steps:

1. Clone the repository by visiting the GitHub repository [link] and copying the repository's link.
2. Open Git Bash and navigate to the desired directory where you want to clone the code.
3. Type `git clone` followed by the copied link and press Enter.
4. Navigate into the cloned directory.
5. Install the required dependencies by typing `npm install` in the terminal.
6. Create the database by running the provided schema file. In the terminal, enter the following command: `mysql -u your_username -p < db/schema.sql` (replace `your_username` with your MySQL username).
7. Populate the database with sample data by running the provided seeds file. In the terminal, enter the following command: `mysql -u your_username -p < db/seeds.sql` (replace `your_username` with your MySQL username).
8. Start the application by running `npm start` in the terminal.

## Usage

1. Install the required dependencies by running `npm install` in the terminal.
2. Create the database by running the provided schema file. In the terminal, enter the following command: `mysql -u your_username -p < db/schema.sql` (replace `your_username` with your MySQL username).
3. Populate the database with sample data by running the provided seeds file. In the terminal, enter the following command: `mysql -u your_username -p < db/seeds.sql` (replace `your_username` with your MySQL username).
4. Start the application by running `npm start` in the terminal.
5. Use a tool like Postman to test the API routes.
   - Use the provided GET routes in Insomnia to retrieve data for categories, products, or tags. The data will be displayed in formatted JSON.
   - Test the API POST, PUT, and DELETE routes in Insomnia to create, update, and delete data in the database.

## Technologies Used

- Express.js
- Sequelize
- MySQL

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js
- MySQL

## API Documentation

The API provides the following routes:

- GET `/api/categories`: Get all categories
- GET `/api/categories/:id`: Get a single category by ID
- POST `/api/categories`: Create a new category
- PUT `/api/categories/:id`: Update a category by ID
- DELETE `/api/categories/:id`: Delete a category by ID

- GET `/api/products`: Get all products
- GET `/api/products/:id`: Get a single product by ID
- POST `/api/products`: Create a new product
- PUT `/api/products/:id`: Update a product by ID
- DELETE `/api/products/:id`: Delete a product by ID

- GET `/api/tags`: Get all tags
- GET `/api/tags/:id`: Get a single tag by ID
- POST `/api/tags`: Create a new tag
- PUT `/api/tags/:id`: Update a tag by ID
- DELETE `/api/tags/:id`: Delete a tag by ID

## License

This project is licensed under the MIT License.

## Contributions
Starter Code by Xandromus [https://github.com/Xandromus] & repo [https://github.com/coding-boot-camp/fantastic-umbrella]

Contributions to this project are welcome. To contribute, please follow these steps:

1. Follow the installation instructions to set up the project locally.
2. Create a feature branch with your name as the branch name.
3. Implement your desired changes in the feature branch.
4. Commit your changes and push the branch to the remote repository.
5. Submit a pull request, and your changes will be reviewed for merging into the main branch.

## Tests

No tests have been deployed for this project at this time.

## Questions

If you have any questions, don't hesitate to reach out:

Github Profile: [Oscar Zavala](https://github.com/rocas3096)

Github username: rocas3096

Email: ozavala3096@gmail.com
