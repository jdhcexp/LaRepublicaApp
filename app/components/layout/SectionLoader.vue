<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <NavigationButton text="" android.systemIcon="ic_menu_back" @tap="goBack" />

      <Label class="action-bar-title" :text="getTitle" />

    </ActionBar>

    <GridLayout rows="*,auto" v-if="isSection">
      <!-- <label :text="item.id+' type '+item.itemEnum"></label> -->
      <Section row="0" :req="getRequest"></Section>
      <!-- <button @tap="showInfo">salkdlakjdlkajslda</button> -->
      <IndicatorsBar row="1"></IndicatorsBar>
    </GridLayout>
    <GridLayout rows="*,auto" v-if="isAnalysis">
      <!-- <label :text="item.id+' type '+item.itemEnum"></label> -->
      <AnalysisTabMenu></AnalysisTabMenu>
      <!-- <button @tap="showInfo">salkdlakjdlkajslda</button> -->
      <IndicatorsBar row="1"></IndicatorsBar>
    </GridLayout>
    <GridLayout rows="*,auto" v-if="isLRMas">
      <!-- <label :text="item.id+' type '+item.itemEnum"></label> -->
      <MyNews v-if="this.req.id==1"></MyNews>
      <Kiosko v-if="this.req.id==2"></Kiosko>
      <DigitalVersions v-if="this.req.id==3"></DigitalVersions>
      <!-- <button @tap="showInfo">salkdlakjdlkajslda</button> -->
      <IndicatorsBar row="1"></IndicatorsBar>
    </GridLayout>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";
import { SelectedPageService } from "../../shared/selected-page-service"
import AnalysisTabMenu from "../../components/layout/AnalysisTabMenu.vue"
import Section from "../pages/Section.vue";
import IndicatorsBar from "./IndicatorsBar.vue";
import MyNews from "../pages/LRmas/MyNews.vue";
import Kiosko from "../pages/LRmas/Kiosko.vue";
import DigitalVersions from "../pages/LRmas/DigitalVersions.vue";

export default {
  // mounted() {
  //   SelectedPageService.getInstance().updateSelectedPage("Search");
  // },
  components: {
    Section,
    IndicatorsBar,
    AnalysisTabMenu,
    MyNews,
    Kiosko,
    DigitalVersions
},
  props: {
    req: {
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
    },
    isSection() {
      return this.req.type == 'SECTION';
    },
    isAnalysis() {
      return this.req.type == 'ANALYSIS';
    },
    isLRMas(){
      return this.req.type == 'LRMAS';
    },
    getTitle(){
      if(this.isSection){
        switch(this.req.id){
          case 6:
            return "FINANZAS";
          case 3:
            return "ECONOMÍA";
          case 5:
            return "EMPRESAS";
          case 15:
            return "OCIO";
          case 14:
            return "GLOBOECONOMÍA";
          case 12:
            return "CAJA FUERTE";
          default:
            return "NOTICIAS";
        }
      }
      else if(this.isAnalysis){
        return "ANÁLISIS"
      }
      else if(this.isLRMas){
        switch(this.req.id){
          case 1:
            return "MI SELECCIÓN DE NOTICIAS";
          case 2:
            return "KIOSKO";
          case 3:
            return "TINTA DIGITAL";
          default:
            return "LRMAS";
        }
      }
    }
  },
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    },
    showInfo() {
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
