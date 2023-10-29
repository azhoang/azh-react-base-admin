import FallbackDefault from "@/modules/others/FallbackDefault";
import loadable from "@loadable/component";

const optionDefault = {
  fallback: <FallbackDefault />,
};

export const SignIn = loadable(() => import("./SignIn"), optionDefault);
