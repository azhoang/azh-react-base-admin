import { popoverAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const popover = createMultiStyleConfigHelpers(popoverAnatomy.keys);

export const Popover = popover.defineMultiStyleConfig({
  variants: {
    responsive: {
      content: { width: "unset" },
    },
  },
});
