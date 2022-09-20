<template>
    
    <StackLayout>
        <MDBottomNavigation selectedIndex="0">
            <MDTabStrip backgroundColor="#fff" class="menu">
                <MDTabStripItem>
                    <Image src="~/assets/icons/noticias.png" width="10"
						verticalAlignment="center" />
                        <Label text="Noticias" class="item-footer" />
                </MDTabStripItem>
                <MDTabStripItem>
                    <Image src="~/assets/icons/indicadores.png" width="20"
						verticalAlignment="center" />
                    <Label text="Indicadores" class="item-footer" />
                </MDTabStripItem>
                <MDTabStripItem>
                    <Image src="~/assets/icons/logo-lr-mas.png" width="22"
						verticalAlignment="center" />
                </MDTabStripItem>
                <MDTabStripItem>
                    <Image src="~/assets/icons/ajustes.png" width="17"
						verticalAlignment="center" />
                    <Label text="Configuración" class="item-footer" />
                </MDTabStripItem>
                <!-- <MDTabStripItem>
                    <Label text="test post" lass="item-footer" />
                    <Image src="res://search"></Image>
                </MDTabStripItem> -->
              
            </MDTabStrip>
            <MDTabContentItem>               
                    <MainTabMenu></MainTabMenu>
                    
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                    <IndicatorsTabMenu></IndicatorsTabMenu>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                    <LRmasTabMenu></LRmasTabMenu>
                </GridLayout>
                </MDTabContentItem>
                 <MDTabContentItem>
                <GridLayout>                    
                    <ConfigTabMenu></ConfigTabMenu>
                </GridLayout>               
            </MDTabContentItem>
             <!-- <MDTabContentItem>
                <GridLayout>                   
                    <Post1></Post1>
                </GridLayout>               
            </MDTabContentItem> -->
        </MDBottomNavigation>
    </StackLayout>
</template>

<script>
     import MainTabMenu from '../layout/MainTabMenu'
import ConfigTabMenu from './ConfigTabMenu.vue';
   

    import TestTabMenu from './TestTabMenu.vue';
import IndicatorsTabMenu from './IndicatorsTabMenu.vue';

import Post1 from '../pages/test/post1.vue';
import LRMas from '../pages/LRmas/LRMas.vue';
import LRmasTabMenu from './LRmasTabMenu.vue';
    export default {
        components: {
    MainTabMenu,
    ConfigTabMenu,
    TestTabMenu,
    IndicatorsTabMenu,
    Post1,
    LRMas,
    LRmasTabMenu
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
.item-footer {
    text-align: center;
    font: normal normal 600 10px/13px Montserrat;
    color: #C51A1B;
}

</style>