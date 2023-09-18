import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { useInput } from "../../hooks/useInput";
export interface InputProps extends TextInputProps {}
export const Input: React.FC<InputProps> = ({ ...props }) => {
  const { withFocus, withoutFocus } = useInput();
  return (
    <TextInput
      {...props}
      placeholderTextColor="rgba(0, 0, 0, 0.50)"
      style={styles.input}
      onBlur={withoutFocus}
      onFocus={withFocus}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontFamily: "Mulish_400Regular",
    fontSize: 14,
  },
});
