<template>
<StackLayout>
    <StackLayout orientation="horizontal" class="content-news">
        <!-- <button @tap="showinfo">3456789</button> -->
        <Image :src="headLine.image.url" class="thumbnail" v-if="headLine.image" />
        <StackLayout>
            <Label :text="headLine.header" class="category category-thumb" />
            <label :text="headLine.title" textWrap="true" class="text-thumb"/>
        </StackLayout>
    </StackLayout>
    <StackLayout orientation="horizontal" class="agency-foot">
        <Label class="agency-left">
            <FormattedString>
                <Label text="EMPRESA: "></Label>
                <Label :text="headLine.companyName" class="company"></Label>
            </FormattedString>
        </Label>
        <Label :text="headLine.agency.name" class="agency-right" v-if="headLine.agency" />
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
    methods:{
        showinfo(){
            console.log(this.headLine);
        },
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
