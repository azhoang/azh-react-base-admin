import { create } from "zustand";
import { INavigationItem } from "@/types";
import { menuItems } from "@/configs/data";

interface IState {
  insideNavigation: INavigationItem[];
}

interface IMethod {}

const defaultState: IState = {
  insideNavigation: menuItems,
};

export const routeState = create<IState & IMethod>(() => {
  return defaultState;
});
