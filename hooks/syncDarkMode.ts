import { useGlobalStore } from "@/store/global";
import { useEffect } from "react";

export const useSyncDarkMode = () => {
  const globalS = useGlobalStore();
  const darkMode = globalS.dark;

  const handle = () => {
    document.documentElement.classList.toggle("dark", darkMode);
  };

  useEffect(() => {
    handle();
  }, [darkMode]);
};
