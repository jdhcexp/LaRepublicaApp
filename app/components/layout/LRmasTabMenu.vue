<template>

    <StackLayout>
        <MDTabs selectedIndex="0" height="100%">
            <MDTabStrip>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="MIS NOTICIAS" class="item"></Label>
                </MDTabStripItem>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="TINTA DIGITAL" class="item"></Label>
                </MDTabStripItem>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="BITACORA EMPRESARIAL" class="item"></Label>
                </MDTabStripItem>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="CENTRO DE CONVENCIONES" class="item"></Label>
                </MDTabStripItem>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="KIOSKO" class="item"></Label>
                </MDTabStripItem>
                
            </MDTabStrip>
            <MDTabContentItem>
                <GridLayout>
                    <label text="mis noticias"></label>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                    <label text="tinta digital"></label>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                    <label text="bitacora empresarial"></label>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                    <label text="centro de convenciones"></label>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                    <label text="kiosko"></label>
                </GridLayout>
            </MDTabContentItem>
            
        </MDTabs>
    </StackLayout>
     
   <!-- <GridLayout>

   </GridLayout> -->
   
</template>

<script>

import MyNewsLogin from "../pages/MyNewsLogin";

export default {
    components: {
   
    MyNewsLogin
},
    data() {
        return {};
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