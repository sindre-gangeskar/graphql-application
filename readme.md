# Combining REST and GraphQL Requests for a school database
In this project, I've integrated both RESTful and GraphQL approaches to showcase the differences between the two paradigms.
___
## School Database with Relationships to Teachers and Students
The database revolves around schools, teachers, and students, with simple relationships established between the models. Sequelize is utilized as the Object-Relational Mapping (ORM) tool.
Using MySQL as the database. 
___

### Setting it up
```
git clone https://github.com/sindre-gangeskar/graphql-rest-database.git
```
#### Install Dependencies
```
npm i
```
#### Run Application
```
npm start
```
#### Access Application
[http://localhost:3000](http://localhost:3000)


#### Dependencies
```
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "dotenv": "^16.4.5",
    "ejs": "~2.6.1",
    "express": "^4.19.2",
    "express-graphql": "^0.12.0",
    "graphql": "^16.8.1",
    "http-errors": "~1.6.3",
    "morgan": "~1.9.1",
    "mysql": "^2.18.1",
    "mysql2": "^3.9.7",
    "sequelize": "^6.37.3"
```

#### Test Environment Configuration

```
HOST = "localhost"
ADMIN_USERNAME = "ProjectAdmin"<b
ADMIN_PASSWORD = "0000"
DATABASE_NAME = "School"
DIALECT = "mysql"
DIALECTMODEL = "mysql2"
PORT = "3000"
```