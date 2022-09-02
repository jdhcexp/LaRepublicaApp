import { ApolloProvider } from "vue-apollo"
import  ApolloClient  from "apollo-boost"
import gql from 'graphql-tag'
import { ApplicationSettings } from "@nativescript/core"



  const defaultClient = new ApolloClient({
    uri: 'https://gql.lalr.co/gqlp',
      headers: {
        Authorization: "Bearer "+ApplicationSettings.getString("token")
     }
  })

const apolloProv = new ApolloProvider({  
  defaultClient: defaultClient
})

const ME_QUERY_T = gql`
query topics{
  me{
    news {
      topics{
        id
        topicName
      }
    }
  }
}
`;

export default {
  getTopicsInfo(context){ 
    debugger;
    const response = apolloProv.defaultClient.query({
      query: ME_QUERY_T,     
      }).then(resp => {
        debugger;
        context.commit("saveTopics",(resp.data.me))
      })  
    
  }	
}