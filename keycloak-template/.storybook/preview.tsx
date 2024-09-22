import type { Preview } from "@storybook/react";
import React, { useState } from "react";
import { IonApp, IonContent, IonPage, IonList, IonButton } from "@ionic/react";
import { setupIonicReact } from "@ionic/react";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";

import "@ionic/react/css/display.css";

setupIonicReact();

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [
        // 👇 Defining the decorator in the preview file applies it to all stories
        (Story, { parameters }) => {
            // 👇 Make it configurable by reading from parameters
            const { pageLayout } = parameters;
            switch (pageLayout) {
                case "page":
                    return (
                        // Your page layout is probably a little more complex than this ;)
                        <IonWrapper>
                            <Story />
                        </IonWrapper>
                    );
                case "page-mobile":
                    return (
                        <IonWrapper>
                            <Story />
                        </IonWrapper>
                    );
                default:
                    // In the default case, don't apply a layout
                    return (
                        <IonWrapper>
                            <Story />
                        </IonWrapper>
                    );
            }
        }
    ]
};

const IonWrapper = ({ children }) => {
    return (
        <IonApp>
            <IonPage>
                <IonContent>{children}</IonContent>
            </IonPage>
        </IonApp>
    );
};

export default preview;
