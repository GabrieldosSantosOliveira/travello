import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

export const Welcome = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome To Home</Text>
      <Image
        source={require("./../../assets/welcome/1/1.png")}
        height={155}
        width={300}
      />
      <Text style={styles.text}>
        Currently The Next Part of Home Activity & Fragementation is under
        development. The upcoming Part 2 is coming Soon........
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 22,
  },
  heading: {
    color: "#252525",
    fontFamily: "Mulish_800ExtraBold",
    fontSize: 24,
    alignSelf: "flex-start",
    marginBottom: 71,
  },
  text: {
    color: "#252525",
    fontFamily: "Mulish_400Regular",
    fontSize: 14,
    marginTop: 54,
  },
});
