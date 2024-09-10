import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={74} height={29} {...props}>
    <G fill="none" fillRule="evenodd">
      <Path
        fill="#FFCA05"
        d="M11.552 6.174a8.538 8.538 0 0 1 2.66-.42c4.06 0 7.449 2.824 8.225 6.58l5.753-1.15C26.87 4.801 21.115 0 14.213 0c-1.582 0-3.1.252-4.523.718l1.862 5.456z"
      />
      <Path
        fill="#00A4DF"
        d="m4.872 24.667 3.938-4.353c-1.758-1.523-2.867-3.745-2.867-6.22 0-2.475 1.107-4.696 2.864-6.217L4.87 3.524C1.884 6.11 0 9.887 0 14.094c0 4.208 1.884 7.986 4.872 10.573"
      />
      <Path
        fill="#EE4123"
        d="M22.438 15.857c-.779 3.755-4.164 6.577-8.22 6.577a8.49 8.49 0 0 1-2.664-.423L9.69 27.473c1.422.466 2.944.717 4.527.717 6.894 0 12.648-4.797 13.973-11.176l-5.752-1.157z"
      />
    </G>
  </Svg>
);
export { SvgComponent as EloLogo };
