
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
    query indicatorbyid($id:String, $quote: QUOTE_TYPE_ENUM, $from:DateTime, $to:DateTime, $take:Int){
    byIds(ids:[{id: $id,quoteType: $quote}]){
          id
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
