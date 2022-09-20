<template>
    <WrapLayout backgroundColor="#fff" v-if="headline">
        <!-- <Label :text="opening.header" class="category" /> -->
         <!-- <button @tap="showInfo">qwertyui</button> -->
        <AbsoluteLayout backgroundColor="#fff">          
            <Image :src="headline.youtubeThumb" top="0" class="img-ppal" />
            <StackLayout class="box-play">
                <Image src="~/assets/icons/play.png" width="50" />
            </StackLayout>
        </AbsoluteLayout>
        <StackLayout orientation="horizontal">
            <Label class="box-hash" text="COMMER LR"/>
			<Label class="box-category" text="HACIENDA"/>
            <!--<StackLayout class="save">
                <Image src="~/assets/icons/guardar-relleno.png" width="11" verticalAlignment="center" />
            </StackLayout>-->
        </StackLayout>
        <label :text="headline.title" class="titular-videos" textWrap="true" />
    </WrapLayout>
    <!-- <WrapLayout backgroundColor="#fff">
        <button @tap="showInfo">asdcfvf</button>
        <Label :text="opening.header" class="category" />
        <AbsoluteLayout backgroundColor="#fff">
            <Image
                src="https://www.elfinancierocr.com/resizer/VNA4hXDoWi1E69nA_M2ls0FOYfQ=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gruponacion/CCCJJCXVENE3XHVWOZAM4BCYRQ.jpg"
                top="55" class="img-ppal" />
            <StackLayout class="titular-box">
                <label
                    text="Avianca se prepara para un cambio de holding y salida de la bolsa al cierre de este año"
                    class="titular-ppal" textWrap="true" />
            </StackLayout>
        </AbsoluteLayout>
    </WrapLayout> -->
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
    },
    methods: {
        showInfo() {            
            console.log(this.headline);
        }
    },
};
</script>
<style scoped>
    .category {
        width: 100%;
        text-align: center;
        margin-top: 17px;
        font-size: 10px;
        color: #808080;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    }
    .box-play {
        margin-top: 260px;
        width: 100%;
        text-align: center;
    }
    .titular-videos {
        font: normal normal normal 19px/25px Bitter;
        color: #000000;
        margin: 30px 32px 0;
    }
    .img-ppal {
        width: 100%;
    }
    .box-hash {
        font-size: 11px;
  		font-family: 'Montserrat', sans-serif;
  		font-weight: 500;
		line-height: 14px;
        color: #808080;
        border-color: #C2C2C2;
        border-width: 1 1 1 1;
        padding: 14px 40px;
        margin: 40px 32px 0;
    }
    .box-category {
        font-size: 10px;
  		font-family: 'Montserrat', sans-serif;
  		font-weight: 600;
		line-height: 13px;
        color: #808080;
        border-color: #C2C2C2;
        border-width: 0 0 0 1;
        padding: 15px 26px;
        margin: 40px 0 0;
    }
    .save {
        position: absolute;
        right: 0;
        top: 40px;
    }
</style>