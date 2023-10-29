import { FallbackDefault } from "@/modules";
import loadable from "@loadable/component";

const optionDefault = {
  fallback: <FallbackDefault />,
};

export * from "./auth";

export const HomePage = loadable(() => import("./Home"), optionDefault);
