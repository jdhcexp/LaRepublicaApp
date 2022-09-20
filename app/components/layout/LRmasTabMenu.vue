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
                <!-- <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="BITACORA EMPRESARIAL" class="item"></Label>
                </MDTabStripItem>
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="CENTRO DE CONVENCIONES" class="item"></Label>
                </MDTabStripItem> -->
                <MDTabStripItem backgroundColor="#fff" class="menu">
                    <Label text="KIOSKO" class="item"></Label>
                </MDTabStripItem>

            </MDTabStrip>
            <MDTabContentItem>
                <GridLayout>
                    <StackLayout>
                        <login-module v-if="!checktok" type="news"></login-module>
                    </StackLayout>
                    <MyNewsTabMenu v-if="checktok"></MyNewsTabMenu>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                    <StackLayout>
                        <login-module v-if="!checktok" type="ink"></login-module>
                    </StackLayout>
                    <DigitalVersions  v-if="checktok"></DigitalVersions>
                </GridLayout>
            </MDTabContentItem>
            <!-- <MDTabContentItem>
                <GridLayout>
                    <label text="bitacora empresarial"></label>
                </GridLayout>
            </MDTabContentItem>
            <MDTabContentItem>
                <GridLayout>
                    <label text="centro de convenciones"></label>
                </GridLayout>
            </MDTabContentItem> -->
            <MDTabContentItem>
                <GridLayout>
                    <StackLayout>
                        <login-module v-if="!checktok" type="kiosko"></login-module>
                    </StackLayout>
                    <Kiosko v-if="checktok"></Kiosko>
                </GridLayout>
            </MDTabContentItem>

        </MDTabs>
    </StackLayout>

    <!-- <GridLayout>

   </GridLayout> -->

</template>

<script>
import LoginModule from '../modules/LoginModule.vue';
import MyNewsTabMenu from './MyNewsTabMenu.vue';
import DigitalVersions from '../pages/LRmas/DigitalVersions.vue';
import Kiosko from '../pages/LRmas/Kiosko.vue';

export default {
    computed: {

        getToken() {
            return this.$store.getters["auth/getToken"]
        },
        checktok() {

            return this.getToken != '';
        }
    },
    methods: {
        showinfo() {
            console.log(ApplicationSettings.getString('token'));
        }
    },
    components: { LoginModule, MyNewsTabMenu, DigitalVersions, Kiosko },
    beforeMount() {

        this.$store.dispatch('auth/chargeToken');
        if (this.checktok) {
            this.$store.dispatch('lrmasgql/getTopicsInfo');
        }
    },
    watch: {
        getToken(newVal, oldVal) {
            this.$store.dispatch('lrmasgql/getTopicsInfo');
            this.$store.dispatch('lrmasgql/loadDigitalVersion');
            this.$store.dispatch('lrmasgql/loadMediaTypes');            
        }
    }

}
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