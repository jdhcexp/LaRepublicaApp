export default {
    saveHome(state, payload) {
        state.home = payload;
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
    }
}