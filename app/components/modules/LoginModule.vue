<template>
    <StackLayout background-color="#fff">
		<Image src="~/assets/icons/noticias_gray.png" width="85" class="logo-news" />
    	<label :text="getTitle" class="title-news"></label>
    	<label :text="getSubtitle" class="description-news" textWrap="true"></label>
		<StackLayout class="login-box">
			<label text="Si usted es suscriptor puede" class="instruction"></label>
			<button class="btn-iniciar" @tap="onLoginTap()">INICIAR SESIÓN</button>
			<label text="o de lo contrario" class="instruction"></label>
			<button @tap="onSubscribeTap()" class="btn-subscribe">SUSCRÍBASE AQUÍ</button>
			<label :text="getToken"></label>
		</StackLayout>
	</StackLayout>
</template>
<script>
    // var auth_service_1 = require("../../auth-service");
    import { ApplicationSettings } from '@nativescript/core';
import { openUrl } from '@nativescript/core/utils';

    export default {
		data() {
			return {
				titles:{
					news: "MI SELECCIÓN DE NOTICIAS",
					lrmas: "Bienvenido a LR Más",
					ink: "TINTA DIGITAL",
					kiosko: "KIOSKO"
				},
				subtitles:{
					news: "Vea las noticias personalizadas, de acuerdo con su top 20 de los temas de interés.",
					lrmas: "Esta es la plataforma de beneficios exculsivos para nuestros suscriptores, donde encontrará contenidos oportunos y relevantes para tomar decisiones empresariales, financieras y económicas acertadas.",
					ink:"Acceda en formato electrónico a la réplica fiel de principio a fin de nuestras publicaciones impresas. Textos, imágenes, publicidad.",
					kiosko:"Seleccione y lea mas de 300 libros y revistas de actualidad, en un amplio espectro de temas de interés a nivel mudial, seleccionados exclusivamente para usted, en alianza con OverDrive."
				},
				title:null,
				subtitle:null
			}
		},
		props:['type'],
      computed: {
        getToken() {
          return ApplicationSettings.getString('token');
        },
		getTitle() {
			return this.titles[this.type]
		},
		getSubtitle() {
			return this.subtitles[this.type]
		}

      },

      methods: {
        onLoginTap() {
          this.$store.dispatch('auth/saveToken', 'keycloak')
        },
        onLogoutTap() {

        },
		onSubscribeTap() {
			openUrl("https://suscripciones.larepublica.co/");
		}
      }
    }
</script>
<style>
	.logo-news {
		text-align: center;
		margin-top: 226px;
	}
	.title-news {
		text-align: center;
		font: normal normal bold 19px/25px Montserrat;
		color: #000000;
		margin-top: 52px;
	}
	.description-news {
		text-align: center;
		font-size: 13px;
  		font-family: 'Montserrat', sans-serif;
  		font-weight: 400;
		color: #000000;
		margin: 22px 106px;
	}
	.login-box {
		border-color: #EEEEEE;
  		border-width: 1 1 1 1;
		margin: 78px 106px;
		padding: 58px 52px;
	}
	.instruction {
		text-align: center;
		font-size: 13px;
  		font-family: 'Montserrat', sans-serif;
  		font-weight: 400;
		color: #000000;
	}
	.btn-iniciar {
		border-color: #000000;
  		border-width: 1 1 1 1;
		background-color: #EEEEEE;
		font: normal normal bold 13px/17px Montserrat;
		color: #000000;
	}
	.btn-subscribe {
		background-color: #C51A1B;
		font: normal normal bold 13px/17px Montserrat;
		color: #FFFFFF;
	}
</style>
