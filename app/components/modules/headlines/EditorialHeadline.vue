<template>
<StackLayout>
    <StackLayout class="analysis-editorial">
        <Label text="EDITORIAL" class="category category-analysis" />
        <Label :text="headLine.title" textWrap="true" class="title-analysis" />
        <Label :text="headLine.create" class="date-analysis" />
    </StackLayout>
    <AbsoluteLayout class="back-analysis">
        <Image :src="headLine.principalImage.url" class="img-analysis" />
    </AbsoluteLayout>
</StackLayout>
</template>

<script>
export default {
props: {
        headLine: {
            type: Object
        }
    },
}
</script>

<style scoped>
.analysis-editorial {
    background-color: #F5F4F6;
    margin-top: 102px;
}
.category-analysis {
    margin-top: 54px;
}
.title-analysis {
    text-align: center;
    font: normal normal normal 22px/28px Bitter;
    color: #000000;
    width: 76%;
    margin-top: 7px;
}
.date-analysis {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #808080;
    width: 76%;
    margin-top: 7px;
    margin-bottom: 21px;
}
.back-analysis {
    background: linear-gradient(to bottom, #F5F4F6 0%, #F5F4F6 50%, #fff 50%, #fff 100%);
}
.img-analysis {
    width: 76%;
    margin-left: 12%;
    margin-right: 12%;
}
</style>
