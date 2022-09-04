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
  import { SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';

  export default {
    data() {
      return {
        transition: new SlideInOnTopTransition()
      }
    },

    components: {
      DrawerContent,
      Main
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
