import { chakra, ImageProps, forwardRef } from "@chakra-ui/react";
import logo from "@/assets/svg/logo-copyright.svg";

export const LogoCopyright = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={logo} w="76px" ref={ref} {...props} />;
});
