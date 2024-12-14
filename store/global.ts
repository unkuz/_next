import { create } from "zustand";

type Store = {
  dark: boolean;
  toogleDark: () => void;
};

export const useGlobalStore = create<Store>()((set) => ({
  dark: false,
  toogleDark: () => set((state) => ({ dark: !state.dark })),
}));
