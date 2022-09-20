
import gql from 'graphql-tag';


export const lrqueries = {
  LAST_NEWS_QUERY: gql`
    query getLastNews {  
    home {    
        specialOpening {
        specialTitle
        relatedNews {
            id
            header
            title
            principalImage {
            url(size: 240)
            }
            urlApp
        }
        }
        opening {
        id
        header
        title
        principalImage {
            url(size: 480)
        }
        urlApp      
        }
    }
    }`,
  CATS_MENU_QUERY: gql`
    query menu{
        menu {
         id
         name
         itemEnum
       }
     }`,
  INDICATORS_BAR_QUERY: gql`
    query bar{
        banner{
            name
        quoteValue {
            value
            percentageVariation
            variationType
            }
        }
    }`,
  INDICATORS_QUERY_CAT: gql`
        query macro($cat:MacroCategory!){
        quotes(macroCategory:$cat ){
          id
          name
          description
          quoteType
          quoteValue {
            value
            percentageVariation
            variationType
         }   
        }
      }`,
  INDICATORS_QUERY: gql`
      query macro{
      quotes{
        id
        name
        description
        quoteType
        quoteValue {
          value
          percentageVariation
          variationType
       }   
      }
    }`,
  STOCKS_QUERY: gql`
    query stock{
        bvc{
          name
           description
            quoteValue {
              value
              percentageVariation
              variationType
           }   
        }
    }`,
  INDICATOR_DETAIL_QUERY: gql`
    query indicatorbyid($id:String!, $quote: QuoteTypeEnum, $from:DateTime, $to:DateTime, $take:Int){
    byIds(ids:[{id: $id,quoteType: $quote}]){
          id
          name
          quoteValue {
            value
            percentageVariation
            variationType
            absoluteVariation
          }
          extraValues{
            key
            value
          }
          graphicData(from:$from, take:$take, to:$to){
            dataset
            availableButtons{
              take
              from
              buttonName
              selected
           }
         }
       }
    }`,
  SECTION_QUERY: gql`
    query sections($id: Int!){
      section(id: $id) {        
        id
        name    
        posts{
          id
          title
          header
          author{
            id
            name
          }
          principalImage {
            url(size: 240)
          }
          urlApp       
        }
      }
    }`,
  TAG_QUERY: gql`
    query tags($id: Int!){
      tag(id: $id) {        
        id
        name    
        posts{
          id
          title
          header
          author{
            id
            name
          }
          principalImage {
            url(size: 240)
          }
          urlApp       
        }
      }
    }`,
  STANDARD_POST_QUERY: gql`
    query Post($id: Int!){
      post(id: $id) {
        section {
          id
          name
        }
        header
        title
        create  
        principalImage {
              url(size: 240)
            }      
        author{
          id
          name
          photo {
            alt
            url
          }      
        }
        content(platform: APP)    
        attachments{
          title
          url
        }
        relatedPosts{
          title
          id
          urlApp
        }
      }
    }`,
  SEARCH_QUERY: gql`
    query Search($req:SearchRequest) {
      search(request: $req) {
        results {
          imageUrl
          title
          header
          url
        }
        total
      }
    }`,
  SEARCH_FACETS_QUERY: gql`
    query searchFacets ($req:SearchFacetsRequest) {
      searchFacets (request: $req) {
        tags {
          fieldName
          displayName
          items{
            item
            count 
          }
        }
      }
    }`,

}

export const enums = {
  MACRO_CATEGORIES: gql`
    enum MacroCategory {
        CURRENCY_MARKET
        MACRO
        BANKS
        COMMODITIES
    }`,
  QUOTE_TYPE_ENUM: gql`
    enum QuoteTypeEnum {
        QUOTE
        BVC
        SPOT
    }`
}
