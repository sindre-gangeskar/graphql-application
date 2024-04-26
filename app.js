require('dotenv').config()
var db = require("./models");
db.sequelize.sync({ force: false })

var express = require('express');
var { graphqlHTTP } = require('express-graphql');
const GraphQL = require('graphql');
const { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString } = GraphQL;

const schoolType = require('./types/schoolType')(GraphQL);
const studentType = require('./types/studentType')(GraphQL);
const teacherType = require('./types/teacherType')(GraphQL);

const SchoolService = require('./services/SchoolService');
const schoolService = new SchoolService(db);
const StudentService = require('./services/StudentService');
const studentService = new StudentService(db);
const TeacherService = require('./services/TeacherService');
const teacherService = new TeacherService(db);

const schoolRouter = require('./routes/school');
const studentsRouter = require('./routes/student');
const teachersRouter = require('./routes/teacher');
const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getStudent: {
      type: studentType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } }
    },
    getStudents: {
      type: new GraphQL.GraphQLList(studentType)
    },
    getSchools: {
      type: new GraphQL.GraphQLList(schoolType)
    },
    getSchool: {
      type: schoolType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } }
    },
    getTeachers: {
      type: new GraphQL.GraphQLList(teacherType)
    },
    getTeacher: {
      type: teacherType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createStudent: {
      type: studentType,
      args: {
        FirstName: { type: GraphQLString },
        LastName: { type: GraphQLString },
        SchoolId: { type: GraphQLID }
      }
    },
    createTeacher: {
      type: teacherType,
      args: {
        FirstName: { type: GraphQLString },
        LastName: { type: GraphQLString },
        SchoolId: { type: GraphQLID }
      }
    },
    createSchool: {
      type: schoolType,
      args: {
        Name: { type: GraphQLString },
        Location: { type: GraphQLString },
        Description: { type: GraphQLString }
      }
    },
    deleteStudent: {
      type: studentType,
      args: {
        id: { type: GraphQLID }
      }
    },
    deleteTeacher: {
      type: teacherType,
      args: {
        id: { type: GraphQLID }
      }
    },
    deleteSchool: {
      type: schoolType,
      args: {
        id: { type: GraphQLID }
      }
    },
    deleteNullStudent: {
      type: studentType,
      args: {
        FirstName: { type: GraphQLString }
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

var root = {
  getStudent: async ({ id }) => await studentService.get(id),
  getStudents: async () => await studentService.getAll(),
  getSchool: async ({ id }) => await schoolService.get(id),
  getSchools: async () => await schoolService.getAll(),
  getTeachers: async () => await teacherService.getAll(),
  getTeacher: async ({ id }) => await teacherService.get(id),
  createStudent: async ({ FirstName, LastName, SchoolId }) => await studentService.create(FirstName, LastName, SchoolId),
  createTeacher: async ({ FirstName, LastName, SchoolId }) => await teacherService.create(FirstName, LastName, SchoolId),
  createSchool: async ({ Name, Location, Description }) => await schoolService.create(Name, Location, Description),
  deleteStudent: async ({ id }) => await studentService.delete(id),
  deleteTeacher: async ({ id }) => await teacherService.delete(id),
  deleteNullStudent: async () => await studentService.deleteNull(),
  deleteSchool: async ({ id }) => await schoolService.delete(id)
};

var app = express();
app.use(express.json());
app.use('/schools', schoolRouter);
app.use('/students', studentsRouter);
app.use('/teachers', teachersRouter);
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));


app.listen(process.env.PORT);
console.log('Running a GraphQL API server at http://localhost:3000/graphql');