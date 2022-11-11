<template lang="html">
    <RadSideDrawer ref="drawer" drawerLocation="Left" gesturesEnabled="true" :drawerTransition="transition">
        <StackLayout ~drawerContent backgroundColor="#ffffff">
            <DrawerContent/>
        </StackLayout>
        <Frame ~mainContent ref="drawerMainContent">
            <Main/>
        </Frame>
    </RadSideDrawer>
</template>

<script>
  import DrawerContent from './layout/DrawerContent'
  import Main from './layout/Main'
  import Search from './pages/Search';
  import { SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
  import { getUniversalLink, registerUniversalLinkCallback } from '@nativescript-community/universal-links';

  export default {
    async mounted() {
      console.log("++++++++++++++++++++++++++++++++++UNIVERSALMOUNTED+++++++")
        registerUniversalLinkCallback((link) => {
            console.log(link);
        });
        // const ul = getUniversalLink();
        // alert(JSON.stringify(ul))
        // console.log(ul);
    },
    data() {
      return {
        transition: new SlideInOnTopTransition()
      }
    },

    components: {
      DrawerContent,
      Main,
      Search
    },
    beforeMount() {
      this.$store.dispatch('lrgql/loadIndicatorsBar')

    },
  }
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
