import Keycloak from "keycloak-js";
export const keycloak = new Keycloak({
    realm:"demo",
    url:`${process.env.REACT_APP_IDP_URL ?? ""}`,
    clientId:"ippo-backoffice-frontend",
});