<template lang="html">
    <GridLayout rows="auto, *" class="nt-drawer__content">
        <StackLayout row="0" class="nt-drawer__header">
            <!-- <Image class="nt-drawer__header-image fas t-36" src.decode="font://&#xf2bd;"/>
            <Label class="nt-drawer__header-brand" text="User Name"/> -->
            <Label class="nt-drawer__header-footnote" text="username@mail.com"/>
        </StackLayout>

        <ScrollView row="1" class="nt-drawer__body">
            <StackLayout>
                <StackLayout>
                    
                    <Label  text="NOTICIAS"/>
                    <Label  text="FINANZAS"/>
                    <Label  text="ECONOMIA"/>
                    <Label  text="EMPRESAS"/>
                    <Label  text="OCIO"/>
                    <Label  text="GLOBOECONOMÍA"/>
                    <Label  text="AGRONEGOCIOS"/>
                    <Label  text="ANÁLISIS"/>
                    <Label  text="CAJA FUERTE"/>
                    <Label  text="LR MÁS"/>
                    <Label  text="MI SELECCIÓN DE NOTICIAS"/>
                    <Label  text="BITÁCORA EMPRESARIAL 10.000 LR"/>
                    <Label  text="CENTRO DE CONVENCIONES"/>
                    <Label  text="KIOSKO"/>
                    <Label  text="TINTA DÍGITAL"/>
                    <Label  text="BIBLIOTECA PERSONAL"/>
                    <Label  text="NOTIFICACIONES Y ALERTAS"/>
                    <Label  text="CONTÁCTENOS"/>
                    <Label  text="ESCRÍBANOS"/>
                    <Label  text="Envie sus preguntas, comentarios o sugerencias"/>
                    <Label  text="OTROS"/>
                    <Label  text="Sobre la aplicacion"/>
                    <Label  text="Ver intro"/>
                    <Label  text="Aviso de privacidad"/>
                    <Label  text="Términos y condiciones"/>
                    <Label  text="Política de Tratamiento de información"/>
                    <Label  text="Superintendencia de Industria y Comercio"/>
                    

                </StackLayout>   

              
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
</style>
