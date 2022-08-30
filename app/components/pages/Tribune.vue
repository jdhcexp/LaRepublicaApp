<template>
<ScrollView>
    <button @tap="showInfo">qwertyui</button>
    <WrapLayout backgroundColor="#fff" v-if="hlChecker">
    
        <Label text="Viernes" class="analysis-day" />
        <TribuneHeadline v-for="item in headlines" :key="item.id" :headLine="item"></TribuneHeadline>
    </WrapLayout>
</ScrollView>
</template>

<script>
import gql from 'graphql-tag';
import GuestsHeadline from '../modules/headlines/GuestsHeadline.vue';
import TribuneHeadline from '../modules/headlines/TribuneHeadline';


const GUESTS_QUERY = gql `
query Analysis {
  analysis {   
    tribunes{
      name
      id
      posts{
        id
        title
        author{
          id
          name
          photo {
            alt
            url
          }
          position
        }
      }
    }
  }
}`;

export default {  
    components: {
        TribuneHeadline
    },
    props: ['target'],   
    apollo: {
        analysis: GUESTS_QUERY,       
    },
    data() {
        return {
          hl: []
        };
    },
    methods: {
        showInfo() {
            debugger;
            console.log(this.analysis);
            debugger;
        }
    },
    computed:{
      headlines(){   
        debugger;
         console.log(this.analysis);    
          return this.analysis.tribunes.filter(x => x.name == this.target)[0].posts;       
      },
      hlChecker(){
          return this.analysis && this.analysis.tribunes && this.analysis.tribunes.length > 0;       
      }
    }
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
