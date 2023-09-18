import { Image, StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../../assets/sing-in/1/1.png")}
        style={{ position: "absolute", top: 0 }}
      />

      <Text style={styles.heading}>Get Started</Text>
      <Text style={styles.subHeading}>by creating a free account.</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
    width: 321,
    height: 251,
  },
  heading: {
    color: "#252525",
    fontFamily: "Mulish_800ExtraBold",
    fontSize: 36,
    position: "absolute",
    bottom: 89,
    left: 15,
    right: 102,
    width: "100%",
  },
  subHeading: {
    color: "#252525",
    fontFamily: "Mulish_300Light",
    fontSize: 14,
    position: "absolute",
    bottom: 72,
    left: 26,
    right: 126,
    width: "100%",
  },
});
