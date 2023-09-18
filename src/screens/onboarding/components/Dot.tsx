import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
export interface DotProps {
  index: number;
  x: SharedValue<number>;
}
const { width } = Dimensions.get("window");
export const Dot: React.FC<DotProps> = ({ index, x }) => {
  const currentIndex = useDerivedValue(() => {
    return x.value / width;
  });
  const style = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        currentIndex.value,
        [index - 1, index, index + 1],
        ["#FFB6B6", "#FF3951", "#FFB6B6"]
      ),
    };
  });
  return <Animated.View style={[styles.dot, style]}></Animated.View>;
};
const styles = StyleSheet.create({
  dot: {
    width: 16,
    height: 6,
    borderRadius: 10,
  },
});
