"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_oauth2_1 = require("nativescript-oauth2");
var providers_1 = require("./auth-provider");
var oauthUtils = require("nativescript-oauth2/tns-oauth-utils");
var client = null;
var utils = null;

function configureOAuthProviders() {

    var keycloakProvider = configureOAuthProviderKeycloak();
    nativescript_oauth2_1.configureTnsOAuth([keycloakProvider]);
}
exports.configureOAuthProviders = configureOAuthProviders;

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



async function tnsOauthLogin(providerType) {
    // client = new nativescript_oauth2_1.TnsOAuthClient(providerType);
    let url = oauthUtils.getAuthUrlStr(providerType,false);
    console.log("URL GENERADA: ")
    console.log(url);
    // client.loginWithCompletion(function (tokenResult, error) {
    //     console.log(tokenResult);
    //     if (error) {
    //         console.error("back to main page with error: ");
    //         console.error(error);
    //         return error;
    //     }
    //     else {
    //         console.log("back to main page with access token: ");
    //         // console.log(tokenResult);
    //         return tokenResult;
    //     }
    // });
}


exports.tnsOauthLogin = tnsOauthLogin;
function tnsOauthLogout() {
    if (client) {
        client.logout();
    }
}
exports.tnsOauthLogout = tnsOauthLogout;
