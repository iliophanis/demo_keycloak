import { useState } from "react";
import { clsx } from "keycloakify/tools/clsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { IonButton, IonCol, IonGrid, IonInput, IonInputPasswordToggle, IonRow } from "@ionic/react";

export default function Login(props: PageProps<Extract<KcContext, { pageId: "login.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { social, realm, url, usernameHidden, login, auth, registrationDisabled, messagesPerField } = kcContext;

    const { msg, msgStr } = i18n;

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={!messagesPerField.existsError("username", "password")}
            headerNode={msg("loginAccountTitle")}
            displayInfo={realm.password && realm.registrationAllowed && !registrationDisabled}
            infoNode={
                <div id="kc-registration-container">
                    <div id="kc-registration">
                        <span>
                            {msg("noAccount")}{" "}
                            <a tabIndex={8} href={url.registrationUrl}>
                                {msg("doRegister")}
                            </a>
                        </span>
                    </div>
                </div>
            }
            socialProvidersNode={
                <>
                    {realm.password && social!.providers?.length && (
                        <div id="kc-social-providers" className={kcClsx("kcFormSocialAccountSectionClass")}>
                            <hr />
                            <h2>{msg("identity-provider-login-label")}</h2>
                            <ul
                                className={kcClsx("kcFormSocialAccountListClass", social!.providers.length > 3 && "kcFormSocialAccountListGridClass")}
                            >
                                {social!.providers.map((...[p, , providers]) => (
                                    <li key={p.alias}>
                                        <a
                                            id={`social-${p.alias}`}
                                            className={kcClsx(
                                                "kcFormSocialAccountListButtonClass",
                                                providers.length > 3 && "kcFormSocialAccountGridItem"
                                            )}
                                            type="button"
                                            href={p.loginUrl}
                                        >
                                            {p.iconClasses && <i className={clsx(kcClsx("kcCommonLogoIdP"), p.iconClasses)} aria-hidden="true"></i>}
                                            <span className={clsx(kcClsx("kcFormSocialAccountNameClass"), p.iconClasses && "kc-social-icon-text")}>
                                                {p.displayName}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            }
        >
            <div id="kc-form">
                <div id="kc-form-wrapper">
                    {realm.password && (
                        <form
                            id="kc-form-login"
                            onSubmit={() => {
                                setIsLoginButtonDisabled(true);
                                return true;
                            }}
                            action={url.loginAction}
                            method="post"
                        >
                            <IonGrid>
                                <IonRow>
                                    <IonCol>
                                        <IonInput
                                            className={`${!messagesPerField.existsError("username", "password") && "ion-valid"} ${messagesPerField.existsError("username", "password") === false && "ion-invalid"}`}
                                            label={
                                                !realm.loginWithEmailAllowed
                                                    ? msgStr("username")
                                                    : !realm.registrationEmailAsUsername
                                                      ? msgStr("usernameOrEmail")
                                                      : msgStr("email")
                                            }
                                            id="usename"
                                            name="username"
                                            labelPlacement="stacked"
                                            type="text"
                                            autoFocus
                                            autocomplete="username"
                                            fill="outline"
                                            placeholder="Enter username"
                                            tabIndex={2}
                                            defaultValue={login.username ?? ""}
                                            aria-invalid={messagesPerField.existsError("username", "password")}
                                            errorText={messagesPerField.getFirstError("username", "password")}
                                        ></IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <IonInput
                                            className={`${!(usernameHidden && messagesPerField.existsError("username", "password")) && "ion-valid"} ${(usernameHidden && messagesPerField.existsError("username", "password")) === false && "ion-invalid"}`}
                                            tabIndex={3}
                                            id="password"
                                            name="password"
                                            type="password"
                                            labelPlacement="stacked"
                                            fill="outline"
                                            label={msgStr("password")}
                                            placeholder="Enter password"
                                            aria-invalid={messagesPerField.existsError("username", "password")}
                                            errorText={messagesPerField.getFirstError("username", "password")}
                                        >
                                            <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
                                        </IonInput>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <input type="hidden" id="id-hidden-input" name="credentialId" value={auth.selectedCredential} />
                                        <IonButton
                                            tabIndex={7}
                                            disabled={isLoginButtonDisabled}
                                            fill="outline"
                                            expand="block"
                                            id="kc-login"
                                            type="submit"
                                        >
                                            {msgStr("doLogIn")}
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </form>
                    )}
                </div>
            </div>
        </Template>
    );
}

// function PasswordWrapper(props: { kcClsx: KcClsx; i18n: I18n; passwordInputId: string; children: JSX.Element }) {
//     const { kcClsx, i18n, passwordInputId, children } = props;

//     const { msgStr } = i18n;

//     const [isPasswordRevealed, toggleIsPasswordRevealed] = useReducer((isPasswordRevealed: boolean) => !isPasswordRevealed, false);

//     useEffect(() => {
//         const passwordInputElement = document.getElementById(passwordInputId);

//         assert(passwordInputElement instanceof HTMLInputElement);

//         passwordInputElement.type = isPasswordRevealed ? "text" : "password";
//     }, [isPasswordRevealed]);

//     return (
//         <div className={kcClsx("kcInputGroup")}>
//             {children}
//             <button
//                 type="button"
//                 className={kcClsx("kcFormPasswordVisibilityButtonClass")}
//                 aria-label={msgStr(isPasswordRevealed ? "hidePassword" : "showPassword")}
//                 aria-controls={passwordInputId}
//                 onClick={toggleIsPasswordRevealed}
//             >
//                 <i className={kcClsx(isPasswordRevealed ? "kcFormPasswordVisibilityIconHide" : "kcFormPasswordVisibilityIconShow")} aria-hidden />
//             </button>
//         </div>
//     );
// }
