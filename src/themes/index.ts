import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import * as components from "./components";
import * as commonStyle from "./common";

export default extendTheme(
  commonStyle,
  withDefaultColorScheme({ colorScheme: "primary" }),
  { components: { ...components } },
);
