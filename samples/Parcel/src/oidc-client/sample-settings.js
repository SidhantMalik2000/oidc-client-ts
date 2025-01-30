import { Log, OidcClient } from "../../../../src";

Log.setLogger(console);
Log.setLevel(Log.INFO);

const url = window.location.origin + "/oidc-client";

export const settings = {
    authority: "https://localhost:2713",// my local auth server url
    client_id: "d83d8922-5bd2-4b33-85ef-5d982320bf84",//default client id which is mapped in db for this client and the local redirect url
    redirect_uri: url + "/sample.html",
    post_logout_redirect_uri: url + "/sample.html",
    response_type: "code",
    scope: "openid email profile",

    response_mode: "form_post",

    filterProtocolClaims: true,
};

export { Log, OidcClient };
