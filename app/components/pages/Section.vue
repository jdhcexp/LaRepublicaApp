<template>
  <ScrollView>
    <StackLayout>
      <!-- <button @tap="showInfo">qwertyui</button> -->
    </StackLayout>
    <StackLayout v-if="section!=null">
      <!-- <button @tap="showInfo">qwertyui</button> -->
      <MainHeadline :opening="first" v-if="section && section.posts && section.posts.length > 0"></MainHeadline>

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




export default {
  components: {
    MainHeadline,
    // MainHeadlineDummy,
    StandardHeadline,
    SectionHeadline
  },
  data() {
    return {
      section: null
    }
  },
  props: {
    req: {
      type: Object
    }
  },

  computed: {
    first() {
      return this.section.posts[0];
    },
    headLines() {

      return this.section.posts.slice(1);
    }

  },
  methods: {
    showInfo() {
      console.log(this.req);
    }
  },
  watch: {
    req: function (newVal, oldVal) {

      this.$store.dispatch("lrgql/loadSectionTag", newVal).then(() => {
        this.section = this.$store.getters['lrgql/getSectionInfo']

      })
    }
  },
  beforeMount() {
    this.$store.dispatch("lrgql/loadSectionTag", this.req).then(() => {
      this.section = this.$store.getters['lrgql/getSectionInfo']

    })
  },

};
</script>

<style>

</style>
