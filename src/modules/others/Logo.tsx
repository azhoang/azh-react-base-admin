import { chakra, ImageProps, forwardRef } from "@chakra-ui/react";
import logo from "@/assets/images/logo-2.png";

export const Logo = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={logo} w="130px" ref={ref} {...props} />;
});
