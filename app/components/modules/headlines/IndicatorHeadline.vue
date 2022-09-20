<template>
    <StackLayout orientation="horizontal" class="company-indicators" v-if="quote" @tap="onNavigationItemTap(quote.id)">
        <Label :text="quote.name" class="indicator" textWrap="true" />
        <Label :text="quote.quoteValue.value" class="value" />
        <Label :text="quote.quoteValue.percentageVariation" class="porcent"
            :class="getIndicatorClass(quote.quoteValue.variationType)" />
        <Label text="" class="icon-indicator" :class="getIndicatorSign(quote.quoteValue.variationType)" />
    </StackLayout>

</template>

<script>
import Indicator from '../posts/Indicator.vue';

export default {
    props: {
        quote: {
            type: Object
        }
    },
    methods: {
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
        },
        onNavigationItemTap(id) {
            this.$navigateTo(Indicator, {
                transition: {
                    name: "slideLeft",
                    duration: 100,
                    curve: "easeIn"
                },
                props: {
                    indId: this.quote.id,
                    type: this.quote.quoteType
                }
            }
            );
            // utils.closeDrawer();
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
    