<template>	
	<StackLayout>
		<ScrollView orientation="horizontal" height="76" class="enterprise-gral">
			<GridLayout columns="auto auto auto auto auto auto auto auto auto">
				<label column="0" text="Noticias" class="enterprise-menu enterprise-active" textWrap="true"></label>
				<label column="1" text="Nuevo en la oficina" class="enterprise-menu" textWrap="true"></label>
				<label column="2" text="Indicadores" class="enterprise-menu" textWrap="true"></label>
				<label column="3" text="Todos" class="enterprise-menu" textWrap="true"></label>
				<label column="4" text="Comment LR" class="enterprise-menu" textWrap="true"></label>
				<label column="5" text="Datos cocteleros" class="enterprise-menu" textWrap="true"></label>
				<label column="6" text="Mercado cambiario" class="enterprise-menu" textWrap="true"></label>
				<label column="7" text="Macro" class="enterprise-menu" textWrap="true"></label>
				<label column="8" text="Bancos" class="enterprise-menu" textWrap="true"></label>
			</GridLayout>
		</ScrollView>
		<GridLayout>
			<Section v-if="selectedItem == 0" sect="5"></Section>
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
};
</script>

<style scoped>
.enterprise-gral {
	margin: 0 6px;
}
.enterprise-menu {
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

.enterprise-active {
	color: #C51A1B;
	background-color: #EEEEEE;
	border-color: #EAEAEA;
}
</style>