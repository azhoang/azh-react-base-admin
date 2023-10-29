import { chakra, ImageProps, forwardRef } from "@chakra-ui/react";
import zipSvg from "@/assets/svg/zip.svg";

export const ZipIcon = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={zipSvg} w="83px" ref={ref} {...props} />;
});
