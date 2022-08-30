<template>
     <StackLayout orientation="horizontal" class="content-news">
            <Image
                src="https://bartalks.net/wp-content/uploads/2020/07/Buencafe-e1595500913794.png"
                class="thumbnail" />
            <StackLayout>
                <Label text="COMERCIO" class="category category-thumb" />
                <label
                    text="Buencafé fortalece su plan de expansión llevando café liofilizado a más de 40 países"
                    textWrap="true" class="text-thumb" />
            </StackLayout>
        </StackLayout>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style scoped>
.thumbnail-company {
    width: 48%;
    margin-right: 15px;
    vertical-align: top;
}
.category-company {
    text-align: left;
    margin-top: 0;
    margin-left: 4%;
}
</style>
