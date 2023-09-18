import { NavigationContainer } from "@react-navigation/native";

import { AuthenticationNavigator } from "./auth.navigator";

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
};
