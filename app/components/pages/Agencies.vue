<template>
  <ScrollView>
    <WrapLayout backgroundColor="#fff" v-if="agenciesExist">
      <agencies-headline v-for="item in centralAgencies" :key="item.id" :headLine="item"></agencies-headline>
    </WrapLayout>
  </ScrollView>
</template>

<script>

// import MainHeadline from "../modules/MainHeadline"
import AgenciesHeadline from "../modules/headlines/AgenciesHeadline";

export default {
  components: {
    // MainHeadline,
    AgenciesHeadline
  },

  data() {
    return {
      centralAgencies: null
    };
  },
  computed: {
    agenciesExist() {
      if (this.centralAgencies == null) {
        this.centralAgencies = this.$store.getters['lrgql/getAgencies'];
      }
      return this.centralAgencies && this.centralAgencies.length > 0;
    }
  },
  beforeMount() {
    var req = {
      id: null
    };
    this.$store.dispatch('lrgql/loadAgencies', req).then(() => {
      this.centralAgencies = this.$store.getters['lrgql/getAgencies'];
    });
  }
};
</script>

<style scoped>

</style>>
