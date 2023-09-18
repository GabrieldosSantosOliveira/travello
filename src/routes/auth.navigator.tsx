import { createStackNavigator } from "@react-navigation/stack";

import { Onboarding } from "../screens/onboarding/onboarding";
import { SingIn } from "../screens/sing-in/sing-in";
import { SingUp } from "../screens/sing-up/sing-up";
import { ForgotPassword } from "../screens/forgot-password/forgot-password";
import { Welcome } from "../screens/welcome/welcome";

const AuthenticationStack = createStackNavigator();

export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator
      initialRouteName="onboarding"
      screenOptions={{ headerShown: false }}
    >
      <AuthenticationStack.Screen name="onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="sing-in" component={SingIn} />
      <AuthenticationStack.Screen name="sing-up" component={SingUp} />
      <AuthenticationStack.Screen
        name="forgot-password"
        component={ForgotPassword}
      />
      <AuthenticationStack.Screen name="welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};
