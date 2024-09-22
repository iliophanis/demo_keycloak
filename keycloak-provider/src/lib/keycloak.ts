import Keycloak from 'keycloak-js';
import { AxiosRequestConfig } from 'axios';

export const init = (url: string, realm: string, clientId: string) => {
  const keycloak = new Keycloak({
    url,
    realm,
    clientId,
  });

  // Access Token Lifespan minValidity in seconds
  const minValidity = 5;

  const login = keycloak.login;

  const logout = keycloak.logout;

  const getToken = () => keycloak.token;

  const getTokenParsed = () => keycloak.tokenParsed;

  const isAuthenticated = () => keycloak.authenticated;

  const updateToken = (
    successCb: (
      value: boolean
    ) => boolean | PromiseLike<boolean> | AxiosRequestConfig
  ) => keycloak.updateToken(minValidity).then(successCb).catch(login);

  const isTokenExpired = () => keycloak.isTokenExpired(minValidity);

  const getClaim = (claim: string) => keycloak.tokenParsed?.[claim];

  const getRoles = (): Array<{
    role: string;
    permissions: string[];
  }> => keycloak.tokenParsed?.['x_compliance_roles'] ?? [];

  const hasPermission = (permission: string) => {
    const roles_permissions = getRoles();

    return roles_permissions?.some((role_perm) => {
      return role_perm.permissions.includes(permission);
    });
  };

  return {
    keycloak,
    login,
    logout,
    getToken,
    getTokenParsed,
    isAuthenticated,
    updateToken,
    isTokenExpired,
    getClaim,
    getRoles,
    hasPermission,
  };
};

export default init;
