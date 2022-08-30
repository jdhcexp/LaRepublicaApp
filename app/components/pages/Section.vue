<template>
<ScrollView>
    <StackLayout>
        <!-- <button @tap="showInfo">qwertyui</button> -->
        <MainHeadline :opening="first" v-if="section && section.posts && section.posts.length > 0"></MainHeadline>
        <!-- <SectionHeadline></SectionHeadline>
            <SectionHeadline></SectionHeadline> -->
        <WrapLayout backgroundColor="#fff" v-if="section && section.posts && section.posts.length > 0">
            <StandardHeadline v-for="hl in headLines" :key="hl.id" :headLine="hl"></StandardHeadline>

        </WrapLayout>
    </StackLayout>
</ScrollView>
</template>

<script>
import gql from 'graphql-tag';
import MainHeadline from "../modules/headlines/MainHeadline";
// import MainHeadlineDummy from "../modules/headlines/Dummies/MainHeadlineDummy";
import StandardHeadline from "../modules/headlines/StandardHeadline";
import SectionHeadline from "../modules/headlines/SectionHeadline";

const SECTION_QUERY = gql`
query enterprises($id: Int!){
  section(id: $id) {        
    id
    name
    partner {
      id
      sponsorshipText
    }    
    posts{
      id
      title
      header
      author{
        id
        name
      }
      principalImage {
        url(size: 240)
      }
      urlApp
      
    }
    special {
      id
    }

  }
}
`;

export default {
    components: {
        MainHeadline,
        // MainHeadlineDummy,
        StandardHeadline,
        SectionHeadline
    },
    props:['sect'],
    apollo: {
      
      section:{
        query: SECTION_QUERY,
        variables() {
           return {id: parseInt(this.sect)}
        }
      }     
    },
    computed: {
        first() {
            return this.section.posts[0];
        },
        headLines() {
            debugger;
            return this.section.posts.slice(1);
        }
    },
    methods: {
        showInfo() {
            debugger;
            console.log(this.section);
            debugger;
        }
    },
};
</script>

<style>
</style>
