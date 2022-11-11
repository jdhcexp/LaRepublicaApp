import { ApplicationSettings, WebView, GridLayout, Page, NavigationButton, Frame , LoadEventData} from "@nativescript/core";

var providers_1 = require("../../auth-provider");

function configureOAuthProviderKeycloak() {
  var serverurl = 'https://auth.lalr.co';
  var realm = 'LR';
  var keycloakProviderOptions = {
      openIdSupport: "oid-none",
      clientId: "lrjs",
      redirectUri: "http://localhost",
      urlScheme:"lrjs",
      scopes: ["email"]
  };
  var keycloakProvider = new providers_1.TnsOaProviderKeycloak(keycloakProviderOptions, serverurl, realm);
  return keycloakProvider;
}

function createWebViewPage(url) {
  const webView = createWebView(url);
  const grid = new GridLayout();
  grid.addChild(webView);
  const page = new Page();
  page.content = grid;
  if (global.isAndroid) {
      page.actionBarHidden = true;
      page.on("navigatedTo", () => {
          this.setAndroidSoftInputModeToResize();
          webView.android.getSettings().setDomStorageEnabled(true);
          webView.android.getSettings().setBuiltInZoomControls(false);
      });
      page.on("navigatingFrom", () => {
          this.restoreAndroidSoftInputMode();
      });
  }
  else {
      const navBtn = new NavigationButton();
      navBtn.text = "";
      page.actionBar.navigationButton = navBtn;
  }
  // const onCancel = () => {
  //     this.loginController.completeLoginWithTokenResponseError(null, new Error("User cancelled."));
  // };
  // page.on("navigatedFrom", onCancel);

  return page;
}

function createWebView(url) {
  const webView = new WebView();
  let newUA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36";
  webView.on("loadFinished", (args) => {
    if (global.isAndroid) {
      args.object.android.getSettings().setJavaScriptEnabled(true);
      args.object.android.getSettings().setUserAgentString(newUA);
      args.object.android.setWebChromeClient(new MyWebChromeClient());
    }else{
      args.object.ios.customUserAgent = newUA;

    }
  })
  // webView.on("loadStarted", loadStarted);
  // webView.on("loadFinished", loadFinished);
  webView.src = url;
  return webView;
}


function goToWebViewPage(url) {
  Frame.topmost().navigate(() => createWebViewPage(url));
}


export default {
  saveToken(context, payload) {
    var nativescript_oauth2_1 = require("nativescript-oauth2");
    var oauthUtils = require("nativescript-oauth2/tns-oauth-utils");


    var provider = configureOAuthProviderKeycloak()
    var client = new nativescript_oauth2_1.TnsOAuthClient(payload);
    debugger;
    let url = oauthUtils.getAuthUrlStr(provider,false);
    console.log("URL GENERADA: ")
    console.log(url);
    // goToWebViewPage(url);
    client.loginWithCompletion(function (tokenResult, error) {

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
  },



}




