<template>

    <StackLayout>
        <!-- <button @tap="clearToken()">4567890</button> -->
        <ScrollView orientation="horizontal" height="68" class="enterprise-gral" v-if="getTopics">
            <GridLayout :columns="genCols">
                <label v-for="(item, index) in me.news.topics" :key="index" :column="index" :text="item.topicName"
                    class="menu" :class="{ active: selectedItem == index }" textWrap="true"
                    @tap="selectItem(item, index)"></label>

            </GridLayout>
        </ScrollView>

        <GridLayout>
            <section :sect="sectionId"></section>

        </GridLayout>
    </StackLayout>
</template>


<script>

import { ApplicationSettings } from '@nativescript/core';
import Section from '../pages/Section.vue';

export default {
    components: {
        Section
    },
    data() {
        return {
            selectedItem: 0,
            me: null,
            sectionId: 12
        };
    },
    computed: {
        genCols() {

            let columns = '';
            this.me.news.topics.forEach(element => {
                columns = columns + 'auto '
            });
            return columns;
        },
        topicsExist() {
            return this.me && this.me.news && this.me.news.topics && this.me.news.topics.length > 0;
        },
        getTopics() {
            if (this.me == null) {
                this.me = this.$store.getters['lrmasgql/getTopics']
            }
            return this.me != null

        },
        methods: {
            showTopics() {
                debugger;

                this.me = this.$store.getters['lrmasgql/getTopics']

                console.log(this.me)
            },
            selectItem(item, index) {
                debugger;
                this.selectedItem = index;
                this.sectionId = item.topicId;
            },
            clearToken() {
                debugger;
                ApplicationSettings.setString("token", "")
            }

        },
        async beforeMount() {
            console.log("beforeMount")
            this.$store.dispatch('lrmasgql/getTopicsInfo');

        }
    }
}
</script>

<style scoped>
.enterprise-gral {
    margin: 0 5px;
}

.menu {
    border-color: #C2C2C2;
    border-width: 1 1 1 1;
    height: 68px;
    padding: 9px 18px;
    text-align: center;
    font-size: 11px;
    line-height: 14px;
    font-family: Montserrat;
    font-weight: 500;
    color: #808080;
    border-radius: 32px;
    margin-left: 5px;
    margin-right: 5px;
}

.active {
    color: #C51A1B;
    background-color: #EEEEEE;
    border-color: #EAEAEA;
}
</style>