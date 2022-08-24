<template>
    <StackLayout orientation="horizontal" class="content-news">
        <Image :src="headline.companyLogo.url" class="thumbnail" />
        <StackLayout>
            <Label :text="headline.title" class="category category-thumb"></Label>
            <label :text="headline.sponsorshipText" textWrap="true" class="text-thumb"></label>
            <label :text="headline.lead"></label>
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
    margin-top: 22px;
    margin-left: 15px;
}

.thumbnail {
    width: 26%;
    margin-right: 15px;
    vertical-align: top;
}

.category-thumb {
    text-align: left;
    margin-top: 0;
}

.text-thumb {
    margin-top: 5px;
    font-size: 14px;
    color: #000;
    font-family: 'Bitter', serif;
    padding-right: 15px;
}
</style>
