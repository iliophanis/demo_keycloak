FROM node:18 as keycloakify_jar_builder

RUN apt-get update && \
    apt-get install -y openjdk-17-jdk openjdk-17-jre && \
    apt-get install -y maven;

COPY ./keycloakify-starter/package.json ./keycloakify-starter/yarn.lock /opt/app/

WORKDIR /opt/app

RUN yarn install --frozen-lockfile

COPY ./keycloakify-starter/ /opt/app/

RUN yarn build-keycloak-theme

FROM quay.io/keycloak/keycloak:latest as builder

WORKDIR /opt/keycloak

COPY --from=keycloakify_jar_builder /opt/app/dist_keycloak/keycloak-theme-for-kc-22-and-above.jar /opt/keycloak/providers/
RUN /opt/keycloak/bin/kc.sh build


FROM quay.io/keycloak/keycloak:latest
COPY --from=builder /opt/keycloak/ /opt/keycloak/
ENV KC_HOSTNAME=localhost
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev"]