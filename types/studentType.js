module.exports = (graphql) => {
    return new graphql.GraphQLObjectType({
        name: 'Student',
        fields: {
            id: { type: new graphql.GraphQLNonNull(graphql.GraphQLID) },
            FirstName: { type: graphql.GraphQLString },
            LastName: { type: graphql.GraphQLString },
            SchoolId: { type: graphql.GraphQLID }
        }
    });
}