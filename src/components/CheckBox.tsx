import { ReactNode, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Done } from "./Icons/Done";

export interface CheckBoxProps {
  children: ReactNode;
  onChange?: (value: boolean) => void;
}
export const CheckBox: React.FC<CheckBoxProps> = ({ children, onChange }) => {
  const [check, setCheck] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setCheck((prev) => !prev);
        onChange?.(!check);
      }}
      style={styles.container}
    >
      <View style={styles.checkBox}>
        {check ? <Done fill="#CBCBCB" /> : null}
      </View>
      {children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  checkBox: {
    height: 18,
    width: 18,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#CBCBCB",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
