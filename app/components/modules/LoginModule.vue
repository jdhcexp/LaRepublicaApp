<template>
    <StackLayout>
      <label text="MI SELECCIÓN DE NOTICIAS"></label>
<label text="Vea las noticias personalizadas de acuerdo con su top 20 de los temas de interes"></label>
    
    <label text="Si usted es suscriptor puede"></label>
    <button @tap="onLoginTap()">INICIAR SESIÓN.</button>
    <label text="o de lo contrario"></label>
    <button @tap="onLogoutTap()">SUSCRÍBASE AQUÍ</button>
    <label :text="getToken"></label>
    </StackLayout>
    </template>
    
    <script>
    // var auth_service_1 = require("../../auth-service");
    
   
    
      export default {   
       
        computed:{
          getToken(){
            return this.$store.getters['auth/getToken'];
          }
        },
        
        methods: {
          onLoginTap() {
                this.$store.dispatch('auth/saveToken', 'keycloak')                      
            },
         onLogoutTap(){

         }
        }
      }
    </script>