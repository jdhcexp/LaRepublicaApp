<template>

    <StackLayout>
        <MDTabs selectedIndex="0" height="100%" iOSTabBarItemsAlignment="leading">
            <MDTabStrip class="menu">
                <MDTabStripItem>
                    <Label text="ULTIMAS NOTICIAS" class="item"></Label>

                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="MIS NOTICIAS" class="item"></Label>

                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="TENDENCIAS" class="item"></Label>

                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="CENTRAL DE AGENCIAS" class="item"></Label>
                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="EMPRESAS" class="item"></Label>
                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="ANÁLISIS" class="item"></Label>
                </MDTabStripItem>
                  <MDTabStripItem>
                    <Label text="CAJA FUERTE" class="item"></Label>
                </MDTabStripItem>
                 <MDTabStripItem>
                    <Label text="VIDEOS" class="item"></Label>
                </MDTabStripItem>
                 <MDTabStripItem>
                    <Label text="ESPECIALES" class="item"></Label>
                </MDTabStripItem>
                 <MDTabStripItem>
                    <Label text="COMUNIDAD EMPRESARIAL" class="item"></Label>
                </MDTabStripItem>
            </MDTabStrip>
            <MDTabContentItem>
                <GridLayout>
                    <LastNews></LastNews>                 
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                    <Label text="Settings Page" class="h2 text-center">
                    </Label>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>                     
                    <Trends></Trends>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>                     
                    <Agencies></Agencies>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                    <EnterpriseTabMenu></EnterpriseTabMenu>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                    <AnalysisTabMenu></AnalysisTabMenu>
                </GridLayout>
            </MDTabContentItem>            
             <MDTabContentItem>
                <GridLayout>
                    <Section sect="12"></Section>
                </GridLayout>
            </MDTabContentItem>
             <MDTabContentItem>
                <GridLayout>
                    <VideosTabMenu></VideosTabMenu>
                </GridLayout>
            </MDTabContentItem>
             <MDTabContentItem>
                <GridLayout>
                    <Specials></Specials>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                    <Partners></Partners>
                </GridLayout>
            </MDTabContentItem>
        </MDTabs>
    </StackLayout>
</template>

<script>
    import LastNews from "../pages/LastNews.vue";
    import Trends from "../pages/Trends";
    import Agencies from "../pages/Agencies";
    import EnterpriseTabMenu from "./EnterpriseTabMenu";
    import AnalysisTabMenu from "./AnalysisTabMenu";
    import Section from "../pages/Section";
    import VideosTabMenu from "./VideosTabMenu";
import Specials from "../pages/Specials.vue";
import Partners from "../pages/Partners.vue";
    
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
    Partners
},
        data() {
            return {};
        }
    };
</script>

<style scoped>
.item {
    text-align: center;
    font: normal normal bold 12px/15px Montserrat;
    color: #C51A1B;
}

TabStrip.menu {
    un-selected-item-color: #808080;
    highlight-color: #C51A1B;
    selected-item-color: #C51A1B;
}

</style>