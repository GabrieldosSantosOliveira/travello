export interface Routes {
  onboarding: undefined;
  "sing-in": undefined;
  "sing-up": undefined;
  "forgot-password": undefined;
  welcome: undefined;
}
export declare global {
  namespace ReactNavigation {
    type RootParamList = Routes;
  }
}
