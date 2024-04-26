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