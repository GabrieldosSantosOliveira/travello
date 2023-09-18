import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";
export const SmartPhone = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.3}
      strokeWidth={2}
      d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM12 18h.01"
    />
  </Svg>
);
