<template>
    <StackLayout>
        <SegmentedBar v-model="selectedItem">
            <SegmentedBarItem title="Editorial" textWrap="true" />
            <SegmentedBarItem title="Análisis" />
            <SegmentedBarItem title="Personaje del dia" />
            <SegmentedBarItem title="Invitados" />
            <SegmentedBarItem v-for="item in tribunesFilter" :key="item.id" :title="item.name" />
        </SegmentedBar>
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
            if (this.analysis && this.analysis.tribunes && this.analysis.tribunes.length > 0) {
                return this.analysis.tribunes;
            }
            else {
                this.tribunes;
            }
        },
        selectTribune(){            
            return this.analysis.tribunes[this.selectedItem-4].name;            
        }
    }
};
</script>