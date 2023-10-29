import { chakra, ImageProps, forwardRef } from "@chakra-ui/react";
import logo from "@/assets/images/logo-3.png";

export const LogoFull = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={logo} w="150px" ref={ref} {...props} />;
});
