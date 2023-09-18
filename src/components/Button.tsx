import { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
export interface ButtonProps {
  onPress: () => void;
  title: string;
  iconRight?: ReactNode;
}
export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  iconRight,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      {iconRight}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: "#FF3951",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },
  title: {
    color: "#FCFCFC",
    fontFamily: "Mulish_600SemiBold",
    fontSize: 20,
  },
});
