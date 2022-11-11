export default {
  getHome(state) {
    return state.home
  },
  getCatsMenu(state) {
    return state.catsMenu
  },
  getBanner(state) {
    return state.banner
  },
  getIndicators(state) {
    return state.indicators
  },
  getIndCatTypes(state) {
    return state.indCatTypes
  },
  getStockMarket(state) {
    return state.stockMarket
  },
  getIndicatorDetail(state) {
    return state.indicatorDetail
  },
  getQuoteTypeEnum(state) {
    return state.QuoteTypeEnum
  },
  getSectionInfo(state) {
    return state.sectionInfo
  },
  getStandardPost(state) {
    return state.standardPost
  },
  getSearchResponse(state) {
    return state.searchResponse
  },
  getSearchFacets(state) {
    return state.searchFacets;
  },
  getTrends(state){
    return state.trends;
  },
  getAgencies(state){
    return state.agencies;
  },
  getGuests(state){
    return state.guests;
  }

}
