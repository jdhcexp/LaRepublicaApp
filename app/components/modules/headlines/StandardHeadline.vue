<template>
<StackLayout orientation="horizontal" class="content-news" @tap="onNavigationItemTap(headLine.id)">
    <Image :src="headLine.principalImage.url" class="thumbnail"/>
    <StackLayout>
        <Label :text="headLine.header" class="category category-thumb" />
        <label :text="headLine.title" textWrap="true" class="text-thumb" />
    </StackLayout>
</StackLayout>
</template>

<script>
import StandardPost from '../posts/StandardPost';



export default {
    components:{
        StandardPost
    },
    props: {
        headLine: {
            type: Object
        }
    },
    data() {
        return {};
    },
    methods: {
         onNavigationItemTap(id) {
            this.$navigateTo(StandardPost, {
                transition: {
                    name: "slideLeft",
                    duration: 100,
                    curve: "easeIn"
                },
                props:{
                    postId: id
                }
            }
            );
            // utils.closeDrawer();
        }
    },
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
