<template>
  <ScrollView>
    <button @tap="showInfo">qwertyui</button>
    <StackLayout v-if="specials && specials.length > 0">
      <SpecialHeadline v-for="item in specials" :key="item.id" :headline="item"></SpecialHeadline>
    </StackLayout>
  </ScrollView>
</template>

<script>
import gql from 'graphql-tag';
import SpecialHeadline from '../modules/headlines/SpecialHeadline.vue';

const SPECIALS_QUERY = gql`
query specialsList{
  
  specials{
    id
    listingImage {
      url
    }
    editorialHeader
    editorialTitle
    create
    title
    lead
    section  
   }
  }

`

export default {
  apollo: {
    specials: SPECIALS_QUERY,
  },
  methods: {
    showInfo() {
      console.log(this.specials);
    }
  },
  components: { SpecialHeadline }
}

</script>