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
    import StandardPost from '../posts/StandardPost.vue';
export default {
props: {
        headLine: {
            type: Object
        }
    },
    methods: {
        onNavigationItemTap(id) {
            debugger;
            this.$navigateTo(StandardPost, {
                transition: {
                    name: "slideLeft",
                    duration: 100,
                    curve: "easeIn"
                },
                props: {
                    postId: id
                }
            }
            );
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
    margin-top: 21px;
    clear: both;
    width: 96%;
}
.thumbnail-analyst {
    margin-right: 14px;
    width: 27%;
    vertical-align: top;
}
.analysis-title {
    font: normal normal normal 19px/25px Bitter;
    color: #000000;
    margin-top: 22px;
}
.analysis-name {
    font: normal normal bold 10px/25px Montserrat;
    color: #000000;
    margin-top: 12px;
}
.analysis-job {
    font: normal normal normal 10px/14px Montserrat;
    color: #000000;
}
</style>
