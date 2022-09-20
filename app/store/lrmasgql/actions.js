import { ApolloProvider } from "vue-apollo"
import { ApolloClient, ApolloLink, concat, HttpLink } from "apollo-boost"
import gql from 'graphql-tag'
import { ApplicationSettings } from "@nativescript/core"
import { lrmasqueries } from '../../gql/lrmas'
import { InMemoryCache } from 'apollo-cache-inmemory';


const httpLink = new HttpLink({
  uri: 'https://gql.lalr.co/gqlp'
})



const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: "Bearer " + ApplicationSettings.getString("token")
    }
  });
  return forward(operation);
})



const defaultClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
  // headers: {
  //   Authorization: "Bearer " + ApplicationSettings.getString("token")
  // }
})

const apolloProv = new ApolloProvider({
  defaultClient: defaultClient
})



export default {
  getTopicsInfo(context) {   
    const response = apolloProv.defaultClient.query({
      query: lrmasqueries.ME_QUERY_T,
    }).then(resp => {    
      context.commit("saveTopics", (resp.data.me))
    }).catch(e => {
      debugger;
      console.log(e);
    })
  },
  async loadPostsByTopic(context, payload) {
    return new Promise(function (resolve, reject) {
      const response = apolloProv.defaultClient.query({
        query: lrmasqueries.POSTS_BY_TOPIC_ID,
        variables: {
          id: payload
        }
      }).then(resp => {
        context.commit("savePostsByTopic", (resp.data.me.news.posts));
        resolve();
      })
    })
  },
  async loadDigitalVersion(context, payload){
    return new Promise(function (resolve, reject) {
      const response = apolloProv.defaultClient.query({
        query: lrmasqueries.DIGITAL_VERSION        
      }).then(resp => {      
        context.commit("saveDigitalVersions", (resp.data.digitalVersion));
        resolve();
      })
    })
  },
  async loadMediaTypes(context){
    return new Promise(function (resolve, reject) {
      const response = apolloProv.defaultClient.query({
        query: lrmasqueries.BOOKS_MEDIATYPES        
      }).then(resp => {             
        context.commit("saveMediaTypes", (resp.data.books.mediaTypes));
        resolve();
      })
    })
  },
  async loadBooks(context, payload) {
    return new Promise(function (resolve, reject) {
      console.log("#########################")
      console.log(payload)
      const response = apolloProv.defaultClient.query({
        query: lrmasqueries.BOOKS,
        variables: {
          mediaType: payload.mediaType
        }
      }).then(resp => {
        console.log("#########################")
        console.log(resp)
        context.commit("saveBooks", (resp.data.books.search.items));
        resolve();
      }).catch(error =>{
        console.log(error)
      })
    })
  },
}