<template>
    <StackLayout>
        <SegmentedBar v-model="selectedItem" v-if="videos && videos.shows">
            <SegmentedBarItem title="Todos" />
            <SegmentedBarItem v-for="item in shows" :key="item.id" :title="item.name" />
            <!-- <SegmentedBarItem title="Análisis" />
            <SegmentedBarItem title="Personaje del dia" />
            <SegmentedBarItem title="Invitados" />
            <SegmentedBarItem v-for="item in tribunesFilter" :key="item.id" :title="item.name" /> -->
        </SegmentedBar>
        <GridLayout v-if="videos && videos.shows">
            <Videos showId="0" v-if="selectedItem == 0"></Videos>
            <Videos v-if="selectedItem == index+1" v-for="(item, index) in shows" :key="item.id" :showId="item.id"></Videos>
            <!-- <Editorial v-if="selectedItem == 0"></Editorial>
            <Analysis v-if="selectedItem == 1"></Analysis>
            <DayCharacter v-if="selectedItem == 2"></DayCharacter>
            <Guests v-if="selectedItem == 3"></Guests>
            <Tribune v-if="selectedItem > 3" :target="selectTribune"></Tribune> -->
        </GridLayout>
    </StackLayout>
</template>

<script>
import gql from 'graphql-tag';
import Videos from '../pages/Videos';




const VIDEO_SHOWS_QUERY = gql`
    query VideoSect {
    videos {
     shows{
       id
       name
       description
     }
    }
    }`;

export default {
    components:{
    Videos,
    Videos,
    Videos
},
    apollo: {
        videos: VIDEO_SHOWS_QUERY
    },
    data() {
        return {
            selectedItem: 0,
        };
    },
    methods: {
        showInfo() {
            debugger;
            console.log(this.videos);
            debugger;
        }
    },
    mounted() {
        this.showInfo()
    },
    computed: {
        shows(){
            return this.videos.shows.slice(0,3);
        }
    },
}


</script>