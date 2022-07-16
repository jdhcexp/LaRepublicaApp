<template>
<ScrollView>
    <WrapLayout backgroundColor="#fff" v-if="analysis && analysis.editorial && analysis.editorial.length > 0">
        <EditorialHeadline v-for="item in analysis.editorial" :key="item.id" :headLine="item"></EditorialHeadline>
       

        <!-- <StackLayout class="analysis-editorial">
            <Label text="EDITORIAL" class="category category-analysis" />
            <Label text="Inflaciones altas no ayudan al dinero barato" textWrap="true" class="title-analysis" />
            <Label text="2017/11/06" class="date-analysis" />
        </StackLayout>
        <AbsoluteLayout class="back-analysis">
            <Image src="https://img.lalr.co/cms/2021/11/10165254/Editorial_11112021.jpg?size=xl" class="img-analysis" />
        </AbsoluteLayout> -->
    </WrapLayout>
</ScrollView>
</template>

<script>
import gql from 'graphql-tag';

import EditorialHeadline from '../modules/headlines/EditorialHeadline.vue'

const EDITORIAL_QUERY = gql `
    query Editorial{
  analysis {
    editorial{
      id
      title
      create
      section {
        name
      }
      principalImage {
        caption
        url(size: 480)
      }
      urlApp    
    }
  }
}
`;

export default {
components:{
    EditorialHeadline
},
apollo:{
    analysis: EDITORIAL_QUERY
}
}
</script>


<style>

</style>
