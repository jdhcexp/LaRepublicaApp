<template>
    <ScrollView>
        <WrapLayout backgroundColor="#fff" v-if="indicatorsExist">
            <IndicatorHeadline v-for="(item, index) in quotes" :key="index" :quote="item"></IndicatorHeadline>            
            
        </WrapLayout>
    </ScrollView>
</template>

<script>
import IndicatorHeadline from "../modules/headlines/IndicatorHeadline.vue";

export default {
    components:{
        IndicatorHeadline
    },
    data() {
        return {
            quotes: null          
        };
    },
    computed: {
        indicatorsExist() {
            if (this.quotes == null) {
                this.quotes = this.$store.getters["lrgql/getStockMarket"];
            }
            return this.quotes && this.quotes.length > 0;
        }
    },
    beforeMount() {        
        this.$store.dispatch("lrgql/loadStockMarket");
    },
}

</script>
