<template>
<StackLayout orientation="horizontal" class="content-videos">
    <AbsoluteLayout backgroundColor="#fff">          
        <Image :src="headline.youtubeThumb" top="0" class="thumbnail-video"/>
        <StackLayout class="box-play-int">
            <Image src="~/assets/icons/play.png" width="40" />
        </StackLayout>
    </AbsoluteLayout>   
    <StackLayout>
        <Label :text="headline.header" class="category category-thumb" />
        <label :text="headline.title" textWrap="true" class="text-thumb-video" />
        <StackLayout orientation="horizontal">
            <Label class="box-hash-mini" text="DATOS COCTELEROS" textWrap="true"/>
        </StackLayout>
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
    .content-videos {
        margin-top: 54px;
        margin-left: 32px;
        margin-right: 32px;
        position: relative;
    }
    .play {
        position: absolute;
        top: 50%;
        left: 0%;
    }
    .thumbnail-video {
        width: 312px;
        margin-right: 15px;
        vertical-align: top;
    }

    .category-thumb {
        text-align: left;
        margin-top: 0;
    }

    .text-thumb-video {
        margin-top: 5px;
        font-size: 14px;
        color: #000;
        font-family: 'Bitter', serif;
        padding-right: 15px;
        margin-left: 32px;
    }
    .box-hash-mini {
        font-size: 11px;
  		font-family: 'Montserrat', sans-serif;
  		font-weight: 500;
		line-height: 14px;
        color: #808080;
        border-color: #C2C2C2;
        border-width: 1 1 1 1;
        padding: 14px 40px;
        margin: 24px 32px 0;
    }
    .box-play-int {
        margin-top: 30px;
        width: 312px;
        text-align: center;
    }
</style>