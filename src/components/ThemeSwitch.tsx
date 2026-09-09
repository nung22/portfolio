import { Switch } from "@headlessui/react";
import { type ColorTheme } from "../App";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";

interface ThemeSwitchProps {
  colorTheme: ColorTheme;
  onToggle: () => void;
}

export default function ThemeSwitch({
  colorTheme,
  onToggle,
}: ThemeSwitchProps) {
  const isDark = colorTheme === "dark";

  return (
    <Switch
      checked={isDark}
      onChange={onToggle}
      className={`${
        isDark ? "bg-indigo-600" : "bg-zinc-300"
      } relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
    >
      <span className="sr-only">Toggle dark mode</span>
      <span
        aria-hidden="true"
        className={`${
          isDark ? "translate-x-5 bg-white" : "translate-x-0 bg-white"
        } pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out`}
      >
        {/* Icons wrapper */}
        <span
          className={`${
            isDark
              ? "opacity-0 duration-100 ease-out"
              : "opacity-100 duration-200 ease-in"
          } absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`}
          aria-hidden="true"
        >
          <SunIcon className="h-3 w-3 text-gray-800" />
        </span>
        <span
          className={`${
            isDark
              ? "opacity-100 duration-200 ease-in"
              : "opacity-0 duration-100 ease-out"
          } absolute inset-0 flex h-full w-full items-center justify-center transition-opacity`}
          aria-hidden="true"
        >
          <MoonIcon className="h-3 w-3 text-indigo-600" />
        </span>
      </span>
    </Switch>
  );
}
