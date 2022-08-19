<template>
<StackLayout orientation="horizontal" class="content-news">
    <Image :src="headline.youtubeThumb" class="thumbnail"/>
    <StackLayout>
        <Label :text="headline.header" class="category category-thumb" />
        <label :text="headline.title" textWrap="true" class="text-thumb" />
    </StackLayout>
</StackLayout>
</template>

<script>
export default {
    props: {
        headline: {
            type: Object
        }
    },
    data() {
        return {};
    }
};
</script>

<style scoped>
.content-news {
    margin-top: 25px;
    margin-left: 17px;
}

.thumbnail {
    width: 26%;
    margin-right: 17px;
    vertical-align: top;
}

.category-thumb {
    text-align: left;
    margin-top: 0;
}

.text-thumb {
    margin-top: 6px;
    font-size: 16px;
    color: #000;
    font-family: 'Bitter', serif;
    padding-right: 17px;
}
</style>
