import {ApolloClient, gql, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
    headers: {
        authorization: `Bearer ${localStorage.getItem('authToken')}`
    }
})

export const LOGIN = gql`
mutation login($input: LoginUserInput!) {
    login(loginUserInput: $input) {
      user {
        username,
        role
      }
      access_token
    }
}`;

export const GET_ALL_USERS = gql`
query AllUsers {
    getAllUsers {
      username
      id
      role
    }
}`;