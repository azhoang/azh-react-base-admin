import { v4 } from "uuid";
import { _ROLE_ } from ".";

export const _PATH_ = {
  home: {
    id: v4(),
    path: "/",
    title: "Home",
  },

  /**
   * Auth
   */
  auth: {
    id: v4(),
    path: "/auth",
    title: "Authentication",
  },
  signin: {
    id: v4(),
    path: "/auth/signin",
    title: "Sign In",
  },
  signup: {
    id: v4(),
    path: "/auth/signup",
    title: "Sign Up",
  },
  forgotPassword: {
    id: v4(),
    path: "/auth/forgot-password",
    title: "Forgot Password",
  },
  verifyEmail: {
    id: v4(),
    path: "/auth/confirm-email",
    title: "Verify Email",
  },
  passwordRecovery: {
    id: v4(),
    path: "/auth/reset-password",
    title: "Password recovery",
  },

  /**
   * Insider
   */
  insider: {
    id: v4(),
    path: "/insider",
    title: "Dashboard",
  },
  profile: {
    id: v4(),
    path: "/insider/me",
    title: "Profile",
  },

  /**
   * nested menu
   */
  parentPath: {
    id: v4(),
    path: "/insider/parent-menu",
    title: "Parent Path",
    roles: [_ROLE_.admin, _ROLE_.manager],
  },
  subPath1: {
    id: v4(),
    path: "/insider/parent-menu/sub-path-1",
    title: "Sub Path 1",
    roles: [_ROLE_.admin, _ROLE_.manager],
  },
  subPath2: {
    id: v4(),
    path: "/insider/parent-menu/sub-path-2",
    title: "Sub Path 2",
    roles: [_ROLE_.admin, _ROLE_.manager],
  },
  subPath3: {
    id: v4(),
    path: "/insider/parent-menu/sub-path-3",
    title: "Sub Path 3",
    roles: [_ROLE_.admin, _ROLE_.manager],
  },
  subPath4: {
    id: v4(),
    path: "/insider/parent-menu/sub-path-4",
    title: "Sub Path 4",
    roles: [_ROLE_.admin, _ROLE_.manager],
  },
  subPath5: {
    id: v4(),
    path: "/insider/parent-menu/sub-path-5",
    title: "Sub Path 5",
    roles: [_ROLE_.admin, _ROLE_.manager],
  },
};
