

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
          // console.log(tokenResult);
          // return tokenResult;
          context.commit('saveToken', tokenResult.accessToken);
      }
  });
    // auth_service_1.tnsOauthLogin("keycloak").then (x => {
    //   console.log("this is x:")
    //   console.log(x);
    //   context.commit('saveToken', x.accesToken);
    // });
    
    // var auth_service_1 = require("../../auth-service");
    // const providerType = payload;
    // // context.commit('saveToken', providerType);
    // client = new auth_service_1.nativescript_oauth2_1.TnsOAuthClient(providerType);
    // client.loginWithCompletion(function (tokenResult, error) {
    //   console.log(tokenResult);
    //   if (error) {
    //     console.error("back to main page with error: ");
    //     console.error(error);        
    //   }
    //   else {
    //     console.log("back to main page with access token: ");
    //     console.log(tokenResult);
    //     context.commit('saveToken', tokenResult.accesToken);
    //   }
    // })
  }
}