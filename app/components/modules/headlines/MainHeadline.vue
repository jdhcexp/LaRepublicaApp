<template>
    <WrapLayout backgroundColor="#fff" @tap="onNavigationItemTap(opening.id)">
        <Label :text="opening.header" class="category" />
        <AbsoluteLayout backgroundColor="#fff">
            <Image :src="opening.principalImage.url" top="49" class="img-ppal" />
            <StackLayout class="titular-box">
                <label :text="opening.title" class="titular-ppal" textWrap="true" />
                <!-- <label :text="opening.id" class="titular-ppal" textWrap="true" /> -->
            </StackLayout>
        </AbsoluteLayout>
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
import StandardPost from '../posts/StandardPost';

export default {
    components: {
        StandardPost
    },
    props: {
        opening: {
            type: Object
        }
    },
    data() {
        return {};
    },
    methods: {
        showInfo() {
            console.log(this.opening);
        },
        onNavigationItemTap(id) {
            debugger;
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
            ).catch(error => console.log(error));
            // utils.closeDrawer();
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
    text-transform: uppercase;
}

.titular-box {
    margin-left: 9%;
    width: 82%;
    background-color: #fff;
}

.titular-ppal {
    text-align: center;
    font-size: 19px;
    color: #000;
    font-family: 'Bitter', serif;
}

.img-ppal {
    width: 100%;
}
</style>
