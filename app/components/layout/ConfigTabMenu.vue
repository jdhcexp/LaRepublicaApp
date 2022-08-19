<template>

    <StackLayout>
        <MDTabs height="100%">
            <MDTabStrip>
                <MDTabStripItem>
                    <Label text="Noticias"></Label>
                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="Correo"></Label>
                </MDTabStripItem>
                <!-- <MDTabStripItem>
                    <Label text="Indicadores"></Label>
                </MDTabStripItem> -->
            </MDTabStrip>
            <MDTabContentItem>
                <GridLayout>
                    <NewsConfig></NewsConfig>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                   <mail-config></mail-config>
                </GridLayout>
            </MDTabContentItem>           
        </MDTabs>
    </StackLayout>
</template>

<script>
    // import Section from "../pages/Section";
    // import NewInOffice from "../pages/NewInOffice";
    // import IndicatorsPage from "../pages/IndicatorsPage";
    import MailConfig from '../pages/MailConfig.vue';
    import NewsConfig from '../pages/NewsConfig.vue';
    export default {
        components: {
            NewsConfig,
            MailConfig
        },
        data() {
            return {};
        }
    };
</script>

<style>
</style>