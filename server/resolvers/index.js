const books = require('../model/book/index')
const test = require('../model/test/index')

module.exports = {
    Query: {
        books: (_, { id }) => {
            console.log(`[books] id : ${id}`)
            return {
                ...books[id],
                test: test[id]
            }
        },
        test: (_, args) => {
            console.log(`[test] id : ${args.id}`)
            return test[args.id]
        }
    },
}