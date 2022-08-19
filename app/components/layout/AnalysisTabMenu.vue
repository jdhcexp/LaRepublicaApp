<template>
    <StackLayout>
       	<ScrollView orientation="horizontal" height="76" class="enterprise-gral">
			<GridLayout :columns="genCols">
				<label column="0" text="Editorial" class="menu" :class="{active: selectedItem == 0}" textWrap="true" @tap="selectedItem = 0"></label>
				<label column="1" text="Análisis" class="menu" :class="{active: selectedItem == 1}" textWrap="true" @tap="selectedItem = 1"></label>
				<label column="2" text="Personaje del dia" class="menu" :class="{active: selectedItem == 2}" textWrap="true" @tap="selectedItem = 2"></label>
				<label column="3" text="Invitados" class="menu" :class="{active: selectedItem == 3}" textWrap="true" @tap="selectedItem = 3"></label>
				<label v-for="(item, index) in tribunesFilter" :key="index" :column="index + 4" :text="item.name" class="menu" :class="{active: selectedItem == index + 4} " textWrap="true" @tap="selectedItem = index+4"></label>
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
            <Editorial v-if="selectedItem == 0"></Editorial>
            <Analysis v-if="selectedItem == 1"></Analysis>
            <DayCharacter v-if="selectedItem == 2"></DayCharacter>
            <Guests v-if="selectedItem == 3"></Guests>   
            <Tribune v-if="selectedItem > 3" :target="selectTribune"></Tribune>       
        </GridLayout>
    </StackLayout>
</template>


<script>
import gql from 'graphql-tag';

import Editorial from "../pages/Editorial";
import Analysis from "../pages/Analysis";
import DayCharacter from "../pages/DayCharacter.vue";
import Guests from "../pages/Guests";
import Tribune from "../pages/Tribune"

const TRIBUNES_NAME_QUERY = gql`
    query DayChar {
            analysis {
                tribunes{
                    name
                    id     
                }
            }
    }`;


export default {
    components: {
        Editorial,
        Analysis,
        DayCharacter,
        Guests,
        Tribune
    },
    apollo: {
        analysis: TRIBUNES_NAME_QUERY
    },
    data() {
        return {
            selectedItem: 0,
        };
    },
    computed: {
        tribunesFilter() {
            if (this.tribunesExist) {
                return this.analysis.tribunes;
            }
            else {
                this.tribunes;
            }
        },
        selectTribune(){            
            return this.analysis.tribunes[this.selectedItem-4].name;            
        },
        genCols(){
            let cols = 4;
            if (this.tribunesExist) {
                cols = cols + this.analysis.tribunes.length;
            }            
            let columns = '';
            for(let i = 0; i<cols;i++){
                columns = columns+'auto ';
            }
            return columns;
        },
        tribunesExist(){
            return this.analysis && this.analysis.tribunes && this.analysis.tribunes.length > 0;
        }
    }
};
</script>

<style scoped>
.enterprise-gral {
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