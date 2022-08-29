<template>
<ScrollView>
    <WrapLayout backgroundColor="#fff" v-if="bannerExist">
        <StackLayout orientation="horizontal" class="company-indicators" v-for="(item, index) in quotes" :key="index">
            <Label :text="item.name" class="indicator" textWrap="true" />
            <Label :text="item.quoteValue.value" class="value" />
            <Label :text="item.quoteValue.percentageVariation" class="porcent" :class="getIndicatorClass(item.quoteValue.variationType)"/>
            <Label text="" class="icon-indicator" :class="getIndicatorSign(item.quoteValue.variationType)" />
        </StackLayout>
        <!-- <StackLayout orientation="horizontal" class="company-indicators">
            <Label text="TASA USURA CRÉDITO DE CONSUMO" class="indicator" textWrap="true" />
            <Label text="$3.302,41" class="value" />
            <Label text="-2,44 %" class="porcent negative-indicator" />
            <Label text="" class="icon-indicator negative-indicator-gral" />
        </StackLayout>
       <StackLayout orientation="horizontal" class="company-indicators">
            <Label text="TASA DE USURA MICROCRÉDITO" class="indicator" textWrap="true" />
            <Label text="$ 287,85" class="value" />
            <Label text="2,44 %" class="porcent positive-indicator" />
            <Label text="<" class="icon-indicator positive-indicator" />
        </StackLayout> -->

        <!-- Barra de indicadores inferior. -->
        <StackLayout>
            <ScrollView orientation="horizontal" height="32" class="indicators-bar">
                <GridLayout columns="auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto">
                    <Label column="0" text="DTF" class="indicator-bar" textWrap="true"></Label>
                    <Label column="1" text="2,65%" class="value-bar" textWrap="true"></Label>
                    <Label column="2" text="+1,57 %" class="porcent-bar negative-indicator" textWrap="true"></Label>
                    <Image column="3" src="~/assets/icons/down.png" width="7" verticalAlignment="center" class="icon-indicator-bar" />
                    <Label column="4" text="UVR" class="indicator-bar" textWrap="true"></Label>
                    <Label column="5" text="$269,98" class="value-bar" textWrap="true"></Label>
                    <Label column="6" text="-1,57 %" class="porcent-bar positive-indicator" textWrap="true"></Label>
                    <Image column="7" src="~/assets/icons/up.png" width="7" verticalAlignment="center" class="icon-indicator-bar" />
                    <Label column="8" text="TRM" class="indicator-bar" textWrap="true"></Label>
                    <Label column="9" text="$3.944,37" class="value-bar" textWrap="true"></Label>
                    <Label column="10" text="+$31,11" class="porcent-bar positive-indicator" textWrap="true"></Label>
                    <Image column="11" src="~/assets/icons/up.png" width="7" verticalAlignment="center" class="icon-indicator-bar" />
                    <Label column="12" text="DTF" class="indicator-bar" textWrap="true"></Label>
                    <Label column="13" text="2,65%" class="value-bar" textWrap="true"></Label>
                    <Label column="14" text="+1,57 %" class="porcent-bar negative-indicator" textWrap="true"></Label>
                    <Image column="15" src="~/assets/icons/down.png" width="7" verticalAlignment="center" class="icon-indicator-bar" />
                    <Label column="16" text="UVR" class="indicator-bar" textWrap="true"></Label>
                    <Label column="17" text="$269,98" class="value-bar" textWrap="true"></Label>
                    <Label column="18" text="-1,57 %" class="porcent-bar positive-indicator" textWrap="true"></Label>
                    <Image column="19" src="~/assets/icons/up.png" width="7" verticalAlignment="center" class="icon-indicator-bar" />
                    <Label column="20" text="TRM" class="indicator-bar" textWrap="true"></Label>
                    <Label column="21" text="$3.944,37" class="value-bar" textWrap="true"></Label>
                    <Label column="22" text="+$31,11" class="porcent-bar positive-indicator" textWrap="true"></Label>
                    <Image column="23" src="~/assets/icons/up.png" width="7" verticalAlignment="center" class="icon-indicator-bar" />
                </GridLayout>
            </ScrollView>
        </StackLayout>

        <!-- Este bloque de código no hace nada, hay que borrarlo cuando se implemente bien la barra de indicadores. -->
        <StackLayout>
            <ScrollView orientation="horizontal" height="50">
                <GridLayout columns="auto">
                    <Label column="0" text="" class="indicator-bar" textWrap="true"></Label>
                </GridLayout>
            </ScrollView>
        </StackLayout>

    </WrapLayout>
</ScrollView>
</template>

<script>
import gql from 'graphql-tag';

const ENTERPRISE_INDICATORS_QUERY = gql`
query quotes{
  quotes{
    name
    quoteValue {
      value
      percentageVariation
      variationType
    }
  }
}
`

export default {
apollo:{
    $client:'marketClient',
    quotes:ENTERPRISE_INDICATORS_QUERY
},
computed: {
  bannerExist(){
    return this.quotes && this.quotes.length > 0;
  }  
},
methods: {
    getIndicatorClass(type){
        switch(type){
            case "UP":
                return 'positive-indicator';
            case "DOWN":
                return 'negative-indicator';
            default:
                return "";
        }
    },
    getIndicatorSign(type){
        switch(type){
            case "UP":
                return 'positive-indicator-gral';
            case "DOWN":
                return 'negative-indicator-gral';
            default:
                return "";
        }
    }
},
}

</script>

<style scoped>
.company-indicators {
    margin-left: 14px;
    margin-right: 14px;
    padding: 26px 28px 26px 28px;
    height: auto;
    border-color: #C2C2C2;
    border-width: 0 0 1 0;
    clear: both;
}
.indicator {
    font: normal normal bold 11px/14px Montserrat;
    color: #000000;
    width: 53%;
}
.value {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 11px;
    color: #000000;
    width: 18%;
    text-align: right;
    margin-right: 2%;
}
.porcent {
    font: normal normal normal 11px/14px Montserrat;
    color: #000000;
    width: 16%;
    text-align: center;
}
.icon-indicator {
    text-align: center;
    width: 13%;
    font: normal normal normal 11px/14px Montserrat;
}
.negative-indicator {
  color: #C51A1B;
}
.positive-indicator {
  color: #50B85E;
}
.negative-indicator-gral {
    background-image: url("~/assets/icons/down.png");
    width: 14px;
    height: 14px;
    background-repeat: no-repeat;
    background-size: contain;
}
.positive-indicator-gral {
    background-image: url("~/assets/icons/up.png");
    width: 14px;
    height: 14px;
    background-repeat: no-repeat;
    background-size: contain;
}
</style>
