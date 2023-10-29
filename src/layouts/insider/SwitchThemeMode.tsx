import { IconButton, useColorMode } from "@chakra-ui/react";
import { BsMoon, BsSun } from "react-icons/bs";

export const SwitchThemeMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      variant="ghost"
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <BsMoon /> : <BsSun />}
      aria-label="switch-color-mode"
    />
  );
};
