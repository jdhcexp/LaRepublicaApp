<template>
<ScrollView>
    <!-- <button @tap="showInfo">qwertyui</button> -->
    <WrapLayout backgroundColor="#fff" v-if="analysis && analysis.analysts && analysis.analysts.length > 0">
    
        <Label text="viernes" class="analysis-day" />
        <AnalysisHealine v-for="item in analysis.analysts" :key="item.id" :headLine="item"></AnalysisHealine>
    </WrapLayout>
</ScrollView>
</template>

<script>
import gql from 'graphql-tag';
import AnalysisHealine from '../modules/headlines/AnalysisHealine.vue';

const ANALYSIS_QUERY = gql `
query Analysis{
  analysis {
 analysts(dayOfWeek: THURSDAY){
      title
      urlApp
      id
      author{
        name
        position
        analystAppUrl
        photo {   
          url
          width
        }
      }
    }
  }
 }
`;

export default {
    components: {
        AnalysisHealine
    },
    apollo: {
        analysis: ANALYSIS_QUERY
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
