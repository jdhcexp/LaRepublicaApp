<template>

    <StackLayout>
        <MDTabs selectedIndex="0" height="100%">
            <MDTabStrip>
                <MDTabStripItem>
                    <Label text="ULTIMAS NOTICIAS"></Label>

                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="MIS NOTICIAS"></Label>

                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="TENDENCIAS"></Label>

                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="CENTRAL DE AGENCIAS"></Label>
                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="EMPRESAS"></Label>
                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="ANÁLISIS"></Label>
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
        </MDTabs>
    </StackLayout>
</template>

<script>
    import LastNews from "../pages/LastNews.vue";
    import Trends from "../pages/Trends";
    import Agencies from "../pages/Agencies";
    import EnterpriseTabMenu from "./EnterpriseTabMenu";
    import AnalysisTabMenu from "./AnalysisTabMenu";
    export default {
        components: {
            LastNews,
            Trends,
            Agencies,
            EnterpriseTabMenu,
            AnalysisTabMenu
        },
        data() {
            return {};
        }
    };
</script>

<style>
</style>