<template>
<ScrollView>
    <WrapLayout backgroundColor="#fff">
        <StackLayout orientation="horizontal" class="company-indicators">
            <Label text="UVR" class="indicator" textWrap="true" />
            <Label text="$ 287,85" class="value" />
            <Label text="2,44 %" class="porcent" />
            <Label text="-" class="icon-indicator" />
        </StackLayout>
        <StackLayout orientation="horizontal" class="company-indicators">
            <Label text="TASA USURA CRÉDITO DE CONSUMO" class="indicator" textWrap="true" />
            <Label text="$3.302,41" class="value" />
            <Label text="-2,44 %" class="porcent negative-indicator" />
            <Label text=">" class="icon-indicator negative-indicator" />
        </StackLayout>
        <StackLayout orientation="horizontal" class="company-indicators">
            <Label text="TASA DE USURA MICROCRÉDITO" class="indicator" textWrap="true" />
            <Label text="$ 287,85" class="value" />
            <Label text="2,44 %" class="porcent positive-indicator" />
            <Label text="<" class="icon-indicator positive-indicator" />
        </StackLayout>
    </WrapLayout>
</ScrollView>
</template>

<script>
export default {

}
</script>

<style scoped>
.company-indicators {
    margin-left: 16px;
    margin-right: 16px;
    padding: 30px 32px 30px 32px;
    height: auto;
    border-color: #C2C2C2;
    border-width: 0 0 1 0;
    clear: both;
}
.indicator {
    font: normal normal bold 13px/16px Montserrat;
    color: #000000;
    width: 53%;
}
.value {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 13px;
    color: #000000;
    width: 18%;
    text-align: right;
    margin-right: 2%;
}
.porcent {
    font: normal normal normal 13px/16px Montserrat;
    color: #000000;
    width: 16%;
    text-align: center;
}
.icon-indicator {
    text-align: center;
    font: normal normal normal 13px/16px Montserrat;
    color: #000000;
    width: 11%;
}
.negative-indicator {
    color: #C51A1B;
}
.positive-indicator {
    color: #50B85E;
}
</style>
