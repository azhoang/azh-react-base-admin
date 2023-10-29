import { flatMenuItems } from "@/configs/data";
import { INavigationItem } from "@/types";
import { matchPath, useLocation, useNavigate } from "react-router-dom";

export default function useRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  const getRouteItemInfo = ():
    | (INavigationItem & { parentId?: string })
    | undefined => {
    return flatMenuItems.find((route) =>
      matchPath(location.pathname, route.path),
    );
  };
  return {
    currentRoute: getRouteItemInfo(),
    navigate,
    location,
  };
}
