import { Log, UserManager } from "../../../../src";

Log.setLogger(console);
Log.setLevel(Log.INFO);

const url = window.location.origin + "/user-manager";

export const settings = {
    authority: "https://localhost:2713",
    client_id: "d83d8922-5bd2-4b33-85ef-5d982320bf84",
    redirect_uri: url + "/sample.html",
    post_logout_redirect_uri: url + "/sample.html",
    response_type: "code",
    scope: "openid email profile",

    response_mode: "form_post",

    popup_redirect_uri: url + "/sample-popup-signin.html",
    popup_post_logout_redirect_uri: url + "/sample-popup-signout.html",

    silent_redirect_uri: url + "/sample-silent.html",
    automaticSilentRenew: true,
    //silentRequestTimeout: 10000,

    filterProtocolClaims: true,
};

export { Log, UserManager };
