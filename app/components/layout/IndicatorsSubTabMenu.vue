<template>
    <StackLayout>
        <ScrollView orientation="horizontal" height="68" class="enterprise-gral">
            <GridLayout columns="auto auto auto auto auto">
                <label column="0" text="Todos" class="menu" :class="{ active: selectedItem == 0 }" textWrap="true"
                    @tap="selectedItem = 0"></label>
                <label column="1" text="Mercado Cambiario" class="menu" :class="{ active: selectedItem == 1 }"
                    textWrap="true" @tap="selectedItem = 1"></label>
                <label column="2" text="Macro" class="menu" :class="{ active: selectedItem == 2 }" textWrap="true"
                    @tap="selectedItem = 2"></label>
                <label column="3" text="Bancos" class="menu" :class="{ active: selectedItem == 3 }" textWrap="true"
                    @tap="selectedItem = 3"></label>
                <label column="4" text="Commodities" class="menu" :class="{ active: selectedItem == 4 }" textWrap="true"
                    @tap="selectedItem = 4"></label>
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
            <IndicatorsPage :type="selectedItem"></IndicatorsPage>
        </GridLayout>
    </StackLayout>
</template>

<script>
import IndicatorsPage from '../pages/IndicatorsPage.vue';
export default {
    data() {
        return {
            selectedItem: 0
        };
    },
    components: { IndicatorsPage }
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