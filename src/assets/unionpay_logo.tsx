import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    fill="none"
    aria-hidden={true}
    viewBox="0 0 42 16"
    {...props}
  >
    <Path
      fill="#E21836"
      d="M13.8 1h5.8c.8 0 1.3.7 1 1.5L18 14a2 2 0 0 1-1.8 1.5h-5.8c-.8 0-1.3-.6-1.1-1.5L12 2.5A2 2 0 0 1 13.8 1z"
    />
    <Path
      fill="#00447C"
      d="M19 1h6.7c.8 0 .5.7.3 1.5L23.3 14c-.2.9-.1 1.5-1 1.5h-6.6c-.8 0-1.3-.6-1.1-1.5l2.7-11.5A2 2 0 0 1 19 1z"
    />
    <Path
      fill="#007B84"
      d="M25.5 1h5.8c.8 0 1.3.7 1 1.5L29.8 14a2 2 0 0 1-1.8 1.5h-6c-.8 0-1.3-.6-1.1-1.5l2.7-11.5A2 2 0 0 1 25.5 1z"
    />
  </Svg>
)
export { SvgComponent as UnionPayLogo }
