const {buildSchema} = require('graphql')

module.exports = buildSchema(`
    type User {
        name: String!
        age: Int!
    }

    type TestType {
        count: Int!
        users: [User!]!
    }
    type Query {
        test: TestType!
        random(min: Int!, max: Int!, count: Int!): [Float!]!
    }

    input UserInput {
        name: String!
    }

    type Mutation {
        addTestUser(user: UserInput!): User!
    }
`)
