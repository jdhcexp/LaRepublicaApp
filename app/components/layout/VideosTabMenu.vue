<template>
    <StackLayout>
        <ScrollView orientation="horizontal" height="68" class="gral">
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



        <!-- Inicio - Menú principal construido de ceros. -->
        <ScrollView orientation="horizontal" height="34" class="menu-manual">
            <GridLayout columns="auto auto auto auto auto auto auto">
                <label column="0" text="ÚLTIMAS NOTICIAS" class="manual-option manual-active" textWrap="true"></label>
                <label column="1" text="MIS NOTICIAS" class="manual-option" textWrap="true"></label>
                <label column="2" text="TENDENCIAS" class="manual-option" textWrap="true"></label>
                <label column="3" text="CENTRAL DE AGENCIAS" class="manual-option" textWrap="true"></label>
                <label column="4" text="ANÁLISIS" class="manual-option" textWrap="true"></label>
                <label column="5" text="CAJA FUERTE" class="manual-option" textWrap="true"></label>
                <label column="6" text="VIDEOS" class="manual-option" textWrap="true"></label>
            </GridLayout>
        </ScrollView>
        <!-- Fin - Menú principal construido de ceros. -->


        <!-- <SegmentedBar v-model="selectedItem" v-if="videos && videos.shows">
            <SegmentedBarItem title="Todos" />
            <SegmentedBarItem v-for="item in shows" :key="item.id" :title="item.name" />
          
        </SegmentedBar> -->
        <GridLayout v-if="videosExist">
            <Videos v-if="selectedItem == 0"></Videos>
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
            console.log(this.videos);            
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



/*** Inicio de estilos - Menú principal construido de ceros. ***/
.menu-manual {
    border-color: #C2C2C2;
    border-width: 0 0 1 0;
    height: 34px;
    margin-bottom: 22px;
}
.manual-option {
    text-align: center;
    font-size: 10px;
    line-height: 13px;
    font-family: Montserrat;
    font-weight: 500;
    color: #808080;
    padding: 11px 18px;
}
.manual-active {
    font-weight: 600;
    color: #C51A1B;
    border-color: #C51A1B;
    border-width: 0 0 3 0;
    padding: 15px 18px 7px;
}
/*** Fin de estilos - Menú principal construido de ceros. ***/
</style>