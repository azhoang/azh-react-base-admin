import { ButtonProps } from "@chakra-ui/react";

export interface IPathItem {
  id: string;
  path: string;
  title: string;
  isDisabled?: boolean;
  roles?: string[];
}

export interface INavigationItem extends IPathItem {
  children?: INavigationItem[];
  breadcrumb: IPathItem[];
  btnProps?: ButtonProps;
  parent?: INavigationItem;
  withoutBreadcrumb?: boolean;
  withoutPageName?: boolean;
  withoutWarpCard?: boolean;
}
