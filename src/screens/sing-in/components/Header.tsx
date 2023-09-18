import { Image, StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View
      style={{
        width: 321,
        height: 251,
      }}
    >
      <Image
        source={require("./../../../assets/sing-in/1/1.png")}
        style={{ position: "absolute", top: 0 }}
      />

      <Text style={styles.heading}>Welcome back</Text>
      <Text style={styles.subHeading}>sign in to access your account</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    color: "#252525",
    fontFamily: "Mulish_800ExtraBold",
    fontSize: 24,
    position: "absolute",
    bottom: 83,
    left: 28,
    right: 123,
    width: "100%",
  },
  subHeading: {
    color: "#252525",
    fontFamily: "Mulish_300Light",
    fontSize: 14,
    position: "absolute",
    bottom: 62,
    left: 26,
    right: 105,
    width: "100%",
  },
});
