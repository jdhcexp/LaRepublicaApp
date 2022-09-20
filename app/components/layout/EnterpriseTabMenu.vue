<template>	
	<StackLayout>
		<ScrollView orientation="horizontal" height="68" class="enterprise-gral">
			<GridLayout columns="auto auto auto">
				<label column="0" text="Noticias" class="menu" :class="{active: selectedItem == 0}" textWrap="true" @tap="selectedItem = 0"></label>
				<label column="1" text="Nuevo en la oficina" class="menu" :class="{active: selectedItem == 1}" textWrap="true" @tap="selectedItem = 1"></label>
				<!-- <label column="2" text="Indicadores" class="menu" :class="{active: selectedItem == 2}" textWrap="true" @tap="selectedItem = 2"></label> -->
				<!-- <label column="3" text="Todos" class="enterprise-menu" textWrap="true"></label>
				<label column="4" text="Comment LR" class="enterprise-menu" textWrap="true"></label>
				<label column="5" text="Datos cocteleros" class="enterprise-menu" textWrap="true"></label>
				<label column="6" text="Mercado cambiario" class="enterprise-menu" textWrap="true"></label>
				<label column="7" text="Macro" class="enterprise-menu" textWrap="true"></label>
				<label column="8" text="Bancos" class="enterprise-menu" textWrap="true"></label> -->
			</GridLayout>
		</ScrollView>
		<GridLayout>
			<Section v-if="selectedItem == 0" :req="request"></Section>
			<NewInOffice v-if="selectedItem == 1"></NewInOffice>
			<IndicatorsPage v-if="selectedItem == 2"></IndicatorsPage>
		</GridLayout>
	</StackLayout>	
</template>

<script>
 import Section from "../pages/Section";
   import NewInOffice from "../pages/NewInOffice";
    import IndicatorsPage from "../pages/IndicatorsPage";
export default {
  components: {
            Section,
            NewInOffice,
            IndicatorsPage
        },
  data() {
    return {
      selectedItem: 0,
    };
  },
  computed:{
	request(){
		return {
			id:5,
			type:"SECTION"
		}
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