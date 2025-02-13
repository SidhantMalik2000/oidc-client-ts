import { Log, OidcClient } from "../../../../src";

Log.setLogger(console);
Log.setLevel(Log.INFO);

const url = window.location.origin + "/oidc-client";

export const settings = {
    authority: "https://devapi.surya-products.com/surya-auth-dev",
    client_id: "d83d8922-5bd2-4b33-85ef-5d982320bf84",
    redirect_uri: url + "/sample.html",
    post_logout_redirect_uri: url + "/sample.html",
    response_type: "code",
    scope: "openid email profile",

    response_mode: "query",

    filterProtocolClaims: true,
    monitorSession: true,
    validateSubOnSilentRenew: true,
};

export { Log, OidcClient };
