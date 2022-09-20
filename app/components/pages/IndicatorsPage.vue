<template>
    <ScrollView>
        <WrapLayout backgroundColor="#fff" v-if="indicatorsExist">
            <IndicatorHeadline v-for="(item, index) in quotes" :key="index" :quote="item"></IndicatorHeadline>            

        </WrapLayout>
    </ScrollView>
</template>

<script>
import IndicatorHeadline from '../modules/headlines/IndicatorHeadline.vue';



export default {
    props: ["type"],
    data() {
        return {
            quotes: null,
            catTypes: null,
            cat: null,
        };
    },
    computed: {
        indicatorsExist() {
            if (this.quotes == null) {
                this.quotes = this.$store.getters["lrgql/getIndicators"];
            }
            return this.quotes && this.quotes.length > 0;
        }
    },   
    watch: {
        type: function (newVal, oldVal) {
            
            switch (newVal) {
                case 0:
                    this.cat = null;
                    break;
                case 1:
                    this.cat = this.catTypes.CURRENCY_MARKET;
                    break;
                case 2:
                    this.cat = this.catTypes.MACRO;
                    break;
                case 3:
                    this.cat = this.catTypes.BANKS;
                    break;
                case 4:
                    this.cat = this.catTypes.COMMODITIES;
                    break;
                default:
                    this.cat = null;
            }
            this.$store.dispatch("lrgql/loadIndicatorsByMacro", this.cat).then(() => {
                this.quotes = this.$store.getters["lrgql/getIndicators"];
            });
        }
    },
    beforeMount() {     
        this.catTypes = this.$store.getters["lrgql/getIndCatTypes"];      
        this.$store.dispatch("lrgql/loadIndicatorsByMacro");
    },
    components: { IndicatorHeadline }
}

</script>
