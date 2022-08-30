<template>
<ScrollView>
    <!-- <button @tap="showInfo">qwertyui</button> -->
    <WrapLayout backgroundColor="#fff" v-if="analysis && analysis.guests && analysis.guests.length > 0">
    
        <Label text="Viernes" class="analysis-day" />
        <guests-headline v-for="item in analysis.guests" :key="item.id" :headLine="item"></guests-headline>
    </WrapLayout>
</ScrollView>
</template>

<script>
import gql from 'graphql-tag';
import GuestsHeadline from '../modules/headlines/GuestsHeadline.vue';

const GUESTS_QUERY = gql `
query Analysis {
  analysis {
    guests {
      id
      position
      name
      photo {
        alt
        url
      }
      analysisPosts(take: 1) {
        id
        title
        urlApp
      }
    }
  }
}

`;

export default {
    components: {
        GuestsHeadline
    },
    apollo: {
        analysis: GUESTS_QUERY
    },
    methods: {
        showInfo() {
            debugger;
            console.log(this.analysis);
            debugger;
        }
    },
}
</script>

<style scoped>
.analysis-day {
    background-color: #F5F4F6;
    margin-left: 2%;
    margin-right: 2%;
    padding: 30px 28px 30px 28px;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 11px;
    color: #000000;
    width: 96%;
    margin-top: 32px;
}
</style>
