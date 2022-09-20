<template>
    <GridLayout>
  
      <StackLayout>
  
        <login-module v-if="!checktok" type="lrmas"></login-module>
      </StackLayout>
  
      <MyNewsTabMenu v-if="checktok"></MyNewsTabMenu>
    </GridLayout>
  
  </template>
  
  <script>
  
  
  
  import gql from 'graphql-tag';
  import LoginModule from '../../modules/LoginModule.vue';
  import MyNewsTabMenu from '../../layout/MyNewsTabMenu.vue'
  import { ApplicationSettings } from '@nativescript/core';
  
  
  
  export default {
  
  
    computed: {
  
      getToken() {
        return this.$store.getters["auth/getToken"]
      },
      checktok() {
      
        return this.getToken != '';
      }
    },
    methods: {
      showinfo() {
        console.log(ApplicationSettings.getString('token'));
      }
    },
    components: { LoginModule, MyNewsTabMenu },
    beforeMount() {
      
      this.$store.dispatch('auth/chargeToken');
      if (this.checktok) {
        this.$store.dispatch('lrmasgql/getTopicsInfo');
      }
    },
    watch:{
      getToken (newVal, oldVal) {    
        this.$store.dispatch('lrmasgql/getTopicsInfo');
      }
    }
  
  }
  </script>