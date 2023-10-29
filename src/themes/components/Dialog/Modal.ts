import { modalAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  modalAnatomy.keys,
);

export const Modal = defineMultiStyleConfig({
  sizes: {
    "7xl": {
      dialog: {
        maxW: "7xl",
      },
    },
    "8xl": {
      dialog: {
        maxW: "8xl",
      },
    },
    "padding-2": {
      dialog: {
        maxW: "calc(100% - 2rem)",
      },
    },
    "padding-4": {
      dialog: {
        maxW: "calc(100% - 4rem)",
      },
    },
  },
});
