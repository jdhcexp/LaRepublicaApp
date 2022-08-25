<template>
<StackLayout>
<label text="MI SELECCIÓN DE NOTICIAS"></label>
<label text="Vea las noticias personalizadas de acuerdo con su top 20 de los temas de interes"></label>
<label text="Si usted es suscriptor puede"></label>
<button @tap="onLoginTap()">INICIAR SESIÓN.</button>
<label text="o de lo contrario"></label>
<button @tap="onLoginTap()">SUSCRÍBASE AQUÍ</button>
</StackLayout>
</template>

<script>
var auth_service_1 = require("../../auth-service");
  
  export default {
    data() {
      return {
        message: "<!-- Browse page content goes here -->"
      };
    },
    methods: {
      onLoginTap() {
        debugger;
            auth_service_1.tnsOauthLogin("keycloak");
        },
        onLogoutTap() {
            auth_service_1.tnsOauthLogout();
        }
    },
  }
</script>