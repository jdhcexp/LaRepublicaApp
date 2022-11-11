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
  async loadCatsMenu(context) {
    return new Promise((resolve, reject) => {
      apolloProv.defaultClient.query({
        query: lrqueries.CATS_MENU_QUERY
      }).then(resp => {
        context.commit("saveCatsMenu", resp.data.menu);
        resolve();
      })
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

      const q = payload == null ? lrqueries.INDICATORS_QUERY : lrqueries.INDICATORS_QUERY_CAT;
      apolloProv.clients.marketClient.query({
        query: q,
        variables: {
          cat: payload
        }
      }).then(resp => {

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
          quote: payload.type,
          from: payload.from,
          to: payload.to,
          take: payload.take
        }
      }).then(resp => {

        context.commit("saveIndicatorDetail", (resp.data.byIds));

        resolve();
      })
    })
  },
  async loadSectionTag(context, payload) {
    return new Promise((resolve, reject) => {

      const q = payload.type == "SECTION" ? lrqueries.SECTION_QUERY : lrqueries.TAG_QUERY;
      apolloProv.defaultClient.query({
        query: q,
        variables: {
          id: parseInt(payload.id)

        }
      }).then(resp => {

        const respToSave = payload.type == "SECTION" ? resp.data.section : resp.data.tag
        context.commit("saveSection", respToSave);
        resolve();
      })
    })
  },
  async loadStandardPost(context, payload) {
    return new Promise((resolve, reject) => {
      const q = lrqueries.STANDARD_POST_QUERY
      apolloProv.defaultClient.query({
        query: q,
        variables: {
          id: parseInt(payload)

        }
      }).then(resp => {
        context.commit("saveStandardPost", resp.data.post);
        resolve();
      })
    })
  },
  async loadSearch(context, payload){
    return new Promise((resolve, reject) => {
      const q = lrqueries.SEARCH_QUERY;
      apolloProv.defaultClient.query({
        query: q,
        variables: {
          req: payload
        }
      }).then(resp => {
        context.commit("saveSearch", resp.data.search)
        resolve();
      })
    })
  },
  async loadSearchFacets(context, payload){
    return new Promise((resolve, reject) => {
      const q = lrqueries.SEARCH_FACETS_QUERY;
      apolloProv.defaultClient.query({
        query: q,
        variables: {
          req: payload
        }
      }).then(resp => {
        context.commit("saveSearchFacets", resp.data.searchFacets)
        resolve();
      })
    })
  },
  async loadTrends(context, payload){
    return new Promise((resolve, reject) => {
      const q = lrqueries.TRENDS_QUERY;
      apolloProv.defaultClient.query({
        query: q,
      }).then(resp => {
        context.commit("saveTrends", resp.data.trends)
        resolve();
      }).catch(error => {
        console.log(error);
      })
    })
  },
  async loadAgencies(context, payload){
    return new Promise((resolve, reject) => {
      const q = lrqueries.AGENCIES_QUERY;
      apolloProv.defaultClient.query({
        query: q,
        variables: {
          id: parseInt(payload.id)
        }
      }).then(resp => {
        context.commit("saveAgencies", resp.data.centralAgencies)
        resolve();
      })
    })
  },
  async loadGuests(context, payload){
    return new Promise((resolve, reject) => {
      const q = lrqueries.GUESTS_QUERY;
      apolloProv.defaultClient.query({
        query: q,
      }).then(resp => {
        context.commit("saveGuests", resp.data.analysis.guests)
        resolve();
      }).catch(error => {
        console.log(error);
      })
    })
  },

}

// const QuoteTypeEnum= {
//   QUOTE: "QUOTE",
//   BVC: "BVC",
//   SPOT: "SPOT"
// }
