import * as React from "react";
import Svg, { SvgProps, Defs, RadialGradient, Stop, LinearGradient, ClipPath, Path, G, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const SvgComponent = (props: SvgProps) => (
  <Svg id="logosandtypes_com" data-name="logosandtypes com" viewBox="0 0 150.84 150.3" fill="none" {...props}>
    <Defs>
      <RadialGradient id="radial-gradient" cx={80.56} cy={80.02} r={70.28} gradientUnits="userSpaceOnUse">
        <Stop offset={0.8} stopColor="#552800" stopOpacity={0} />
        <Stop offset={0.97} stopColor="#3a1c00" stopOpacity={0.5} />
      </RadialGradient>
      <LinearGradient id="linear-gradient" x1={343.63} x2={271.6} y1={-342.55} y2={-263.04} gradientTransform="matrix(1 0 0 -1 -219.03 -212.87)" gradientUnits="userSpaceOnUse">
        <Stop offset={0.09} stopColor="#f99b20" />
        <Stop offset={0.32} stopColor="#f78d21" />
        <Stop offset={1} stopColor="#f26522" />
      </LinearGradient>
      <ClipPath id="clip-path" transform="translate(0 -.2)">
        <Path d="M137.66 75.28a62.16 62.16 0 1 1-62.38-61.94h.26a62.11 62.11 0 0 1 62.12 61.94Z" className="cls-1" />
      </ClipPath>
    </Defs>
    <Path d="M0 0h150v150H0Z" className="cls-1" />
    <Path
      d="M137.66 75.28a62.16 62.16 0 1 1-62.38-61.94h.26a62.11 62.11 0 0 1 62.12 61.94Z"
      style={{
        fill: "url(#linear-gradient)",
      }}
      transform="translate(0 -.2)"
    />
    <G
      style={{
        clipPath: "url(#clip-path)",
      }}
    >
      <Circle
        cx={80.56}
        cy={80.02}
        r={70.28}
        style={{
          fill: "url(#radial-gradient)",
        }}
      />
    </G>
  </Svg>
);
export { SvgComponent as DiscoverLogo };
