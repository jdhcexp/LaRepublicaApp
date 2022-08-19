<template>

    <StackLayout>
        <MDTabs height="100%">
            <MDTabStrip>
                <MDTabStripItem>
                    <Label text="test1"></Label>
                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="test1a"></Label>
                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="test2"></Label>
                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="test2a"></Label>
                </MDTabStripItem>
                 <MDTabStripItem>
                    <Label text="test3"></Label>
                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="test3a"></Label>
                </MDTabStripItem>
                <!-- <MDTabStripItem>
                    <Label text="Indicadores"></Label>
                </MDTabStripItem> -->
            </MDTabStrip>
            <MDTabContentItem>
                <GridLayout>
                <post-1></post-1>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                   <post-2></post-2>
                </GridLayout>
            </MDTabContentItem>    
             <MDTabContentItem>
                <GridLayout>
                <post-3></post-3>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                   <post-4></post-4>
                </GridLayout>
            </MDTabContentItem>      
             <MDTabContentItem>
                <GridLayout>
                <post-5></post-5>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                   <post-6></post-6>
                </GridLayout>
            </MDTabContentItem>           
        </MDTabs>
    </StackLayout>
</template>

<script>
    // import Section from "../pages/Section";
    // import NewInOffice from "../pages/NewInOffice";
    // import IndicatorsPage from "../pages/IndicatorsPage";
import post1 from '../pages/test/post1.vue';
import post2 from '../pages/test/post2.vue';
import post3 from '../pages/test/post3.vue';
import post4 from '../pages/test/post4.vue';
import post5 from '../pages/test/post5.vue';
import post6 from '../pages/test/post6.vue';
    export default {
        components: {
          post1,
          post2,
          post3,
          post4,
          post5,
          post6
        },
        data() {
            return {};
        }
    };
</script>

<style>
</style>