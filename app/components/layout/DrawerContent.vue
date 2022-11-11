<template lang="html">
	<GridLayout rows="auto, *" class="nt-drawer__content" background-color="#fff">
		<StackLayout orientation="horizontal" class="draw-superior nt-drawer__header">
			<!-- <Image class="nt-drawer__header-image fas t-36" src.decode="font://&#xf2bd;"/>
            <Label class="nt-drawer__header-brand" text="User Name"/> -->
			<Image src="~/assets/icons/usuario.png" width="12" class="user-icon" verticalAlignment="center" />
			<Label class="user-mail" text="username@mail.com" />
			<Image src="~/assets/icons/down_black.png" width="10" class="arrow-down" verticalAlignment="center" />
		</StackLayout>
		<ScrollView row="1" class="nt-drawer__body">
			<StackLayout class="draw-inf">
				<!-- <GridLayout columns="auto, *"
					:class="'nt-drawer__list-item' + (selectedPage === 'Search' ? ' -selected': '')"
					@tap="onNavigationItemTap(Search)">
					<Label col="0" text.decode="&#xf015;" class="nt-icon fas" />
					<Label col="1" text="Home" class="p-r-10" />
			</GridLayout> -->
				<Label class="head-draw" text="NOTICIAS" />
				<Label class="item-draw" text="FINANZAS" @tap="goToSection(6,'SECTION')" />
				<Label class="item-draw" text="ECONOMÍA" @tap="goToSection(3,'SECTION')" />
				<Label class="item-draw" text="EMPRESAS" @tap="goToSection(5,'SECTION')" />
				<Label class="item-draw" text="OCIO" @tap="goToSection(15,'SECTION')" />
				<Label class="item-draw" text="GLOBOECONOMÍA" @tap="goToSection(14,'SECTION')" />
				<Label class="item-draw" text="AGRONEGOCIOS" @tap="goToUrl('https://www.agronegocios.co/')"/>
				<Label class="item-draw" text="ANÁLISIS" @tap="goToSection(0,'ANALYSIS')"/>
				<Label class="item-draw" text="CAJA FUERTE" @tap="goToSection(12,'SECTION')" />
				<Label class="head-draw" text="LR MÁS" />
				<Label class="item-draw" text="MI SELECCIÓN DE NOTICIAS" @tap="goToSection(1,'LRMAS')"/>
				<!-- <Label class="item-draw" text="BITÁCORA EMPRESARIAL 10.000 LR"/> -->
				<!-- <Label class="item-draw" text="CENTRO DE CONVENCIONES"/> -->
				<Label class="item-draw" text="KIOSKO" @tap="goToSection(2,'LRMAS')"/>
				<Label class="item-draw" text="TINTA DIGITAL" @tap="goToSection(3,'LRMAS')"/>
				<Label class="item-draw" text="BIBLIOTECA PERSONAL" @tap="goToSection(4,'LRMAS')" />
				<Label class="item-draw" text="NOTIFICACIONES Y ALERTAS" @tap="goToSection(5,'LRMAS')" />
				<Label class="head-draw" text="CONTÁCTENOS" />
				<Label class="item-draw inferior" text="ESCRÍBANOS" />
				<Label class="item-description" text="Envie sus preguntas, comentarios o sugerencias" textWrap="true" />
				<Label class="head-draw" text="OTROS" />
				<Label class="item-draw" text="Sobre la aplicación" />
				<Label class="item-draw" text="Ver intro" />
				<Label class="item-draw" text="Aviso de privacidad" />
				<Label class="item-draw" text="Términos y condiciones" />
				<Label class="item-draw" text="Política de Tratamiento de información" />
				<Label class="item-draw" text="Superintendencia de Industria y Comercio" />
			</StackLayout>
		</ScrollView>
	</GridLayout>
</template>
<script>
import Main from "./Main.vue";
import * as utils from "~/shared/utils";
import { SelectedPageService } from "~/shared/selected-page-service";
import Section from "../pages/Section.vue";
import Editorial from "../pages/Editorial.vue";
import Search from "../pages/Search.vue";
import SectionLoader from "./SectionLoader.vue";

export default {
	mounted() {
		SelectedPageService.getInstance().selectedPage$
			.subscribe((selectedPage) => this.selectedPage = selectedPage);
	},
	data() {
		return {
			Main: Main,
			selectedPage: "",
			Section: Section,
			Editorial: Editorial,
			Search: Search,
			SectionLoader: SectionLoader
		};
	},
	components: {
		Main,
		Section,
		Editorial,
		Search
	},
	methods: {
		onNavigationItemTap(component) {
			this.$navigateTo(component, {

				// props: {
				// 	req: {
				// 		id: 12,
				// 		type: 'SECTION'
				// 	}
				// }
			}).catch(error => console.log(error));
			utils.closeDrawer();
		},
		goToSection(id, ptype) {
			// console.log("gotosection: " + id)
			this.$navigateTo(SectionLoader, {

				transition: {
					name: "slideLeft",
					duration: 100,
					curve: "easeIn"
				},
				props: {
					req: {
						id: id,
						type: ptype
					}
				}
			}).catch(error => console.log(error));
			utils.closeDrawer();
		},
		goToUrl(url){
			openUrl(url);
		}
	}
};
</script>
<style scoped lang="scss">
// Start custom common variables
@import '@nativescript/theme/scss/variables/blue';
// End custom common variables

// Custom styles
.draw-superior {
	background-color: #F5F4F6;
	padding: 0;
	height: 121px;
}

.user-icon {
	margin-left: 44px;
	width: 10%;
}

.user-mail {
	color: #000000;
	font-size: 14px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	line-height: 19px;
	width: 78%;
	margin-left: 0;
	text-align: left;
	padding-left: 18px;
}

.arrow-down {
	text-align: right;
	width: 10%;
	margin-right: 28px;
}

.draw-inf {
	padding: 29px 44px;
}

.head-draw {
	font: normal normal bold 14px/19px Montserrat;
	color: #000000;
	border-color: #C2C2C2;
	border-width: 0 0 1 0;
	padding-bottom: 14px;
	margin-top: 39px;
}

.item-draw {
	color: #000000;
	padding-left: 43px;
	font-size: 10px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	line-height: 19px;
	margin: 30px 0 30px;
}

.inferior {
	margin: 30px 0 0;
}

.item-description {
	color: #C2C2C2;
	padding-left: 43px;
	font-size: 11px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	margin: 0 0 30px;
}
</style>
