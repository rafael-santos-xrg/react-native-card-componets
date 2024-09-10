import * as React from "react";
import Svg, { SvgProps, LinearGradient, Stop, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 400 120" {...props}>
    <LinearGradient id="a" x1={370} x2={290} gradientUnits="userSpaceOnUse">
      <Stop stopColor="#1F5CD7" />
      <Stop offset={1} stopColor="#02AEFF" />
    </LinearGradient>
    <Path
      fill="#0f754e"
      d="M31 13h33c3 0 12-1 16 13 3 9 7 23 13 44h2c6-22 11-37 13-44 4-14 14-13 18-13h31v96h-32V52h-2l-17 57H82L65 52h-3v57H31m139-96h32v57h3l21-47c4-9 13-10 13-10h30v96h-32V52h-2l-21 47c-4 9-14 10-14 10h-30m142-29v29h-30V59h98c-4 12-18 21-34 21"
    />
    <Path fill="url(#a)" d="M382 53c4-18-8-40-34-40h-68c2 21 20 40 39 40" />
  </Svg>
);
export { SvgComponent as MirLogo };
