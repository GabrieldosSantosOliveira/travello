import { Dimensions, StyleSheet, View } from "react-native";
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Slide } from "./components/Slide";
import { Dot } from "./components/Dot";
import { FloatingActionButton } from "./components/FloatingActionButton";

const slides = [
  {
    img: {
      width: 300,
      height: 178.371,
      source: require("./../../assets/onboarding/1/1.png"),
    },
    title: "Explore the world easily",
    subTitle: "To your desire",
  },
  {
    img: {
      width: 300,
      height: 263.276,
      source: require("./../../assets/onboarding/2/2.png"),
    },
    title: "Reach the unknown spot",
    subTitle: "To your destination",
  },
  {
    img: {
      width: 300,
      height: 246.061,
      source: require("./../../assets/onboarding/3/3.png"),
    },
    title: "Make connects with Travello",
    subTitle: "To your dream trip",
  },
];
const { width } = Dimensions.get("window");
export const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { navigate } = useNavigation();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const x = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(({ contentOffset }) => {
    x.value = contentOffset.x;
  });
  useAnimatedReaction(
    () => x.value,
    () => {
      runOnJS(setCurrentIndex)(Number((x.value / width).toFixed()));
      // eslint-disable-next-line prettier/prettier
    }
  );
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={scrollHandler}
      >
        {slides.map(({ img, subTitle, title }, id) => (
          <Slide subTitle={subTitle} title={title} key={id} img={img} />
        ))}
      </Animated.ScrollView>
      <View style={styles.dots}>
        {slides.map((_, index) => (
          <Dot key={index} index={index} x={x} />
        ))}
      </View>
      <FloatingActionButton
        onPress={() => {
          if (currentIndex === 2) {
            navigate("sing-in");
          } else {
            scrollRef.current?.scrollTo({
              animated: true,
              x: currentIndex * width + width,
            });
          }
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  dots: {
    flexDirection: "row",
    gap: 2,
    paddingHorizontal: 20,
    bottom: 94,
  },
});
