const gql = require('apollo-server').gql

module.exports = gql`
  type Book {
    title: String
    author: String
    test(id: Int): Test
  }

  type Test {
    user: String
    userId: Int
  }

  type Query {
    books(id: Int): Book
    test(id: Int): Test
  }
`;