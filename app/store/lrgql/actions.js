import { ApolloProvider } from "vue-apollo"
import ApolloClient from "apollo-boost"
import { lrqueries, enums } from "../../gql/lr"
import gql from 'graphql-tag'

const defaultClient = new ApolloClient({
  //  cache,
  uri: 'https://gql.lalr.co/gql'
})


const marketClient = new ApolloClient({
  uri: 'https://gql.lalr.co/gqlq',
  typeDefs:[enums.MACRO_CATEGORIES, enums.QUOTE_TYPE_ENUM]

})

const apolloProv = new ApolloProvider({
  clients: {
    defaultClient,
    marketClient,

  },
  defaultClient: defaultClient
})


// const catTypes = {
//   COMMODITIES: "COMMODITIES",
//   MACRO:"MACRO",
//   BANKS:"BANKS",
//   CURRENCY_MARKET:"CURRENCY_MARKET"
// }

export default {

  getLastNews(context) {
    apolloProv.defaultClient.query({
      query: lrqueries.LAST_NEWS_QUERY
    }).then(resp => {
      context.commit("saveHome", (resp.data.home))
    })
  },
  async loadIndicatorsBar(context) {
    return new Promise((resolve, reject) => {
      apolloProv.clients.marketClient.query({
        query: lrqueries.INDICATORS_BAR_QUERY
      }).then(resp => {
        context.commit("saveIndicatorsBar", resp.data.banner);
        resolve();
      })
    })
  },
  async loadIndicatorsByMacro(context, payload) {
    return new Promise((resolve, reject) => {
      console.log(payload);      
      const q = payload == null ? lrqueries.INDICATORS_QUERY : lrqueries.INDICATORS_QUERY_CAT;
      apolloProv.clients.marketClient.query({
        query: q,
        variables: {
          cat: payload
        }
      }).then(resp => {
        console.log("$$$$$$$$$$$$$$$$$$$$LoadIndByMacro");
        console.log(resp);
        context.commit("saveIndicators", (resp.data.quotes));
        resolve();
      })
    })
  },
  async loadStockMarket(context) {
    return new Promise((resolve, reject) => {
      apolloProv.clients.marketClient.query({
        query: lrqueries.STOCKS_QUERY
      }).then(resp => {
        context.commit("saveStockMarket", resp.data.bvc);
        resolve();
      })
    })
  },
  async loadIndicatorDetail(context, payload) {
    return new Promise((resolve, reject) => {
      apolloProv.clients.marketClient.query({
        query: lrqueries.INDICATOR_DETAIL_QUERY,
        variables: {
          id: payload.id,
          quote: payload.quote,
          from: payload.from,
          to: payload.to,
          take: payload.take
        }
      }).then(resp => {
        context.commit("saveIndicatorDetail", (resp.data.byIds));
        resolve();
      })
    })
  }

}
