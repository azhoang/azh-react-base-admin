import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const input = createMultiStyleConfigHelpers(inputAnatomy.keys);

const Input = input.defineMultiStyleConfig({
  defaultProps: {
    size: "lg",
    variant: "filled",
  },
});

export { Input };
