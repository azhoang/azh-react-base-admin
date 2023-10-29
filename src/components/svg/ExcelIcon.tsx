import { chakra, ImageProps, forwardRef } from "@chakra-ui/react";
import excelSvg from "@/assets/svg/excel.svg";

export const ExcelIcon = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={excelSvg} w="83px" ref={ref} {...props} />;
});
