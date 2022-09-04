<template>
<ScrollView>
    <StackLayout v-if="partners">
      <PartnerHeadline v-for="(item, index) in partners" :key="index" :headline="item"></PartnerHeadline>
      </StackLayout>
</ScrollView>
</template>

<script>
import gql from 'graphql-tag';
import PartnerHeadline from '../modules/headlines/PartnerHeadline.vue';

const PARTNERS_QUERY = gql`

query partners{
  partners{
    companyLogo {
      url
    }
    title    
    lead
    sponsorshipText
    section
  }
}
`

export default{
    apollo: {
        partners: PARTNERS_QUERY,
    },
    methods: {
        showInfo() {            
            console.log(this.partners);            
        }
    },
    components: { PartnerHeadline }
}

</script>