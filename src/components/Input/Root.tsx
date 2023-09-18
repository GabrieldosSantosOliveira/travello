import type React from "react";
import type { ViewProps, ViewStyle } from "react-native";
import { StyleSheet, View } from "react-native";

import { InputProvider } from "../../contexts/InputContext";
import { useInput } from "../../hooks/useInput";
export interface RootProps extends ViewProps {
  _focus?: ViewStyle;
}
export const RootBase: React.FC<RootProps> = ({ _focus, style, ...props }) => {
  const { hasFocus } = useInput();
  return (
    <View
      style={[styles.input, style, hasFocus ? _focus : undefined]}
      {...props}
    />
  );
};
export const Root: React.FC<RootProps> = ({ ...props }) => {
  return (
    <InputProvider>
      <RootBase {...props} />
    </InputProvider>
  );
};
const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 13,
    gap: 13,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "rgba(196, 196, 196, 0.20)",
    height: 50,
  },
});
