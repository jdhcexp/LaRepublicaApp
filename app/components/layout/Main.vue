<template>
    <Page class="page">
    
      <!--<ActionBar class="action-bar">
        <NavigationButton visibility="hidden"/>

        <GridLayout columns="50, *">
          <Image src="~/assets/logo.png" width="39"
                verticalAlignment="center" />

          <Label class="fas" text.decode="&#xf0c9;" @tap="onDrawerButtonTap"/>
        </GridLayout>
      </ActionBar>-->
      <ActionBar backgroundColor="#fff" flat="true">
        <StackLayout orientation="horizontal">
          <Label class="fas icon-menu" text.decode="&#xf0c9;" @tap="onDrawerButtonTap"/>
          
            <Image src="~/assets/logo.png" width="39"
                verticalAlignment="center" />   
                <Label class="far icon-search-top" text.decode="&#xf002;"/> 
                <Label class="far" text.decode="&#xf007;"/>  
        </StackLayout>
    </ActionBar>
        <MainBottomMenu></MainBottomMenu>
       
    </Page>
</template>


<script>
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "~/shared/selected-page-service";

  import MainBottomMenu from "./MainBottomMenu.vue";

  export default {
    components:{
      MainBottomMenu,
    },
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Home");
    },
    computed: {
      message() {
        return "<!-- Page content goes here wefwewfew-->";
      }
    },
    methods: {
      onDrawerButtonTap() {
        utils.showDrawer();
      }
    }
  };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
