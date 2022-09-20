<template>
    <StackLayout>
        <ScrollView orientation="horizontal" height="68" class="enterprise-gral">
            <GridLayout columns="auto auto auto">
                <label column="0" text="La República" class="menu" :class="{active: selectedItem == 0}" textWrap="true"
                    @tap="selectedItem = 0"></label>
                <label column="1" text="Asuntos Legales" class="menu" :class="{active: selectedItem == 1}"
                    textWrap="true" @tap="selectedItem = 1"></label>
                <label column="2" text="Agronegocios" class="menu" :class="{active: selectedItem == 2}" textWrap="true"
                    @tap="selectedItem = 2"></label>


            </GridLayout>
        </ScrollView>
        <GridLayout>
            <WrapLayout backgroundColor="#fff" v-if="getVersions" >   
            <!-- <button @tap="showInfo">sdlkskd fksd jfnksdjfksjdk</button> -->
              <Image :src="digitalVersions.items[selectedItem].cover" @tap="onNavigationItemTap(digitalVersions.items[selectedItem].path)"/>
            </WrapLayout>
            <!-- <Image :src="digitalVersions[selectedItem].cover" /> -->
        </GridLayout>
    </StackLayout>
</template>

<script>
import PDFViewer from './PDFViewer.vue';

export default {
    data() {
        return {
            selectedItem: 0,
            digitalVersions: null
        };
    },
    computed: {
        getVersions() {
            if (this.digitalVersions == null) {
                this.digitalVersions = this.$store.getters['lrmasgql/getDigitalVersions']
                console.log(this.digitalVersions);
            }
            return this.digitalVersions != null
        },
        checkState() {
            return this.$store.getters['lrmasgql/getDigitalVersions'];
        }
    },
    methods:{
        showInfo() {
            console.log("·································")
            console.log(this.digitalVersions);
        },
        onNavigationItemTap(path) {
            this.$navigateTo(PDFViewer, {
                transition: {
                    name: "slideLeft",
                    duration: 100,
                    curve: "easeIn"
                },
                props: {
                    uri: path
                }
            }
            );
            // utils.closeDrawer();
        }
    },
    watch: {
        checkState(newVal, oldVal) {
            this.digitalVersions = this.$store.getters['lrmasgql/getDigitalVersions']
        }
    },
    beforeMount() {
        this.$store.dispatch('lrmasgql/loadDigitalVersion').then(() => {
            this.digitalVersions = this.$store.getters['lrmasgql/getDigitalVersions']
        })
    },

}
</script>


<style scoped>
.enterprise-gral {
    margin: 0 5px;
}

.menu {
    border-color: #C2C2C2;
    border-width: 1 1 1 1;
    height: 68px;
    padding: 9px 18px;
    text-align: center;
    font-size: 11px;
    line-height: 14px;
    font-family: Montserrat;
    font-weight: 500;
    color: #808080;
    border-radius: 32px;
    margin-left: 5px;
    margin-right: 5px;
}

.active {
    color: #C51A1B;
    background-color: #EEEEEE;
    border-color: #EAEAEA;
}
</style>