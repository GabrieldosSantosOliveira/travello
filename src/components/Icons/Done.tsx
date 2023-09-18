import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";
export const Done = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 -960 960 960" {...props}>
    <Path d="M395-253 194-455l83-83 118 117 288-287 83 84-371 371Z" />
  </Svg>
);
