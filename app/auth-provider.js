export class TnsOaProviderKeycloak {
    constructor(options,keycloakbaseurl,realm) {
        this.openIdSupport = "oid-none";
        this.providerType = "keycloak";
        this.authority = keycloakbaseurl;
        this.tokenEndpointBase = keycloakbaseurl;
        this.authorizeEndpoint = '/realms/'+realm+'/protocol/openid-connect/auth';
        this.tokenEndpoint = '/realms/'+realm+'/protocol/openid-connect/token';
        this.cookieDomains = [realm];
        this.options = options;
    }
    parseTokenResult(jsonData) {
        return jsonData;
    }
}