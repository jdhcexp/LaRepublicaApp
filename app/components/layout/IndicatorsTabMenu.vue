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
                <GridLayout>
                    <IndicatorsPage></IndicatorsPage>                
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                    <Label text="acciones" class="h2 text-center">
                    </Label>
                </GridLayout>
            </MDTabContentItem>
           
        </MDTabs>
    </StackLayout>
</template>

<script>
import IndicatorsPage from "../pages/IndicatorsPage.vue";

export default{
    components:{
        IndicatorsPage
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