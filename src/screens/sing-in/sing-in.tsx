import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Root } from "../../components/Input/Root";
import { Input } from "../../components/Input/Input";
import { Email } from "../../components/Icons/Email";
import { Lock } from "../../components/Icons/Lock";
import { CheckBox } from "../../components/CheckBox";
import { Button } from "../../components/Button";
import { ArrowRight } from "../../components/Icons/ArrowRight";

import { Header } from "./components/Header";

export const SingIn = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.form}>
        <Root>
          <Input placeholder="Enter your email" />
          <Email />
        </Root>
        <Root>
          <Input placeholder="Password" />
          <Lock />
        </Root>
        <View style={styles.checkBox}>
          <CheckBox>
            <Text style={styles.label}>Remember me</Text>
          </CheckBox>
          <TouchableOpacity onPress={() => navigate("forgot-password")}>
            <Text style={styles.forgotPassword}>Forget password ?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.space} />
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
            New Member?{" "}
            <Text style={styles.registerAttention}>Register now </Text>
          </Text>
        </TouchableOpacity>
        <View style={styles.footer} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  space: {
    flex: 1,
  },
  footer: { height: 58 },
  buttonRegister: { alignItems: "center" },
  checkBox: { flexDirection: "row", justifyContent: "space-between" },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-end",
  },
  form: {
    paddingLeft: 31,
    paddingRight: 29,
    gap: 25,
    flex: 1,
  },
  label: {
    color: "#252525",
    fontFamily: "Mulish_400Regular",
    fontSize: 12,
  },
  forgotPassword: {
    color: "#FF3951",
    fontFamily: "Mulish_400Regular",
    fontSize: 12,
  },
  register: {
    color: "#252525",
    fontFamily: "Mulish_500Medium",
    fontSize: 13,
  },
  registerAttention: {
    color: "#FF3951",
  },
});
