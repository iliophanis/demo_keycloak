import { ReactKeycloakProvider, useKeycloak } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';

export interface KeycloakProviderProps {
  children: JSX.Element;
  keycloakInstance: Keycloak;
}

function KeycloakProvider({
  children,
  keycloakInstance,
}: KeycloakProviderProps) {
  return (
    <ReactKeycloakProvider
      authClient={keycloakInstance}
      initOptions={{
        onLoad: 'login-required',
        checkLoginIframe: false,
      }}
    >
      {children}
    </ReactKeycloakProvider>
  );
}

export { KeycloakProvider, useKeycloak };

export default KeycloakProvider;
