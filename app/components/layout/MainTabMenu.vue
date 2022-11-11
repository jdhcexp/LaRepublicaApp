<template>
    <StackLayout>
        <ScrollView orientation="horizontal" height="50" class="menu-manual" scrollBarIndicatorVisible="false"
            backgroundColor="#fff">
            <GridLayout :columns="genCols" backgroundColor="#fff">
                <label column="0" text="ÚLTIMAS NOTICIAS" class="manual-option"
                    :class="{ 'manual-active': selectedItem == 0 }" textWrap="true" @tap="selectedItem = 0"></label>
                <label column="1" text="MIS NOTICIAS" class="manual-option"
                    :class="{ 'manual-active': selectedItem == 1 }" textWrap="true" @tap="selectedItem = 1"></label>
                <label column="2" text="TENDENCIAS" class="manual-option"
                    :class="{ 'manual-active': selectedItem == 2 }" textWrap="true" @tap="selectedItem = 2"></label>
                <label column="3" text="CENTRAL DE AGENCIAS" class="manual-option"
                    :class="{ 'manual-active': selectedItem == 3 }" textWrap="true" @tap="selectedItem = 3"></label>
                <label column="4" text="ANÁLISIS" class="manual-option" :class="{ 'manual-active': selectedItem == 4 }"
                    textWrap="true" @tap="selectedItem = 4"></label>
                <label column="5" text="CAJA FUERTE" class="manual-option"
                    :class="{ 'manual-active': selectedItem == 5 }" textWrap="true" @tap="selectedItem = 5"></label>
                <label column="6" text="VIDEOS" class="manual-option" :class="{ 'manual-active': selectedItem == 6 }"
                    textWrap="true" @tap="selectedItem = 6"></label>
                <label v-for="(item, index) in categories" :key="index" :column="7 + index" :text="item.name"
                    class="manual-option" :class="{ 'manual-active': selectedItem == (7 + index) }" textWrap="true"
                    @tap="selectedItem = (7 + index)"></label>
            </GridLayout>
        </ScrollView>
        <GridLayout rows="*,auto" v-if="selectedItem == 0" backgroundColor="#fff">
            <LastNews row="0"></LastNews>
            <IndicatorsBar row="1"></IndicatorsBar>
        </GridLayout>
        <GridLayout rows="*,auto" v-if="selectedItem == 1">
            <MyNews row="0"></MyNews>
            <IndicatorsBar row="1"></IndicatorsBar>
        </GridLayout>


        <GridLayout rows="*,auto" v-if="selectedItem == 2">
            <Trends row="0"></Trends>
            <IndicatorsBar row="1"></IndicatorsBar>
        </GridLayout>

        <GridLayout rows="*,auto" v-if="selectedItem == 3">
            <Agencies row="0"></Agencies>
            <IndicatorsBar row="1"></IndicatorsBar>
        </GridLayout>

        <!-- <GridLayout rows="*,auto" v-if="selectedItem=4">
                    <EnterpriseTabMenu row="0"></EnterpriseTabMenu>
                    <IndicatorsBar row="1"></IndicatorsBar>
                </GridLayout>
            -->
        <GridLayout rows="*,auto" v-if="selectedItem == 4">
            <AnalysisTabMenu></AnalysisTabMenu>
            <IndicatorsBar row="1"></IndicatorsBar>
        </GridLayout>

        <GridLayout rows="*,auto" v-if="selectedItem == 5">
            <Section :req="{ 'id': 12, 'type': 'SECTION' }" row="0"></Section>
            <IndicatorsBar row="1"></IndicatorsBar>
        </GridLayout>

        <GridLayout rows="*,auto" v-if="selectedItem == 6">
            <VideosTabMenu row="0"></VideosTabMenu>
            <IndicatorsBar row="1"></IndicatorsBar>
        </GridLayout>


        <GridLayout rows="*,auto" v-if="selectedItem > 6">
            <Section row="0" :req="getRequest(selectedItem)"></Section>
            <IndicatorsBar row="1"></IndicatorsBar>
        </GridLayout>


    </StackLayout>

    <!-- <StackLayout>
        <MDTabs selectedIndex="0" height="100%" v-if="categories.length>0" horizontalAlignment="left">
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
                <MDTabStripItem backgroundColor="#fff" class="menu" v-for="(item, index) in categories" :key="index">
                    <label :text="item.name" class="item"></label>
                </MDTabStripItem>
             <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="ESPECIALES" class="item"></Label>
                </MDTabStripItem>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="COMUNIDAD EMPRESARIAL" class="item"></Label>
                </MDTabStripItem>
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <LastNews row="0"></LastNews>
                    <IndicatorsBar row="1"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <MyNews row="0"></MyNews>
                    <IndicatorsBar row="1"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <Trends row="0"></Trends>
                    <IndicatorsBar row="1"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <Agencies row="0"></Agencies>
                    <IndicatorsBar row="1"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
         <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <EnterpriseTabMenu row="0"></EnterpriseTabMenu>
                    <IndicatorsBar row="1"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <AnalysisTabMenu></AnalysisTabMenu>
                    <IndicatorsBar row="1"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <Section :req="{'id':12, 'type':'SECTION'}" row="0"></Section>
                    <IndicatorsBar row="1"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <VideosTabMenu row="0"></VideosTabMenu>
                    <IndicatorsBar row="1"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem v-for="(item, index) in categories" :key="index">
                <GridLayout rows="*,auto">
                <label :text="item.id+' type '+item.itemEnum"></label>
                    <Section row="0" :req="getRequest(item)"></Section>
                    <IndicatorsBar row="1"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
     <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <Partners row="0"></Partners>
                    <IndicatorsBar row="1"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
        </MDTabs>
    </StackLayout> -->

    <!-- <GridLayout>

   </GridLayout> -->

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
import MyNews from "../pages/LRmas/MyNews.vue";
import IndicatorsBar from '../layout/IndicatorsBar.vue'



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
        MyNews,
        IndicatorsBar
    },
    data() {
        return {
            categories: [],
            selectedItem: 0,
        }
    },
    computed: {
        genCols() {
            let cols = 7;
            if (this.categoriesExist) {
                cols = cols + this.categories.length;
            }
            let columns = '';
            for (let i = 0; i < cols; i++) {
                columns = columns + 'auto ';
            }
            return columns;
        },
        categoriesExist() {
            return this.categories && this.categories.length > 0;
        }
    },
    methods: {
        getRequest(selected) {
            let item = this.categories[selected - 7];
            return {
                id: item.id,
                type: item.itemEnum
            }
        }
    },
    beforeMount() {
        this.$store.dispatch('lrgql/loadCatsMenu').then(() => {
            this.categories = this.$store.getters['lrgql/getCatsMenu'];


        })
    },

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

.menu-manual {
    border-color: #C2C2C2;
    border-width: 0 0 1 0;
    height: 38px;


}

.manual-option {
    text-align: center;
    font-size: 10px;
    line-height: 13px;
    font-family: Montserrat;
    font-weight: 500;
    color: #808080;
    padding: 11px 18px;
}

.manual-active {
    font-weight: 600;
    color: #C51A1B;
    border-color: #C51A1B;
    border-width: 0 0 3 0;
    padding: 15px 18px 7px;
}
</style>
