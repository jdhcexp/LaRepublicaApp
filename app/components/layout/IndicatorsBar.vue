<template>
    <StackLayout v-if="bannerExist">
        <ScrollView orientation="horizontal" height="32" class="indicators-bar">
            <GridLayout
                :columns="genCols">
                <IndicatorInBar :idx="index" v-for="(item, index) in banner" :key="index" :indicator="item"></IndicatorInBar>
                <!-- <IndicatorInBar idx="1"></IndicatorInBar> -->
                <!-- <GridLayout column="0" columns="auto auto auto auto">
                <Label column="0" text="DTF" class="indicator-bar" textWrap="true"></Label>
                <Label column="1" text="2,65%" class="value-bar" textWrap="true"></Label>
                <Label column="2" text="+1,57 %" class="porcent-bar negative-indicator" textWrap="true"></Label>
                <Image column="3" src="~/assets/icons/down.png" width="7" verticalAlignment="center"
                    class="icon-indicator-bar" />
                </GridLayout>
                <GridLayout column="1" columns="auto auto auto auto">
                <Label column="0" text="DTF" class="indicator-bar" textWrap="true"></Label>
                <Label column="1" text="2,65%" class="value-bar" textWrap="true"></Label>
                <Label column="2" text="+1,57 %" class="porcent-bar negative-indicator" textWrap="true"></Label>
                <Image column="3" src="~/assets/icons/down.png" width="7" verticalAlignment="center"
                    class="icon-indicator-bar" />
                </GridLayout> -->
                <!-- <Label column="4" text="UVR" class="indicator-bar" textWrap="true"></Label>
                <Label column="5" text="$269,98" class="value-bar" textWrap="true"></Label>
                <Label column="6" text="-1,57 %" class="porcent-bar positive-indicator" textWrap="true"></Label>
                <Image column="7" src="~/assets/icons/up.png" width="7" verticalAlignment="center"
                    class="icon-indicator-bar" />
                <Label column="8" text="TRM" class="indicator-bar" textWrap="true"></Label>
                <Label column="9" text="$3.944,37" class="value-bar" textWrap="true"></Label>
                <Label column="10" text="+$31,11" class="porcent-bar positive-indicator" textWrap="true"></Label>
                <Image column="11" src="~/assets/icons/up.png" width="7" verticalAlignment="center"
                    class="icon-indicator-bar" />
                <Label column="12" text="DTF" class="indicator-bar" textWrap="true"></Label>
                <Label column="13" text="2,65%" class="value-bar" textWrap="true"></Label>
                <Label column="14" text="+1,57 %" class="porcent-bar negative-indicator" textWrap="true"></Label>
                <Image column="15" src="~/assets/icons/down.png" width="7" verticalAlignment="center"
                    class="icon-indicator-bar" />
                <Label column="16" text="UVR" class="indicator-bar" textWrap="true"></Label>
                <Label column="17" text="$269,98" class="value-bar" textWrap="true"></Label>
                <Label column="18" text="-1,57 %" class="porcent-bar positive-indicator" textWrap="true"></Label>
                <Image column="19" src="~/assets/icons/up.png" width="7" verticalAlignment="center"
                    class="icon-indicator-bar" />
                <Label column="20" text="TRM" class="indicator-bar" textWrap="true"></Label>
                <Label column="21" text="$3.944,37" class="value-bar" textWrap="true"></Label>
                <Label column="22" text="+$31,11" class="porcent-bar positive-indicator" textWrap="true"></Label>
                <Image column="23" src="~/assets/icons/up.png" width="7" verticalAlignment="center"
                    class="icon-indicator-bar" /> -->
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
    props: {
        banner: {
            type: Array
        }        
    },
    computed:{
        bannerExist(){
            return this.banner && this.banner.length > 0
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