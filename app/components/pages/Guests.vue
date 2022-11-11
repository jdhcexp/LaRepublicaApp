<template>
  <ScrollView>
    <!-- <button @tap="showInfo">qwertyui</button> -->
    <WrapLayout backgroundColor="#fff" v-if="guestsExist">

      <Label text="Viernes" class="analysis-day" />
      <guests-headline v-for="item in guests" :key="item.id" :headLine="item"></guests-headline>
    </WrapLayout>
  </ScrollView>
</template>

<script>
import GuestsHeadline from '../modules/headlines/GuestsHeadline.vue';

export default {
  components: {
    GuestsHeadline
  },
  data() {
    return {
      guests: null
    }
  },
  computed: {
    guestsExist() {
      if (this.guests == null) {
        this.centralAguestsencies = this.$store.getters['lrgql/getGuests'];
      }
      return this.guests && this.guests.length > 0;
    }
  },
  methods: {
    showInfo() {
      console.log(this.analysis);
    }
  },
  beforeMount() {
    this.$store.dispatch('lrgql/loadGuests').then(() => {
      this.guests = this.$store.getters['lrgql/getGuests'];
    });
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
