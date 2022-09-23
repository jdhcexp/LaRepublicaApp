<template>
    <page>
        <GridLayout rows="auto auto auto 250 auto auto" v-if="indicatorExist">
            <StackLayout row="0" orientation="horizontal" class="indicator-title" >
                <Label :text="indData[0].name" class="indicator-int" textWrap="true" />
            </StackLayout>
            <StackLayout row="1" orientation="horizontal" class="company-indicators-int" >
                <Label :text="indData[0].quoteValue.value" class="value-max" />
                <Label text="+0,37 %" class="value-max-int" />
                <Label :text="indData[0].quoteValue.percentageVariation" class="porcent-int"
                    :class="getIndicatorClass(indData[0].quoteValue.variationType)" />
                <Label text="" class="icon-indicator-int" :class="getIndicatorSign(indData[0].quoteValue.variationType)" />
            </StackLayout>
            <StackLayout row="2">
                <WrapLayout>
                    <StackLayout orientation="horizontal" class="company-indicators-inf" v-for="(item, index) in indData[0].extraValues" :key="index">
                        <Label :text="item.key" class="indicator-inf" textWrap="true" />
                        <Label :text="item.value" class="value-inf" />
                    </StackLayout>
                </WrapLayout>
            </StackLayout>
            <RadCartesianChart row="3" class="grafica">
                <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>
                <LinearAxis v-tkCartesianVerticalAxis allowZoom="true" :minimum="min" :maximum="max"></LinearAxis>
                <LineSeries v-tkCartesianSeries :items="setDataToDraw" :categoryProperty="xAxysName"
                    :valueProperty="yAxysName">
                </LineSeries>
            </RadCartesianChart>
            <StackLayout row="4" orientation="horizontal" class="filters-gral">
                <label text="1D" class="filter-time" textWrap="true"></label>
                <label text="5D" class="filter-time" textWrap="true"></label>
                <label text="1M" class="filter-time" textWrap="true"></label>
                <label text="6M" class="filter-time" textWrap="true"></label>
                <label text="1A" class="filter-time" textWrap="true"></label>
            </StackLayout>
            <StackLayout row="5" orientation="horizontal" class="data-fuente">
                <Label class="style-font date-font">
                    <FormattedString>
                        <Label text="Fecha: "></Label>
                        <Label text="24/11/2021" class="var-data"></Label>
                    </FormattedString>
                </Label>
                <Label class="style-font hour-font">
                    <FormattedString>
                        <Label text="Hora: "></Label>
                        <Label text="12:59:58 PM" class="var-data"></Label>
                    </FormattedString>
                </Label>
                <Label class="style-font font">
                    <FormattedString>
                        <Label text="Fuente: "></Label>
                        <Label text="Set-FX" class="var-data"></Label>
                    </FormattedString>
                </Label>           
            </StackLayout>
        </GridLayout>
    </page>
</template>

<script>
export default {
    props: ['indId', 'type'],
    data() {
        return {
            indData: null,
            dataToDraw: [],
            xAxysName: null,
            yAxysName: null,
            min: null,
            max: null,
            types: null,
        };
    },
    computed: {
        indicatorExist() {
            return this.indData && this.indData.length > 0;
        },
        setDataToDraw() {
            
            if (this.indicatorExist) {
                this.indData[0].graphicData.dataset.forEach((element, idx) => {
                    if (idx == 0) {
                        this.xAxysName = element[0],
                            this.yAxysName = element[1]
                    } else {
                        var item = {};
                        item[this.xAxysName] = element[0],
                            item[this.yAxysName] = element[1]
                        this.dataToDraw.push(item);
                        if (this.min == null) {
                            this.min = element[1]
                        } else if (this.min > element[1]) {
                            this.min = element[1]
                        }
                        if (this.max == null) {
                            this.max = element[1]
                        } else if (this.max < element[1]) {
                            this.max = element[1]
                        }
                    }
                });
            }          
            return this.dataToDraw;
        }
    },
    methods: {
        showinfo() {
            console.log(this.indData);
        },
        getIndicatorClass(type) {
            switch (type) {
                case "UP":
                    return 'positive-indicator';
                case "DOWN":
                    return 'negative-indicator';
                default:
                    return "";
            }
        },
        getIndicatorSign(type) {
            switch (type) {
                case "UP":
                    return 'positive-indicator-gral-int';
                case "DOWN":
                    return 'negative-indicator-gral-int';
                default:
                    return "";
            }
        }

    },
    beforeMount() {
        
        this.types = this.$store.getters["lrgql/getQuoteTypeEnum"];
        const vars = {
            id: this.indId,
            type: this.types[this.type],
            from: null,
            to: null,
            take: null
        }
        this.$store.dispatch("lrgql/loadIndicatorDetail", vars).then(() => {
            this.indData = this.$store.getters["lrgql/getIndicatorDetail"]        
        })
    },
}
</script>
<style scoped>
    .indicator-title {
        margin: 48px 30px 0;
        height: auto;
    }
    .indicator-int {
        font: normal normal bold 16px/19px Montserrat;
        color: #000000;
    }
    .company-indicators-int {
        margin: 20px 30px 20px;
        padding: 0 0 15px;
        height: auto;
        border-color: #C2C2C2;
        border-width: 0 0 1 0;
        clear: both;
    }
    .value-max {
        font: normal normal normal 35px/44px Montserrat;
        color: #000000;
        width: 65%;
    }
    .value-max-int {
        color: #000000;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        width: 16%;
        vertical-align: bottom;
        padding-bottom: 19px;
    }
    .porcent-int {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #000000;
        width: 16%;
        vertical-align: bottom;
        padding-bottom: 19px;
    }
    .company-indicators-inf {
        margin: 0 30px 0;
        padding: 22px 0;
        height: auto;
        border-color: #F5F4F6;
        border-width: 0 0 1 0;
        clear: both;
    }
    .indicator-inf {
        color: #000000;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 10px;
        line-height: 13px;
        width: 80%;
        text-transform: uppercase;
    }
    .value-inf {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #000000;
        width: 20%;
        text-align: right;
    }
    .icon-indicator-int {
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        vertical-align: center;
    }
    .negative-indicator {
        color: #C51A1B;
    }
    .positive-indicator {
        color: #50B85E;
    }
    .negative-indicator-gral-int {
        background-image: url("~/assets/icons/down.png");
        width: 16px;
        height: 63px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center bottom;
    }
    .positive-indicator-gral-int {
        background-image: url("~/assets/icons/up.png");
        width: 16px;
        height: 63px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center bottom;
    }
    .grafica {
        margin: 20px 30px 0;
    }
    .filters-gral {
        margin: 27px auto;
        width: 600px;
    }
    .filter-time {
        width: 100px;
        height: 62px;
        background: #F5F4F6;
        border-radius: 9px;
        margin: 0 10px;
        text-align: center;
        color: #808080;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 10px;
        line-height: 13px;
    }
    .data-fuente {
        margin: 20px 30px;
        padding: 20px 0;
        height: auto;
        border-color: #C2C2C2;
        border-width: 1 0 0 0;
    }
    .style-font {
        font: normal normal bold 11px/14px Montserrat;
        color: #808080;
    }
    .var-data {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 11px;
        line-height: 14px;
    }
    .date-font {
        width: 33%;
    }
    .hour-font {
        width: 33%;
    }
    .font {
        width: 34%;
        text-align: right;
    }
</style>  