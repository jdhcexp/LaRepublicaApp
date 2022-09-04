<template>
<StackLayout>
        <MDTabs selectedIndex="0" height="100%">
            <MDTabStrip>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="INDICADORES" class="item"></Label>
                </MDTabStripItem>
                
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="ACCIONES" class="item"></Label>
                </MDTabStripItem>               
            </MDTabStrip>
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <IndicatorsSubTabMenu row="0"></IndicatorsSubTabMenu>                    
                    <IndicatorsBar row="1"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
            
            <MDTabContentItem>
                <GridLayout rows="*,auto">
                    <StockPage row="0"></StockPage>
                    <IndicatorsBar row="1"></IndicatorsBar>
                </GridLayout>
            </MDTabContentItem>
           
        </MDTabs>
    </StackLayout>
</template>

<script>

import IndicatorsBar from "./IndicatorsBar.vue";
import IndicatorsSubTabMenu from "./IndicatorsSubTabMenu.vue";
import StockPage from "../pages/StockPage.vue";

export default{
    components:{
    
    IndicatorsBar,
    IndicatorsSubTabMenu,
    StockPage
}

}

</script>

<style scoped>

.item {
    text-align: center;
    font: normal normal bold 10px/13px Montserrat;
    color: #C51A1B;
}

TabStrip.menu {
    un-selected-item-color: #808080;
    highlight-color: #C51A1B;
    selected-item-color: #C51A1B;
}

</style>