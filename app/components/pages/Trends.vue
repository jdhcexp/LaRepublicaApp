<template>
    <ScrollView>
        <!-- <button @tap="showInfo">qwertyui</button> -->
        <WrapLayout backgroundColor="#fff" v-if="trends && trends.length > 0">
            <TrendsHeadline v-for="(item, index) in trends" :key="item.id" :index="index" :trend="item">
            </TrendsHeadline>
        </WrapLayout>
    </ScrollView>
</template>

<script>
import gql from 'graphql-tag';

import TrendsHeadline from "../modules/headlines/TrendsHeadline.vue";

const TRENDS_QUERY = gql`
    query getTrends{
  trends{
    id
    header
    title
    urlApp   
    urlWeb 
  }
}
    `;

export default {
    components: {
        TrendsHeadline
    },
    apollo: {
        trends: TRENDS_QUERY
    },
    data() {
        return {};
    },
    methods: {
        showInfo() {
            console.log(this.trends);
        }
    }    
};
</script>

<style>
</style>
