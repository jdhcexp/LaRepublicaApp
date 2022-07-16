import Vue from 'nativescript-vue'
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue'
import BottomNavigation from '@nativescript-community/ui-material-bottom-navigation/vue';
import TabsPlugin from '@nativescript-community/ui-material-tabs/vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

Vue.use(RadSideDrawer)
Vue.use(BottomNavigation);
Vue.use(TabsPlugin);
Vue.use(VueApollo);

import App from './components/App'

Vue.config.silent = !__DEV__


const defaultClient = new ApolloClient({
  //  cache,
    uri: 'https://gql.lalr.co/gql'
  })

const apolloProvider = new VueApollo({
  defaultClient,
})

new Vue({
  apolloProvider,
  render: h => h(App)
}).$start()
