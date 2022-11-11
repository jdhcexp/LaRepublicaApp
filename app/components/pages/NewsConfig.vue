<template>
<ScrollView>
  <ListView for="country in countries" @itemTap="onItemTap" backgroundColor="#fff">
                    <v-template>
                        <FlexboxLayout flexDirection="row">

                            <Label :text="country.name" class="t-12 configItem"
                                style="width: 80%" />
                            <Switch checked="true" />
                        </FlexboxLayout>
                    </v-template>
                </ListView>
                </ScrollView>
</template>

<script>
    export default {
        methods: {
            onItemTap: function(args) {
                console.log("Item with index: " + args.index + " tapped");
            }
        },

        data() {
            return {
                countries: [{
                        name: "Ultima hora",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png"
                    },
                    {
                        name: "Economia",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png"
                    },
                    {
                        name: "Empresas",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png"
                    },
                    {
                        name: "Finanzas",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png"
                    },
                    {
                        name: "Globoeconomia",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png"
                    },
                    {
                        name: "Analisis",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png"
                    },
                    {
                        name: "Ocio",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png"
                    },
                    {
                        name: "Finanzas personales",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png"
                    },
                    {
                        name: "Alta Gerencia",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png"
                    },
                    {
                        name: "Responsabilidad Social",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png"
                    },
                    {
                        name: "Infraestructura",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png"
                    },
                    {
                        name: "Internet Economy",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png"
                    },
                    {
                        name: "Salud Ejecutiva",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png"
                    },
                    {
                        name: "Consumo",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png"
                    },
                    {
                        name: "Especiales",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png"
                    },
                    {
                        name: "Caja Fuerte",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png"
                    },
                    {
                        name: "Comunidad Empresarial",
                        imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png"
                    }
                ]
            };
        }
    };
</script>

<style scoped>
.configItem{
    color: black;
}
</style>
