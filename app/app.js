import Vue from 'nativescript-vue';
import NSVueLifecycleHooks from 'nativescript-vue-lifecycle-hooks';
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue';
import BottomNavigation from '@nativescript-community/ui-material-bottom-navigation/vue';
import TabsPlugin from '@nativescript-community/ui-material-tabs/vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import  Vuex  from "vuex";
import authStore from './store/auth/index';
import lrgql from './store/lrgql';


import { ApplicationSettings } from '@nativescript/core';

import RadChart from 'nativescript-ui-chart/vue';

Vue.use(RadChart);
// Vue.use(RadCartesianChart);


Vue.use(RadSideDrawer)
Vue.use(BottomNavigation);
Vue.use(TabsPlugin);
Vue.use(VueApollo);
Vue.use(Vuex);
Vue.use(NSVueLifecycleHooks)
// Vue.use(authStore);


import App from './components/App'
import { RadCartesianChart } from 'nativescript-ui-chart';
import lrmasgql from './store/lrmasgql';

const store = new Vuex.Store({
  modules:{
    auth: authStore,
    lrgql: lrgql,
    lrmasgql: lrmasgql
  }
  // state(){
  //   return {
  //     accessToken: '1234567',
  //     refreshToken: '',
  //     accessTokenExpiration: '',
  //     refreshTokenExpiration: '',
  //     idTokenExpiration: ''
  //   }
  // },
  // getters: {
  //   getToken(state){
  //     return state.accessToken;
  //   }
  // }
})

var auth_service_1 = require("./auth-service");
auth_service_1.configureOAuthProviders();

// Vue.config.silent = !__DEV__


const defaultClient = new ApolloClient({
  //  cache,
    uri: 'https://gql.lalr.co/gql'
  })

const marketClient = new ApolloClient({
  uri: 'https://gql.lalr.co/gqlq',

})

const lrmasClient = new ApolloClient({
  uri: 'https://gql.lalr.co/gqlp',
  headers: {
    Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJuX2Q4Y3BlU2c4WENobjI2ZC1BY09FRGJ0TGktenJVZEZOc1NGQ3FuZzZnIn0.eyJleHAiOjE2NjE0NjkwOTAsImlhdCI6MTY2MTQ0NzQ5MCwiYXV0aF90aW1lIjoxNjYxNDQ3NDg2LCJqdGkiOiIxNDRmY2E1NS01YmViLTQ0NmMtYWZkOS1iNGQwOTE4MDc3NDciLCJpc3MiOiJodHRwczovL2F1dGgubGFsci5jby9yZWFsbXMvTFIiLCJhdWQiOlsibHJqcyIsImFjY291bnQiXSwic3ViIjoiMWQwMzE3ODItMGZkZS00N2MzLTg3NWQtZGFiNGYzZWFiOGQ5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibHJqcyIsIm5vbmNlIjoiMjgxNzZkYjQtMGQ3MC00ZmZiLTg2YWQtN2FjMDNmMTdlZGMzIiwic2Vzc2lvbl9zdGF0ZSI6ImUxMTY4YzJjLWRlNDAtNDYwMS04ZjdmLTcwMjM3ZDdkNjU1MyIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL3d3dy5hZ3JvbmVnb2Npb3MuY28iLCJodHRwOi8vMTAuNTAuMTEwLjIwOjMwMDAiLCJodHRwczovL3d3dy5hc3VudG9zbGVnYWxlcy5jb20uY28iLCJodHRwczovL3d3dy5sYXJlcHVibGljYS5jbyIsImh0dHBzOi8vbWFzLmxhcmVwdWJsaWNhLmNvIiwiaHR0cDovLzEwLjUwLjExMC4yMjozMDAwIiwiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiaHR0cDovLzEwLjUwLjExMC4yMTozMDAwIl0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGxyLWpzIGVtYWlsIiwic2lkIjoiZTExNjhjMmMtZGU0MC00NjAxLThmN2YtNzAyMzdkN2Q2NTUzIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInJvbGVzIjpbInN1YnNjcmliZXIiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl0sIm5hbWUiOiJqdWFuIGhvcnRhIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiamRhbmllbGhvcnRhQGdtYWlsLmNvbSIsImdpdmVuX25hbWUiOiJqdWFuIiwiZmFtaWx5X25hbWUiOiJob3J0YSIsImVtYWlsIjoiamRhbmllbGhvcnRhQGdtYWlsLmNvbSJ9.fczMs5ZH8PfU8S58zV5T25PMXw4Kd8B5CbFrp4VjTqjlcn2unrjmx-Tbfbo8RRa4eJfMqRMaUuuBZqPxKuv5-n3WY6krMAx241ltiqIE_BmjW7mQJJnxKawAt7Ow4sjMPFf2hY-OHZVDdrowTUHRv1mdS72i37CXskHmHNsF6R7sv8l1HUW_ZPoqd-vkQJa2JyvM3gNIC9OUjxCaqd9JDxFd58Z8V3ySikcZooKt9do4gNtIIDAbffu2QetMl2BKzNQoa0A0Ko9-iIt6ymBghyVQKRIZO6BjfPRQcDoVWGwQoPJxGaolM9bLGRpLclhO8FgT2deVA1rAnp1ld6C_AQ"
  }
})

const apolloProvider = new VueApollo({
  clients:{
  defaultClient,
  marketClient,
  lrmasClient,
  },
  defaultClient:defaultClient
})

new Vue({
  apolloProvider,
  store: store,
  render: h => h(App)
}).$start()
