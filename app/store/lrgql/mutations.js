export default {
    saveHome(state, payload) {
        state.home = payload;
    },
    saveCatsMenu(state, payload){
        payload.forEach(element => {
            element.name = element.name.toUpperCase()
        });
        state.catsMenu = payload

    },
    saveIndicatorsBar(state, payload) {
        state.banner = payload;
    },
    saveIndicators(state, payload) {
        state.indicators = payload;
    },
    saveStockMarket(state, payload) {
        state.stockMarket = payload;
    },
    saveIndicatorDetail(state, payload) {
        state.indicatorDetail = payload;
    },
    saveSection(state, payload){
        state.sectionInfo = payload;
    },
    saveStandardPost(state, payload){
        state.standardPost = payload;
    },
    saveSearch(state, payload){
        state.searchResponse = payload;
    },
    saveSearchFacets(state, payload){
        state.searchFacets = payload;
    }
}