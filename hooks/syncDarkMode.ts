import { useGlobalStore } from "@/store/global";
import { useEffect } from "react";

export const useSyncDarkMode = () => {
  const darkMode = useGlobalStore((state) => state.dark);

  const handle = () => {
    document.documentElement.classList.toggle("dark", darkMode);
  };

  useEffect(() => {
    // handle();
  }, [darkMode]);
};
