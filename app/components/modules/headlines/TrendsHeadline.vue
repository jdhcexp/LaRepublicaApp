<template>
    <WrapLayout backgroundColor="#fff">
        <StackLayout orientation="horizontal" class="content-trends">
            <Label :text="index+1" class="trendNumber" />
            <StackLayout>
                <Label :text="trend.header" class="category category-trend" />
                <label
                    :text="trend.title"
                    textWrap="true" class="text-thumb trend" />
            </StackLayout>
        </StackLayout>      
    </WrapLayout>
</template>

<script>
    export default {
         props:{
            trend:{
                type:Object
            },
            index:{
                type:Number
            }
        },
        data() {
            return {};
        }
    };
</script>

<style scoped>
.content-trends {
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 5px;
    border-color: #C2C2C2;
    border-width: 0 0 1 0;
}
.trendNumber {
    color: #000;
    font: normal normal bold 35px/44px Montserrat;
    width: 118px;
    margin-top: 0px;
    vertical-align: top;
}
.category-trend {
    text-align: left;
    margin-top: 21px;
}
.trend {
    margin-bottom: 10px;
}
</style>>
