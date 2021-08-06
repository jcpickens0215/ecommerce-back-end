# e-Commerce Backend
![MIT License](https://img.shields.io/badge/License-MIT-brightgreen)
## Description
This application provides a database structure for storing products, and operating on those products with POST, GET, PUT, and DELETE requests.
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
## Installation
You need to have Node and MySQL server installed. After cloning the repository, simply run **npm i** or **npm install** to install the dependencies. Next, run the included schema.sql file in MySQL server with **source schema.sql**. Add a **.env** file to the repository's root directory, and add the variables **DB_USER**, and  **DB_PASSWORD**. Finally, to seed the database, use the command **npm run seed**.
## Usage
The server can be started with **npm run start**, or **npm run watch** in development. The **watch** script uses nodemon, and will restart the server after any change is saved.
If you do not have a front-end, you'll need to use an application such as Insomnia Core, or Postman to test the API routes.
The formatting for the routes is provided in *example_requests.txt*.

## Demo
[Click here to watch a demo video](https://drive.google.com/file/d/1cV0LfGufmGd1Drb4_-oRqjCgq1LCUzDi/view?usp=sharing)

## Questions
If you have any questions about this project, you can find me on GitHub as [jcpickens0215](https://github.com/jcpickens0215).


## License

Licensed under the [MIT License](https://mit-license.org/)
, copyright 2021 by Justin Pickens
____

Badges provided by [Shields.io](https://shields.io/)