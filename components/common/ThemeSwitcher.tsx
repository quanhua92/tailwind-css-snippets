import { MoonIcon, LightBulbIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface Props {
  icon?: boolean;
  text?: boolean;
}

const ThemeSwitcher = ({ icon = true, text = false }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  let finalButton;
  if (resolvedTheme === "dark") {
    finalButton = (
      <div className="inline-flex">
        {icon && <LightBulbIcon className="h-6 w-6" aria-hidden="true" />}
        {text && (
          <span
            className={clsx({
              "ml-4": icon,
            })}
          >
            Enable Light Mode
          </span>
        )}
      </div>
    );
  } else {
    finalButton = (
      <div className="inline-flex">
        {icon && <MoonIcon className="h-6 w-6" aria-hidden="true" />}
        {text && (
          <span
            className={clsx({
              "ml-4": icon,
            })}
          >
            Enable Dark Mode
          </span>
        )}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="rounded-md -ml-2 p-2 font-medium text-gray-900 dark:text-gray-100"
    >
      <span className="sr-only">Toggle Dark Mode</span>
      {mounted && finalButton}
    </button>
  );
};

export default ThemeSwitcher;
