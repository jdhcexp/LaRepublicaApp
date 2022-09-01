<template>
    <GridLayout :column="idx" columns="auto auto auto auto" v-if="indicator">
        <Label column="0" :text="indicator.name" class="indicator-bar" textWrap="true"></Label>
        <Label column="1" :text="indicator.quoteValue.value" class="value-bar" textWrap="true"></Label>
        <Label column="2" :text="indicator.quoteValue.percentageVariation" class="porcent-bar negative-indicator" textWrap="true"></Label>
        <Image column="3" :src="getArrow" width="7" verticalAlignment="center"
            class="icon-indicator-bar" />
    </GridLayout>
</template>

<script>
export default {
    props: {
        idx: {
            type: Number
        },
        indicator: {
            type: Object
        }
    },
    computed:{
        getArrow(){
            return this.indicator.quoteValue.variationType == "UP" ? "~/assets/icons/up.png" : (this.indicator.quoteValue.variationType == "DOWN" ? "~/assets/icons/down.png" : "-")
        }
    }
}
</script>

<style scoped>
.indicator-bar {
    font: normal normal bold 10px/13px Montserrat;
    color: #000000;
    margin-left: 7px;
}

.value-bar {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 10px;
    color: #000000;
    margin-left: 7px;
}

.porcent-bar {
    font: normal normal normal 10px/13px Montserrat;
    color: #000000;
    margin-left: 7px;
}

.icon-indicator-bar {
    text-align: center;
    margin-left: 7px;
    margin-right: 25px;
}
</style>