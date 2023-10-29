import { INavigationItem } from "@/types";
import { _PATH_ } from "../const";

export const flatMenuItems: (INavigationItem & { parentId?: string })[] = [
  {
    ..._PATH_.insider,
    breadcrumb: [],
  },
  {
    ..._PATH_.parentPath,
    breadcrumb: [_PATH_.insider],
  },
  {
    ..._PATH_.subPath1,
    parentId: _PATH_.parentPath.id,
    breadcrumb: [_PATH_.insider],
  },
  {
    ..._PATH_.subPath2,
    parentId: _PATH_.parentPath.id,
    breadcrumb: [_PATH_.insider],
  },
  {
    ..._PATH_.subPath3,
    parentId: _PATH_.parentPath.id,
    breadcrumb: [_PATH_.insider],
  },
  {
    ..._PATH_.subPath4,
    parentId: _PATH_.parentPath.id,
    breadcrumb: [_PATH_.insider],
  },
  {
    ..._PATH_.subPath5,
    parentId: _PATH_.parentPath.id,
    breadcrumb: [_PATH_.insider],
  },
];

export const menuItems: INavigationItem[] = [
  {
    ..._PATH_.insider,
    breadcrumb: [],
  },
  {
    ..._PATH_.parentPath,
    breadcrumb: [_PATH_.insider],
    children: flatMenuItems.filter((i) => i.parentId === _PATH_.parentPath.id),
  },
];
