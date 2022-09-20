import { ApplicationSettings } from "@nativescript/core";


export default {
  saveToken(context, payload) {
    var nativescript_oauth2_1 = require("nativescript-oauth2");
    var auth_service_1 = require("../../auth-service");
    var client = new nativescript_oauth2_1.TnsOAuthClient(payload);
    client.loginWithCompletion(function (tokenResult, error) {
      console.log(tokenResult);
      if (error) {
          console.error("back to main page with error: ");
          console.error(error);
          
      }
      else {
          console.log("back to main page with access token: ");
          console.log(tokenResult.accessToken)
          ApplicationSettings.setString("token", tokenResult.accessToken);
          context.commit('saveToken', tokenResult.accessToken);
      }
  });
   
  },

  chargeToken(context){    
      context.commit('saveToken', ApplicationSettings.getString("token",""));    
  }

}