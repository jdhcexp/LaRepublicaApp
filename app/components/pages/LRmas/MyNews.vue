<template>
<GridLayout>
  <StackLayout  v-if="getToken == ''">
<label text="MI SELECCIÓN DE NOTICIAS"></label>
<label text="Vea las noticias personalizadas de acuerdo con su top 20 de los temas de interes"></label>
<login-module></login-module>
</StackLayout>
<my-news-tab-menu v-if="getToken != '' && me && me.news.topics.length > 0" :topics="me.news.topics"></my-news-tab-menu>
</GridLayout>
<!-- <GridLayout> -->
<!-- <my-news-tab-menu v-if="getToken != ''"></my-news-tab-menu> -->
<!-- </GridLayout> -->
</template>

<script>
// var auth_service_1 = require("../../auth-service");


import gql from 'graphql-tag';
import LoginModule from '../../modules/LoginModule.vue';
import MyNewsTabMenu from  '../../layout/MyNewsTabMenu.vue'
  
const ME_QUERY = gql`
query meInfo{
  me {
    favorites{
      id
      postTitle
      post {
        id
      }
    }
    info {
      email
      firstName
      lastName
      isSubscriber
      topicsLimit
      favoritesLimit
    }
    news {
      topics{
        id
        topicName
        topicId
        topicSlug
      }
    }
    notifications{
      newsletterId
      sendTime
      allowSend
      isBanned
      info {
        id
        name
      }
      lastSend
    }
  }
  }
  `;

  export default {

    apollo: {
        $client: "lrmasClient",
        me: {
            query: ME_QUERY,
            context: {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJuX2Q4Y3BlU2c4WENobjI2ZC1BY09FRGJ0TGktenJVZEZOc1NGQ3FuZzZnIn0.eyJleHAiOjE2NjE4OTMxNDUsImlhdCI6MTY2MTg3MTU0NSwiYXV0aF90aW1lIjoxNjYxODY0NTgxLCJqdGkiOiJiNWMwYzM4Yi00NjIzLTQzYTktOTVkMi01OWNlYmY3ZTIyZTUiLCJpc3MiOiJodHRwczovL2F1dGgubGFsci5jby9yZWFsbXMvTFIiLCJhdWQiOlsibHJqcyIsImFjY291bnQiXSwic3ViIjoiMWQwMzE3ODItMGZkZS00N2MzLTg3NWQtZGFiNGYzZWFiOGQ5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibHJqcyIsInNlc3Npb25fc3RhdGUiOiIyZDE3OGM0Yi0zZTA1LTQwNjAtYmY2NS1iYjgyZWY2NWY5YzMiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly93d3cuYWdyb25lZ29jaW9zLmNvIiwiaHR0cDovLzEwLjUwLjExMC4yMDozMDAwIiwiaHR0cHM6Ly93d3cuYXN1bnRvc2xlZ2FsZXMuY29tLmNvIiwiaHR0cHM6Ly93d3cubGFyZXB1YmxpY2EuY28iLCJodHRwczovL21hcy5sYXJlcHVibGljYS5jbyIsImh0dHA6Ly9sb2NhbGhvc3QiLCJodHRwOi8vMTAuNTAuMTEwLjIyOjMwMDAiLCJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJodHRwOi8vMTAuNTAuMTEwLjIxOjMwMDAiXSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBsci1qcyBlbWFpbCIsInNpZCI6IjJkMTc4YzRiLTNlMDUtNDA2MC1iZjY1LWJiODJlZjY1ZjljMyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJyb2xlcyI6WyJzdWJzY3JpYmVyIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdLCJuYW1lIjoianVhbiBob3J0YSIsInByZWZlcnJlZF91c2VybmFtZSI6ImpkYW5pZWxob3J0YUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoianVhbiIsImZhbWlseV9uYW1lIjoiaG9ydGEiLCJlbWFpbCI6ImpkYW5pZWxob3J0YUBnbWFpbC5jb20ifQ.EDHO6oDdibv80HbEvlyt_d0tzlmoGaee3s1PkuAyc5cp9nlk9Ceeg61hPXT3O1faPFCQusCJ34vrFlX70ityDRSfWadVMeqCbBwV3dimLnTBG-FchrD6q-lU-HzPCM-R_2396deEpXazjE6OVQfVSLIC1a1NucACCqYzjojkFr7m3cCKhFMDTTJGa8pOyShKt87-KZnDrai8gCxSSVv9cRTmqCRkJZ-Gi6B9BFVT9KaQp87us3YbGUKUL2naT1L4TT2A6FK7rakRaTJdTUDjTGL7Lfi0Liug6GitTpQpisPWREN5lrUryXi5jS6gZhLJCxXRiTdLQucVZWxtu6LdUw"
                }
            }
        }
    },
    computed: {
        getToken() {
            return this.$store.getters["auth/getToken"];
        }
    },
    methods: {
       
    },
    components: { LoginModule, MyNewsTabMenu }
}
</script>