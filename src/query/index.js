const { gql } = require("@apollo/client");

export default gql`
{
    books(id: 1) {
        title
        author
        test {
            user
            userId
        }
    }
    test(id: 0) {
        user
        userId
    }
}
`