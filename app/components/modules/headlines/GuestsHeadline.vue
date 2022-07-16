<template>
<StackLayout orientation="horizontal" class="content-analysts">
    <StackLayout>
    <Image :src="headLine.photo.url" class="thumbnail-analyst" />
    </StackLayout>
    <StackLayout>
        <Label :text="headLine.analysisPosts[0].title" class="analysis-title" textWrap="true" />
        <Label :text="headLine.name" class="analysis-name" textWrap="true" />
        <label :text="headLine.position" textWrap="true" class="analysis-job" />
    </StackLayout>
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

.content-analysts {
    margin-left: 2%;
    margin-right: 2%;
    border-color: #C2C2C2;
    border-width: 0 0 1 0;
    margin-top: 24px;
    clear: both;
    width: 96%;
}
.thumbnail-analyst {
    margin-right: 16px;
    width: 27%;
    vertical-align: top;
}
.analysis-title {
    font: normal normal normal 22px/28px Bitter;
    color: #000000;
    margin-top: 25px;
}
.analysis-name {
    font: normal normal bold 12px/28px Montserrat;
    color: #000000;
    margin-top: 14px;
}
.analysis-job {
    font: normal normal normal 12px/16px Montserrat;
    color: #000000;
}
</style>
