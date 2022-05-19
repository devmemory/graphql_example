## 설치 순서
1. npm init --yes
2. npm i apollo-server graphql

## 기본 구조
# server side
1. apollo server : typedefs, resolvers 초기화 및 서버 런칭
2. typedefs(gql) : 사용할 schema 및 데이터 구조 명시 
3. resolvers : typedefs에 명시된 로직부분 처리

# client side
1. ApolloProvider : redux의 provider 같은 역할?
2. ApolloClient : redux의 store 같은 역할?

- graphql test https://studio.apollographql.com/sandbox/explorer/

- default port : 4000