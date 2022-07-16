<template>
<ScrollView>
    <WrapLayout backgroundColor="#fff" v-if="centralAgencies && centralAgencies.length > 0">
        <agencies-headline v-for="item in centralAgencies" :key="item.id" :headLine="item"></agencies-headline>       
    </WrapLayout>
</ScrollView>
</template>

<script>
import gql from 'graphql-tag';
// import MainHeadline from "../modules/MainHeadline"
import AgenciesHeadline from "../modules/headlines/AgenciesHeadline";

const AGENCIES_QUERY = gql `
   query agencies{
  centralAgencies {
    id
    title
    header
    companyName
    image {
      url
    }    
    agency {
      id
      name      
    }
  }
}
    `;

export default {
    components: {
        // MainHeadline,
        AgenciesHeadline
    },
     apollo: {        
        centralAgencies: AGENCIES_QUERY
    },  
    data() {
        return {};
    }
};
</script>

<style scoped>

</style>>
