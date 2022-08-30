<template>
    <StackLayout>
       	<ScrollView orientation="horizontal" height="68" class="enterprise-gral">
			<GridLayout :columns="genCols">
                <label v-for="(item, index) in topics" :key="index" :column="index" :text="item.topicName" class="menu" :class="{active: selectedItem == index } " textWrap="true" @tap="selectItem(item, index)"></label>

				<!-- <label column="0" text="Editorial" class="menu" :class="{active: selectedItem == 0}" textWrap="true" @tap="selectedItem = 0"></label>
				<label column="1" text="Análisis" class="menu" :class="{active: selectedItem == 1}" textWrap="true" @tap="selectedItem = 1"></label>
				<label column="2" text="Personaje del dia" class="menu" :class="{active: selectedItem == 2}" textWrap="true" @tap="selectedItem = 2"></label>
				<label column="3" text="Invitados" class="menu" :class="{active: selectedItem == 3}" textWrap="true" @tap="selectedItem = 3"></label> -->
				<!-- <label column="5" text="Datos cocteleros" class="enterprise-menu" textWrap="true"></label>
				<label column="6" text="Mercado cambiario" class="enterprise-menu" textWrap="true"></label>
				<label column="7" text="Macro" class="enterprise-menu" textWrap="true"></label>
				<label column="8" text="Bancos" class="enterprise-menu" textWrap="true"></label> -->
			</GridLayout>
		</ScrollView>
        <!-- <SegmentedBar v-model="selectedItem">
            <SegmentedBarItem title="Editorial" textWrap="true" />
            <SegmentedBarItem title="Análisis" />
            <SegmentedBarItem title="Personaje del dia" />
            <SegmentedBarItem title="Invitados" />
            <SegmentedBarItem v-for="item in tribunesFilter" :key="item.id" :title="item.name" />
        </SegmentedBar> -->
        <GridLayout>
            <section :sect="sectionId"></section>
            <!-- <Editorial v-if="selectedItem == 0"></Editorial>
            <Analysis v-if="selectedItem == 1"></Analysis>
            <DayCharacter v-if="selectedItem == 2"></DayCharacter>
            <Guests v-if="selectedItem == 3"></Guests>   
            <Tribune v-if="selectedItem > 3" :target="selectTribune"></Tribune>        -->
        </GridLayout>
    </StackLayout>
</template>


<script>
import Section from '../pages/Section.vue';

export default {
    components:{
        Section
    },
   props:['topics'],
    data() {
        return {
            selectedItem: 0,
            sectionId: 12,
        };
    },
    computed: {
        genCols(){
            let columns='';
            this.topics.forEach(element => {
                columns=columns+'auto '
            });
            return columns;
        }
        
        
    },
    methods:{
        showTopics(){
            console.log(this.topics)
        },
        selectItem(item, index){
            debugger;
            this.selectedItem = index;
            this.sectionId = item.topicId;
        }
    }
};
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