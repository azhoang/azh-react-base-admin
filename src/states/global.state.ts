import { create } from "zustand";

interface IState {
  me: IUser | null;
  timezone: string;
  isOpenLogoutDialog: boolean;
}

interface IMethod {
  setMe: (me: any) => void;
  toggleLogoutDialog: () => void;
}

const defaultState: IState = {
  me: null,
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  isOpenLogoutDialog: false,
};

export const globalState = create<IState & IMethod>((set, get) => {
  function toggleLogoutDialog() {
    set({
      isOpenLogoutDialog: !get().isOpenLogoutDialog,
    });
  }
  return {
    ...defaultState,
    toggleLogoutDialog,
    setMe: (me) => {
      set({
        me,
      });
    },
  };
});
