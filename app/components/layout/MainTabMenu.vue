<template>

    <StackLayout>
        <MDTabs selectedIndex="0" height="100%">
            <MDTabStrip>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="ÚLTIMAS NOTICIAS" class="item"></Label>
                </MDTabStripItem>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="MIS NOTICIAS" class="item"></Label>
                </MDTabStripItem>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="TENDENCIAS" class="item"></Label>
                </MDTabStripItem>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="CENTRAL DE AGENCIAS" class="item"></Label>
                </MDTabStripItem>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="EMPRESAS" class="item"></Label>
                </MDTabStripItem>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="ANÁLISIS" class="item"></Label>
                </MDTabStripItem>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="CAJA FUERTE" class="item"></Label>
                </MDTabStripItem>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="VIDEOS" class="item"></Label>
                </MDTabStripItem>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="ESPECIALES" class="item"></Label>
                </MDTabStripItem>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="COMUNIDAD EMPRESARIAL" class="item"></Label>
                </MDTabStripItem>
            </MDTabStrip>
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <LastNews row="0"></LastNews>
                    <IndicatorsBar row="1" :banner="banner"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <!-- <button @tap="showInfo">show info</button> -->
                <GridLayout rows="*,auto">
                    <MyNews row="0"></MyNews>
                    <IndicatorsBar row="1" :banner="banner"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <Trends row="0"></Trends>
                    <IndicatorsBar row="1" :banner="banner"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <Agencies row="0"></Agencies>
                    <IndicatorsBar row="1" :banner="banner"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <EnterpriseTabMenu row="0"></EnterpriseTabMenu>
                    <IndicatorsBar row="1" :banner="banner"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <AnalysisTabMenu></AnalysisTabMenu>
                    <IndicatorsBar row="1" :banner="banner"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <Section sect="12" row="0"></Section>
                    <IndicatorsBar row="1" :banner="banner"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <VideosTabMenu row="0"></VideosTabMenu>
                    <IndicatorsBar row="1" :banner="banner"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <Specials row="0"></Specials>
                    <IndicatorsBar row="1" :banner="banner"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <Partners row="0"></Partners>
                    <IndicatorsBar row="1" :banner="banner"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
        </MDTabs>
    </StackLayout>

    <!-- <GridLayout>

   </GridLayout> -->

</template>

<script>
import gql from 'graphql-tag';

import LastNews from "../pages/LastNews.vue";
import Trends from "../pages/Trends";
import Agencies from "../pages/Agencies";
import EnterpriseTabMenu from "./EnterpriseTabMenu";
import AnalysisTabMenu from "./AnalysisTabMenu";
import Section from "../pages/Section";
import VideosTabMenu from "./VideosTabMenu";
import Specials from "../pages/Specials.vue";
import Partners from "../pages/Partners.vue";
import MyNews from "../pages/LRmas/MyNews.vue";
import IndicatorsBar from '../layout/IndicatorsBar.vue'

const INDICATORS_BAR_QUERY = gql`
query bar{
  banner{
    name
    quoteValue {
      value
      percentageVariation
      variationType
    }
  }
}
`

export default {
    components: {
        LastNews,
        Trends,
        Agencies,
        EnterpriseTabMenu,
        AnalysisTabMenu,
        Section,
        VideosTabMenu,
        Specials,
        Partners,
        MyNews, IndicatorsBar
    },
    apollo: {
        $client: 'marketClient',
        banner: INDICATORS_BAR_QUERY
    },  
    data() {
        return {};
    },
methods:{
    showInfo(){
        console.log(this.banner);
    }
}
};
</script>

<style scoped>
.menu {
    un-selected-item-color: #808080;
    highlight-color: #C51A1B;
    selected-item-color: #C51A1B;
}

.item {
    text-align: center;
    font: normal normal bold 10px/13px Montserrat;
    color: #C51A1B;
}
</style>