import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const Lock = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.3}
      strokeWidth={2}
      d="M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2ZM7 11V7a5 5 0 1 1 10 0v4"
    />
  </Svg>
);
