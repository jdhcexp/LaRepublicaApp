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
      debugger;
      context.commit("saveTopics", (resp.data.me))
    })
  },
  loadPostsByTopic(context, payload){
    const response = apolloProv.defaultClient.query({
      query: lrmasqueries.POSTS_BY_TOPIC_ID,
      variables() {
        return{id:parseInt(payload)}
      }
    }).then(resp => {
      debugger;
      context.commit("saveTopics", (resp.data.me.news.posts))
    })
  }
}