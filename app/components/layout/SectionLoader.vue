<template>
    <Page class="page">
      <ActionBar class="action-bar">
        <NavigationButton text="" android.systemIcon="ic_menu_back" @tap="goBack" />
       
          <Label class="action-bar-title" text="Section"/>         
        
      </ActionBar>

      <GridLayout rows="*,auto" >
                    <!-- <label :text="item.id+' type '+item.itemEnum"></label> -->
                    <Section row="0" :req="getRequest"></Section>
                    <!-- <button @tap="showInfo">salkdlakjdlkajslda</button> -->
                    <IndicatorsBar row="1"></IndicatorsBar>
       </GridLayout>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "../../shared/selected-page-service"
import Section from "../pages/Section.vue";
import IndicatorsBar from "./IndicatorsBar.vue";

  export default {
    // mounted() {
    //   SelectedPageService.getInstance().updateSelectedPage("Search");
    // },
    components:{
        Section,
        IndicatorsBar
    },
    props:{
      req:{
        type: Object
      }
    },
    computed: {
      message() {
        return "<!-- Page content goes here -->";
      },
      getRequest() {
            return {
                id: this.req.id,
                type: this.req.type
            }
        }
    },
    methods: {
      onDrawerButtonTap() {
        utils.showDrawer();
      },
      showInfo(){
        console.log(this.req)
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
