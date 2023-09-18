import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Root } from "../../components/Input/Root";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { FloatingActionButton } from "./components/FloatingActionButton";

export const ForgotPassword = () => {
  const { goBack, navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Almost there</Text>
      <Text style={styles.text}>
        Please enter the 6-digit code sent to your email{" "}
        <Text style={styles.registerAttention}>
          contact.uiuxexperts@gmail.com
        </Text>{" "}
        for verification.
      </Text>
      <View style={styles.form}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Root style={{ height: 36, width: 36 }}>
            <Input placeholder="6" />
          </Root>
          <Root style={{ height: 36, width: 36 }}>
            <Input placeholder="9" />
          </Root>
          <Root style={{ height: 36, width: 36 }}>
            <Input placeholder="7" />
          </Root>
          <Root style={{ height: 36, width: 36 }}>
            <Input placeholder="5" />
          </Root>
          <Root style={{ height: 36, width: 36 }}>
            <Input placeholder="4" />
          </Root>
          <Root style={{ height: 36, width: 36 }}>
            <Input placeholder="9" />
          </Root>
        </View>
        <Button title="Verify" onPress={() => navigate("welcome")} />
        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => {}}>
          <Text style={styles.resend}>
            Didn’t receive any code? Resend Again
          </Text>
          <Text style={styles.resendLabel}>Request new code in 00:30s</Text>
        </TouchableOpacity>
      </View>
      <FloatingActionButton onPress={goBack} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 30,
  },
  heading: {
    color: "#252525",
    fontFamily: "Mulish_800ExtraBold",
    fontSize: 24,
    textAlign: "left",
    width: "100%",
  },
  text: {
    color: "#252525",
    fontFamily: "Mulish_300Light",
    fontSize: 14,
    textAlign: "justify",
    marginTop: 25,
  },
  form: {
    gap: 25,
    flex: 1,
    marginTop: 30,
    marginBottom: 40,
  },
  label: {
    color: "#252525",
    fontFamily: "Mulish_400Regular",
    fontSize: 12,
  },
  resend: {
    color: "#252525",
    fontFamily: "Mulish_700Bold",
    fontSize: 13,
    marginTop: 62,
  },
  resendLabel: {
    color: "rgba(0, 0, 0, 0.50)",
    fontFamily: "Mulish_400Regular",
    fontSize: 13,
  },
  registerAttention: {
    color: "#FF3951",
  },
});
