<template>
    <Page class="page">
        <ScrollView ref="scrollLayout" class="scrollLayout">
            <!-- <label :text="postId"></label> -->
            <GridLayout rows="auto auto" v-if="postExist" class="completeLayout">
                <WrapLayout row="0" backgroundColor="#fff">
                    <Label :text="post.header" class="category" />
                    <label :text="post.title" class="titular-into" textWrap="true" />
                    <AbsoluteLayout backgroundColor="#fff">
                        <Image :src="post.image.url" top="0" class="img-ppal" />
                    </AbsoluteLayout>

                </WrapLayout>


                <WebView #postWebView row="1" :src="post.content" @loadFinished="loadFinished"
                    @loadStarted="onLoadStarted" minHeight="1000"/>
            </GridLayout>

        </ScrollView>

    </Page>

</template>

<script>

export default {

    data() {
        return {
            post: null
        }
    },
    props: ['postId'],
    computed: {
        postExist() {
            if (this.post != null && this.post.length > 0) {
                this.post = this.post[0];
            }

            return this.post != null;
        },
    },
    methods: {
        loadFinished(args) {


                setTimeout(() => {
                    debugger;
                    if(args.object.nativeView){
                    args.object.height = args.object.nativeView.scrollView.contentSize.height+100;
                }
                }, 300);
                debugger;

            // args.object.height="auto";


        },
        onLoadStarted(event) {
            debugger;
            // console.log('navigation detected with destination :', event.url)
            // const id = event.url.split('/');
            // if (id && id[0] == "lrapp:") {
            //     this.$store.dispatch("lrgql/loadStandardPost", id[4]).then(() => {
            //         this.post = this.$store.getters["lrgql/getStandardPost"];
            //         this.$refs.scrollLayout.scrollToVerticalOffset(0, true);
            //     })
            // }
        },

    },
    beforeMount() {
        this.post = null;
        if (this.postId) {
            var req = {
                id: this.postId
            };
            console.log(req);
            this.$store.dispatch("lrgql/loadAgencies", req).then(() => {
                this.post = this.$store.getters["lrgql/getAgencies"]
                console.log(this.post);
            })
        }
    },
}
</script>
<style scoped>
.completeLayout {
    border-color: #000000;
    border-width: 1 1 1 1;
    margin: 20px 20px;
    padding: 20px 20px;
}

.category {
    width: 100%;
    text-align: center;
    margin-top: 17px;
    font-size: 10px;
    color: #808080;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
}

.titular-into {
    width: 80%;
    margin-left: 10%;
    text-align: center;
    font-size: 19px;
    color: #000;
    font-family: 'Bitter', serif;
}

.date {
    width: 100%;
    text-align: center;
    margin-top: 16px;
    font-size: 12px;
    color: #808080;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 16px;
    margin-bottom: 36px;
}

.post-foot {
    background-color: #F5F4F6;
    margin-left: 32px;
    margin-right: 32px;
    height: 86px;
    padding: 23px 30px;
    width: 95%;
    margin-top: -43px;
    z-index: 99;
}

.text-bloom {
    font: normal normal 600 10px/13px Montserrat;
    color: #808080;
    border-color: #C2C2C2;
    border-width: 0 0 0 1;
    padding-left: 22px;
    margin-left: 22px;
}
</style>
