<template>
    <StackLayout v-if="bannerExist" background-color="#fff">
        <ScrollView orientation="horizontal" height="32" class="indicators-bar">
            <GridLayout
                :columns="genCols">
                <IndicatorInBar :idx="index" v-for="(item, index) in banner" :key="index" :indicator="item"></IndicatorInBar>

            </GridLayout>
        </ScrollView>
    </StackLayout>

</template>

<script>
import IndicatorInBar from '../modules/IndicatorInBar.vue';

export default {
    components:{
        IndicatorInBar
    },
    data() {
        return {
            banner:null
        }
    },

    computed:{
        bannerExist(){
            if(this.banner == null){
                this.banner = this.$store.getters['lrgql/getBanner']
            }
            return this.banner != null;
        },
        genCols(){
            let cols = this.banner.length;
            let columns = '';
            for(let i=0; i<cols; i++){
                columns=columns+'auto ';
            }
            return columns;
        }
    }
}
</script>

<style scoped>
.indicators-bar {
    background-color: #F5F4F6;
    border-color: #C2C2C2;
    border-width: 1 0 1 0;
}


</style>
