<template>
    <StackLayout>
        <ScrollView orientation="horizontal" height="76" class="gral">
            <GridLayout :columns="genCols" v-if="videosExist">
                <label column="0" text="Todos" class="menu" :class="{ active: selectedItem == 0 }" textWrap="true"
                    @tap="selectedItem = 0"></label>
                <label v-for="(item, index) in shows" :key="index" :column="index + 1" :text="item.name" class="menu"
                    :class="{ active: selectedItem == index + 1 }" textWrap="true" @tap="selectedItem = index + 1"></label>
                <!-- <label column="2" text="Personaje del dia" class="menu" :class="{active: selectedItem == 2}" textWrap="true" @tap="selectedItem = 2"></label>
				<label column="3" text="Invitados" class="menu" :class="{active: selectedItem == 3}" textWrap="true" @tap="selectedItem = 3"></label>
				<label v-for="(item, index) in tribunesFilter" :key="index" :column="index + 4" :text="item.name" class="menu" :class="{active: selectedItem == index + 4} " textWrap="true" @tap="selectedItem = index+4"></label> -->
                <!-- <label column="5" text="Datos cocteleros" class="enterprise-menu" textWrap="true"></label>
				<label column="6" text="Mercado cambiario" class="enterprise-menu" textWrap="true"></label>
				<label column="7" text="Macro" class="enterprise-menu" textWrap="true"></label>
				<label column="8" text="Bancos" class="enterprise-menu" textWrap="true"></label> -->
            </GridLayout>
        </ScrollView>
        <!-- <SegmentedBar v-model="selectedItem" v-if="videos && videos.shows">
            <SegmentedBarItem title="Todos" />
            <SegmentedBarItem v-for="item in shows" :key="item.id" :title="item.name" />
          
        </SegmentedBar> -->
        <GridLayout v-if="videosExist">
            <Videos showId="0" v-if="selectedItem == 0"></Videos>
            <Videos v-if="selectedItem == index + 1" v-for="(item, index) in shows" :key="item.id" :showId="item.id">
            </Videos>
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
    components: {
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
        shows() {
            return this.videos.shows;
        },
        genCols() {
            let cols = 0;
            if (this.videosExist) {
                cols = this.videos.shows.length + 1;
            }
            let columns = '';
            for (let i = 0; i < cols; i++) {
                columns = columns + 'auto ';
            }
            return columns;
        },
        videosExist() {
            return this.videos && this.videos.shows;
        }
    },
}


</script>

<style scoped>
.gral {
    margin: 0 6px;
}

.menu {
    border-color: #C2C2C2;
    border-width: 1 1 1 1;
    height: 76px;
    padding: 11px 21px;
    text-align: center;
    font-size: 13px;
    line-height: 16px;
    font-family: Montserrat;
    font-weight: 500;
    color: #808080;
    border-radius: 36px;
    margin-left: 6px;
    margin-right: 6px;
}

.active {
    color: #C51A1B;
    background-color: #EEEEEE;
    border-color: #EAEAEA;
}
</style>