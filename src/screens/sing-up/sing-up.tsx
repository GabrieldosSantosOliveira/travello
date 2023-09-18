import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Root } from "../../components/Input/Root";
import { Input } from "../../components/Input/Input";
import { Email } from "../../components/Icons/Email";
import { Lock } from "../../components/Icons/Lock";
import { CheckBox } from "../../components/CheckBox";
import { Button } from "../../components/Button";
import { ArrowRight } from "../../components/Icons/ArrowRight";
import { User } from "../../components/Icons/User";
import { SmartPhone } from "../../components/Icons/SmartPhone";

import { Header } from "./components/Header";

export const SingUp = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.form}>
        <Root>
          <Input placeholder="Full name" />
          <User />
        </Root>
        <Root>
          <Input placeholder="Valid email" />
          <Email />
        </Root>
        <Root>
          <Input placeholder="Phone number" />
          <SmartPhone />
        </Root>
        <Root>
          <Input placeholder="Strong Password" />
          <Lock />
        </Root>
        <View style={styles.checkBox}>
          <CheckBox>
            <Text style={styles.register}>
              By checking the box you agree to our{" "}
              <Text style={styles.registerAttention}>Terms</Text> and{" "}
              <Text style={styles.registerAttention}>Conditions</Text>.
            </Text>
          </CheckBox>
        </View>
        <Button
          title="Next"
          onPress={() => navigate("welcome")}
          iconRight={<ArrowRight />}
        />
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigate("sing-up")}
        >
          <Text style={styles.register}>
            Already a member?{" "}
            <Text style={styles.registerAttention}>Log In?</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonRegister: { alignItems: "center" },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  form: {
    paddingLeft: 31,
    paddingRight: 29,
    gap: 25,
    flex: 1,
  },
  checkBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  register: {
    color: "#252525",
    fontFamily: "Mulish_500Medium",
    fontSize: 13,
    paddingRight: 16,
  },
  registerAttention: {
    color: "#FF3951",
  },
});
