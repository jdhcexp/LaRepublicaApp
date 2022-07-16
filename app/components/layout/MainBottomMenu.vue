<template>
    <StackLayout>
        <MDBottomNavigation selectedIndex="0">
            <MDTabStrip>
                <MDTabStripItem>
                    <Label text="Noticias"></Label>
                    <Image src="res://home"></Image>
                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="Indicadores"></Label>
                    <Image src="res://settings"></Image>
                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="LRMAS"></Label>
                    <Image src="res://search"></Image>
                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="Configuración"></Label>
                    <Image src="res://search"></Image>
                </MDTabStripItem>
                <MDTabStripItem>
                    <Label text="test post"></Label>
                    <Image src="res://search"></Image>
                </MDTabStripItem>
              
            </MDTabStrip>
            <MDTabContentItem>               
                    <MainTabMenu></MainTabMenu>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                    <Label text="Indicadores" class="h2 text-center">
                    </Label>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                    <Label text="LRMAS" class="h2 text-center">
                    </Label>
                </GridLayout>
                </MDTabContentItem>
                 <MDTabContentItem>
                <GridLayout>
                    <Label text="config" class="h2 text-center">
                    </Label>
                    <!-- <ConfigTabMenu></ConfigTabMenu> -->
                </GridLayout>               
            </MDTabContentItem>
             <MDTabContentItem>
                <GridLayout>
                    <Label text="test" class="h2 text-center">
                    </Label>
                    <!-- <TestTabMenu></TestTabMenu> -->
                </GridLayout>               
            </MDTabContentItem>
        </MDBottomNavigation>
    </StackLayout>
</template>

<script>
// import ConfigTabMenu from './ConfigTabMenu.vue';
    import MainTabMenu from '../layout/MainTabMenu'
//     import post1 from '../pages/test/post1.vue';
//     import TestTabMenu from './TestTabMenu.vue';
    export default {
        components: {         
            MainTabMenu,
            // ConfigTabMenu,
            // post1,
            // TestTabMenu
        },
        data() {
            return {};
        }
    };
</script>

<style>
</style>