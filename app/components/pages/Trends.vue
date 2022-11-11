<template>
    <ScrollView>
        <!-- <button @tap="showInfo">qwertyui</button> -->
        <WrapLayout backgroundColor="#fff" v-if="trendsExist">
            <TrendsHeadline v-for="(item, index) in trends" :key="item.id" :index="index" :trend="item">
            </TrendsHeadline>
        </WrapLayout>
    </ScrollView>
</template>

<script>
import TrendsHeadline from "../modules/headlines/TrendsHeadline.vue";


export default {
    components: {
        TrendsHeadline
    },
    data() {
        return {
            trends:null
        };
    },
    computed: {
        trendsExist(){
            if(this.trends == null){
                this.trends = this.$store.getters['lrgql/getTrends'];
            }
            return this.trends && this.trends.length > 0;
        }
    },
    methods: {
        showInfo() {
            console.log(this.trends);
        }
    },
    beforeMount() {
        this.$store.dispatch('lrgql/loadTrends').then(() => {
            this.trends = this.$store.getters['lrgql/getTrends'];
            console.log("TRNDS IN VIEW");
            console.log(this.trends);
        });
    }
};
</script>

<style>
</style>
