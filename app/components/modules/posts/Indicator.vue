<template>
    <page>

        <GridLayout rows="auto auto 250" v-if="indicatorExist">
            <StackLayout row="0" orientation="horizontal" class="company-indicators" >
                <Label :text="indData[0].name" class="indicator" textWrap="true" />
                <Label :text="indData[0].quoteValue.value" class="value" />
                <Label :text="indData[0].quoteValue.percentageVariation" class="porcent"
                    :class="getIndicatorClass(indData[0].quoteValue.variationType)" />
                <Label text="" class="icon-indicator" :class="getIndicatorSign(indData[0].quoteValue.variationType)" />
            </StackLayout>
            <StackLayout row="1">
            <WrapLayout>
                <StackLayout orientation="horizontal" class="company-indicators" v-for="(item, index) in indData[0].extraValues" :key="index">
                    <Label :text="item.key" class="indicator" textWrap="true" />
                    <Label :text="item.value" class="value" />
                </StackLayout>
            </WrapLayout>
            </StackLayout>
            <RadCartesianChart row="2">
                <CategoricalAxis v-tkCartesianHorizontalAxis></CategoricalAxis>
                <LinearAxis v-tkCartesianVerticalAxis allowZoom="true" :minimum="min" :maximum="max"></LinearAxis>
                <LineSeries v-tkCartesianSeries :items="setDataToDraw" :categoryProperty="xAxysName"
                    :valueProperty="yAxysName">
                </LineSeries>
            </RadCartesianChart>
     
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
                    return 'positive-indicator-gral';
                case "DOWN":
                    return 'negative-indicator-gral';
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
        