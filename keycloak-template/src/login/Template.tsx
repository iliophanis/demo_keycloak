// Copy pasted from: https://github.com/InseeFrLab/keycloakify/blob/main/src/login/Template.tsx

import { useEffect } from "react";
import { assert } from "keycloakify/tools/assert";
import { clsx } from "keycloakify/tools/clsx";
import { usePrepareTemplate } from "keycloakify/lib/usePrepareTemplate";
import { type TemplateProps } from "keycloakify/login/TemplateProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { KcContext } from "./kcContext";
import type { I18n } from "./i18n";
import fswLogoUrl from "./assets/fsw_logo.jpg";
import { IonGrid, IonRow, IonCol, IonImg, IonTitle, IonHeader, IonToolbar, IonPage, IonSelect, IonSelectOption, IonContent } from "@ionic/react";

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const {
        displayInfo = false,
        displayMessage = true,
        displayRequiredFields = false,
        showAnotherWayIfPresent = true,
        headerNode,
        infoNode = null,
        kcContext,
        i18n,
        doUseDefaultCss,
        classes,
        children
    } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { msg, changeLocale, labelBySupportedLanguageTag, currentLanguageTag } = i18n;

    const { realm, locale, auth, url, message, isAppInitiatedAction } = kcContext;

    const { isReady } = usePrepareTemplate({
        doFetchDefaultThemeResources: doUseDefaultCss,
        styles: [
            `${url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly.min.css`,
            `${url.resourcesCommonPath}/node_modules/patternfly/dist/css/patternfly-additions.min.css`,
            `${url.resourcesCommonPath}/lib/zocial/zocial.css`,
            `${url.resourcesPath}/css/login.css`
        ],
        htmlClassName: kcClsx("kcHtmlClass"),
        bodyClassName: kcClsx("kcBodyClass"),
        htmlLangProperty: locale?.currentLanguageTag,
        documentTitle: i18n.msgStr("loginTitle", kcContext.realm.displayName)
    });

    useEffect(() => {
        console.log(`Value of MY_ENV_VARIABLE on the Keycloak server: "${kcContext.properties.MY_ENV_VARIABLE}"`);
    }, []);

    if (!isReady) {
        return null;
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonGrid>
                        <IonRow className="ion-align-items-center ion-justify-content-between">
                            <IonCol size="auto">
                                <IonImg src={fswLogoUrl} alt="Keycloakify logo" style={{ width: "80px" }} />
                            </IonCol>
                            <IonCol size="auto">
                                <IonTitle size="large" color="light" style={{ fontSize: "24px" }}>
                                    {msg("loginTitleHtml", realm.displayNameHtml)}
                                </IonTitle>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>
            {/* <div className={kcClsx('kcLoginClass')}> */}
            <IonContent>
                <div className={clsx(kcClsx("kcFormCardClass"))}>
                    <header className={kcClsx("kcFormHeaderClass")}>
                        {realm.internationalizationEnabled && (assert(locale !== undefined), true) && locale.supported.length > 1 && (
                            <IonRow>
                                <IonCol offset="10">
                                    <IonSelect
                                        value={currentLanguageTag}
                                        placeholder={labelBySupportedLanguageTag[currentLanguageTag]}
                                        onIonChange={e => changeLocale(e.detail.value)}
                                    >
                                        {locale.supported.map(({ languageTag }) => (
                                            <IonSelectOption key={languageTag} value={languageTag}>
                                                {labelBySupportedLanguageTag[languageTag]}
                                            </IonSelectOption>
                                        ))}
                                    </IonSelect>
                                </IonCol>
                            </IonRow>
                        )}
                        {!(auth !== undefined && auth.showUsername && !auth.showResetCredentials) ? (
                            displayRequiredFields ? (
                                <IonRow className="ion-justify-content-center">
                                    <IonCol size="3">
                                        <div className={kcClsx("kcContentWrapperClass")}>
                                            <div className={clsx(kcClsx("kcLabelWrapperClass"), "subtitle")}>
                                                <span className="subtitle">
                                                    <span className="required">*</span>
                                                    {msg("requiredFields")}
                                                </span>
                                            </div>
                                            <div className="col-md-10">
                                                <h1 id="kc-page-title">{headerNode}</h1>
                                            </div>
                                        </div>
                                    </IonCol>
                                </IonRow>
                            ) : (
                                <IonRow className="ion-justify-content-center">
                                    <IonCol size="3">
                                        <h1 id="kc-page-title">{headerNode}</h1>
                                    </IonCol>
                                </IonRow>
                            )
                        ) : displayRequiredFields ? (
                            <div className={kcClsx("kcContentWrapperClass")}>
                                <div className={clsx(kcClsx("kcLabelWrapperClass"), "subtitle")}>
                                    <span className="subtitle">
                                        <span className="required">*</span> {msg("requiredFields")}
                                    </span>
                                </div>
                                <div className="col-md-10">
                                    <div className={kcClsx("kcFormGroupClass")}>
                                        <div id="kc-username">
                                            <label id="kc-attempted-username">{auth?.attemptedUsername}</label>
                                            <a id="reset-login" href={url.loginRestartFlowUrl}>
                                                <div className="kc-login-tooltip">
                                                    <i className={kcClsx("kcResetFlowIcon")}></i>
                                                    <span className="kc-tooltip-text">{msg("restartLoginTooltip")}</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={kcClsx("kcFormGroupClass")}>
                                    <div id="kc-username">
                                        <label id="kc-attempted-username">{auth?.attemptedUsername}</label>
                                        <a id="reset-login" href={url.loginRestartFlowUrl}>
                                            <div className="kc-login-tooltip">
                                                <i className={kcClsx("kcResetFlowIcon")}></i>
                                                <span className="kc-tooltip-text">{msg("restartLoginTooltip")}</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </>
                        )}
                    </header>
                    <div id="kc-content">
                        <div id="kc-content-wrapper">
                            {/* App-initiated actions should not see warning messages about the need to complete the action during login. */}
                            {displayMessage && message !== undefined && (message.type !== "warning" || !isAppInitiatedAction) && (
                                <div className={clsx("alert", `alert-${message.type}`)}>
                                    {message.type === "success" && <span className={kcClsx("kcFeedbackSuccessIcon")}></span>}
                                    {message.type === "warning" && <span className={kcClsx("kcFeedbackWarningIcon")}></span>}
                                    {message.type === "error" && <span className={kcClsx("kcFeedbackErrorIcon")}></span>}
                                    {message.type === "info" && <span className={kcClsx("kcFeedbackInfoIcon")}></span>}
                                    <span
                                        className="kc-feedback-text"
                                        dangerouslySetInnerHTML={{
                                            __html: message.summary
                                        }}
                                    />
                                </div>
                            )}
                            {children}
                            {auth !== undefined && auth.showTryAnotherWayLink && showAnotherWayIfPresent && (
                                <form id="kc-select-try-another-way-form" action={url.loginAction} method="post">
                                    <div>
                                        <div className={kcClsx("kcFormGroupClass")}>
                                            <input type="hidden" name="tryAnotherWay" value="on" />
                                            <a
                                                href="#"
                                                id="try-another-way"
                                                onClick={() => {
                                                    document.forms["kc-select-try-another-way-form" as never].submit();
                                                    return false;
                                                }}
                                            >
                                                {msg("doTryAnotherWay")}
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            )}
                            {displayInfo && (
                                <IonRow className="ion-justify-content-center">
                                    <IonCol size="3">{infoNode}</IonCol>
                                </IonRow>
                            )}
                        </div>
                    </div>
                </div>
            </IonContent>
            {/* </div> */}
        </IonPage>
    );
}
