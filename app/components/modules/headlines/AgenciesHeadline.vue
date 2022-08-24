<template>
<StackLayout>
    <StackLayout orientation="horizontal" class="content-news">
        <Image :src="headLine.image.url" class="thumbnail" />
        <StackLayout>
            <Label :text="headLine.header" class="category category-thumb" />
            <label :text="headLine.title" textWrap="true" class="text-thumb" />
        </StackLayout>
    </StackLayout>
    <StackLayout orientation="horizontal" class="agency-foot">
        <Label class="agency-left">
            <FormattedString>
                <Label text="EMPRESA: "></Label>
                <Label :text="headLine.companyName" class="company"></Label>
            </FormattedString>
        </Label>
        <Label :text="headLine.agency.name" class="agency-right" />
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
