import {
  Dimensions,
  Image,
  ImageRequireSource,
  StyleSheet,
  Text,
  View,
} from "react-native";
export interface SlideProps {
  img: {
    source: ImageRequireSource;
    width: number;
    height: number;
  };
  title: string;
  subTitle: string;
}
const { width, height } = Dimensions.get("window");
export const Slide: React.FC<SlideProps> = ({ img, subTitle, title }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={img.source}
        height={img.height}
        width={img.width}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    justifyContent: "center",
  },
  image: {
    alignSelf: "center",
  },
  title: {
    color: "#252525",
    fontFamily: "Mulish_800ExtraBold",
    fontSize: 36,
    paddingRight: 60,
    paddingLeft: 20,
  },
  subTitle: {
    color: "#929292",
    fontFamily: "Mulish_300Light",
    fontSize: 24,
    paddingRight: 60,
    paddingLeft: 20,
  },
});
