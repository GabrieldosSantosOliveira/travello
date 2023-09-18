import type { TouchableOpacityProps } from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type FloatingActionButtonProps = TouchableOpacityProps;
export const FloatingActionButton: React.FC<FloatingActionButtonProps> = (
  props,
) => {
  return (
    <TouchableOpacity {...props} style={styles.button}>
      <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#252525",
    borderRadius: 999,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 22,
    bottom: 72,
  },
});
