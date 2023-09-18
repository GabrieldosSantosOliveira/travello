import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import {
  Mulish_800ExtraBold,
  useFonts,
  Mulish_300Light,
  Mulish_400Regular,
  Mulish_600SemiBold,
  Mulish_500Medium,
  Mulish_700Bold,
} from "@expo-google-fonts/mulish";
import { SafeAreaView } from "react-native-safe-area-context";
import { Routes } from "./src/routes";

export default function App() {
  const [isFontsLoading] = useFonts({
    Mulish_800ExtraBold,
    Mulish_300Light,
    Mulish_400Regular,
    Mulish_600SemiBold,
    Mulish_500Medium,
    Mulish_700Bold,
  });
  if (!isFontsLoading) {
    return <View />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
