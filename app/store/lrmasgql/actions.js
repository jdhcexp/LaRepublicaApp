import { ApolloProvider } from "vue-apollo"
import ApolloClient from "apollo-boost"
import gql from 'graphql-tag'
import { ApplicationSettings } from "@nativescript/core"
import { lrmasqueries } from '../../gql/lrmas'




const defaultClient = new ApolloClient({
  uri: 'https://gql.lalr.co/gqlp',
  headers: {
    Authorization: "Bearer " + ApplicationSettings.getString("token")
  }
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
    })
  },
  async loadPostsByTopic(context, payload){
    debugger;
    return new Promise(function(resolve, reject){
      const response = apolloProv.defaultClient.query({
        query: lrmasqueries.POSTS_BY_TOPIC_ID,
        variables: {
          id:payload
        }
        // variables() {
        //   return{}
        // }
      }).then(resp => {      
        console.log("////////////////RESP POST BY TOPICS");
        console.log(resp);
        context.commit("savePostsByTopic", (resp.data.me.news.posts));
        resolve();
      })
    })
    
  }
}