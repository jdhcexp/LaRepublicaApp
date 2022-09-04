<template lang="html">
    <GridLayout rows="auto, *" class="nt-drawer__content">
        <StackLayout orientation="horizontal" class="draw-superior nt-drawer__header">
            <!-- <Image class="nt-drawer__header-image fas t-36" src.decode="font://&#xf2bd;"/>
            <Label class="nt-drawer__header-brand" text="User Name"/> -->
			<Image src="~/assets/icons/usuario.png" width="12" class="user-icon" verticalAlignment="center" />
            <Label class="user-mail" text="username@mail.com"/>
			<Image src="~/assets/icons/down_black.png" width="10" class="arrow-down" verticalAlignment="center" />
        </StackLayout>
        <ScrollView row="1" class="nt-drawer__body">
            <StackLayout class="draw-inf">                  
				<Label class="head-draw" text="NOTICIAS"/>
				<Label class="item-draw" text="FINANZAS"/>
				<Label class="item-draw" text="ECONOMÍA"/>
				<Label class="item-draw" text="EMPRESAS"/>
				<Label class="item-draw" text="OCIO"/>
				<Label class="item-draw" text="GLOBOECONOMÍA"/>
				<Label class="item-draw" text="AGRONEGOCIOS"/>
				<Label class="item-draw" text="ANÁLISIS"/>
				<Label class="item-draw" text="CAJA FUERTE"/>
				<Label class="head-draw" text="LR MÁS"/>
				<Label class="item-draw" text="MI SELECCIÓN DE NOTICIAS"/>
				<Label class="item-draw" text="BITÁCORA EMPRESARIAL 10.000 LR"/>
				<Label class="item-draw" text="CENTRO DE CONVENCIONES"/>
				<Label class="item-draw" text="KIOSKO"/>
				<Label class="item-draw" text="TINTA DIGITAL"/>
				<Label class="item-draw" text="BIBLIOTECA PERSONAL"/>
				<Label class="item-draw" text="NOTIFICACIONES Y ALERTAS"/>
				<Label class="head-draw" text="CONTÁCTENOS"/>
				<Label class="item-draw inferior" text="ESCRÍBANOS"/>
				<Label class="item-description" text="Envie sus preguntas, comentarios o sugerencias" textWrap="true"/>
				<Label class="head-draw" text="OTROS"/>
				<Label class="item-draw" text="Sobre la aplicación"/>
				<Label class="item-draw" text="Ver intro"/>
				<Label class="item-draw" text="Aviso de privacidad"/>
				<Label class="item-draw" text="Términos y condiciones"/>
				<Label class="item-draw" text="Política de Tratamiento de información"/>
				<Label class="item-draw" text="Superintendencia de Industria y Comercio"/>         
            </StackLayout>
        </ScrollView>
    </GridLayout>
</template>
<script>
  import Main from "./Main.vue";  
  import * as utils from "~/shared/utils";
  import { SelectedPageService } from "~/shared/selected-page-service";

  export default {
    mounted() {
      SelectedPageService.getInstance().selectedPage$
        .subscribe((selectedPage) => this.selectedPage = selectedPage);
    },
    data() {
      return {
        Main: Main,       
        selectedPage: ""
      };
    },
    components: {
      Main   
    },
    methods: {
      onNavigationItemTap(component) {
        this.$navigateTo(component, {
          clearHistory: true
        });
        utils.closeDrawer();
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