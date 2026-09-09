import { useState, useEffect } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {
  CodeBracketIcon,
  LinkIcon,
  EnvelopeIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/16/solid";
import ThemeSwitch from "./components/ThemeSwitch";
import Work from "./components/Work";
import About from "./components/About";
import Logo from "@/assets/logos/logo.png";
import Resume from "@/assets/Nicholas_Ung_resume.pdf";

export type ColorTheme = "light" | "dark";

export default function App() {
  const [colorTheme, setColorTheme] = useState<"light" | "dark">("dark");

  // Injects the 'dark' class onto the root HTML element so Tailwind can detect it natively
  useEffect(() => {
    const root = document.documentElement;
    if (colorTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [colorTheme]);

  const onToggle = () => {
    setColorTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 p-6 sm:p-12 transition-colors duration-200">
      {/* Top Absolute Actions Bar (Theme Toggle) */}
      <div className="absolute top-6 right-6 flex items-center gap-4">
        <ThemeSwitch colorTheme={colorTheme} onToggle={onToggle} />
      </div>

      <main className="max-w-2xl mx-auto flex flex-col gap-8">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row gap-6 items-start border-b border-zinc-300 dark:border-zinc-700 pb-8">
          <div className="w-28 h-28 rounded-lg overflow-hidden shrink-0">
            <img
              src={Logo}
              alt="Nicholas Ung"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between flex-1">
            <div>
              <h1 className="text-4xl font-bold tracking-tight font-mono">
                Nicholas K. Ung
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2 font-mono text-sm">
                Software Engineer / Full Stack Developer
              </p>
            </div>

            {/* Social Links & Resume Download */}
            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-medium">
              <a
                href="https://github.com/nung22"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-500 transition-colors"
              >
                <CodeBracketIcon className="w-4 h-4" /> GitHub
              </a>

              <span className="text-zinc-400">•</span>

              <a
                href="https://www.linkedin.com/in/nicholas-ung/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-500 transition-colors"
              >
                <LinkIcon className="w-4 h-4" /> LinkedIn
              </a>

              <span className="text-zinc-400">•</span>

              <a
                href="mailto:nicholasung22@gmail.com"
                className="flex items-center gap-1.5 hover:text-blue-500 transition-colors"
              >
                <EnvelopeIcon className="w-4 h-4" /> Email
              </a>

              <span className="text-zinc-400">•</span>
              <a
                href={Resume}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 bg-zinc-200 dark:bg-zinc-800 px-3 py-1 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
              >
                <ArrowDownTrayIcon className="w-4 h-4" /> Resume
              </a>
            </div>
          </div>
        </header>

        {/* Experience Section (Structured Table Style) */}
        <section className="flex flex-col gap-3 font-mono">
          <h2 className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
            Experience
          </h2>
          <div className="border border-zinc-400 dark:border-zinc-700 rounded-md overflow-hidden bg-white/50 dark:bg-zinc-800/50">
            {[
              { company: "JT4", role: "Software Engineer" },
              { company: "AWS OpenSearch", role: "Software Engineer Intern" },
              { company: "PolicyEngine", role: "Software Developer" },
              { company: "re:Bloom", role: "Software Engineer" },
              {
                company: "UCLA Backus Biochemistry Lab",
                role: "Research Assistant",
              },
            ].map((exp, index, arr) => (
              <div
                key={exp.company}
                className={`flex justify-between items-center px-4 py-3 text-sm ${
                  index !== arr.length - 1
                    ? "border-b border-zinc-300 dark:border-zinc-700"
                    : ""
                }`}
              >
                <span className="font-semibold">{exp.company}</span>
                <span className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm font-sans">
                  {exp.role}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Tabbed Content Section (Projects / About) */}
        <TabGroup className="mt-4">
          <TabList className="flex gap-2 border-b border-zinc-300 dark:border-zinc-700 pb-2 font-mono">
            <Tab className="data-selected:bg-zinc-900 data-selected:text-white dark:data-selected:bg-zinc-100 dark:data-selected:text-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-colors outline-none">
              Projects 
            </Tab>
            <Tab className="data-selected:bg-zinc-900 data-selected:text-white dark:data-selected:bg-zinc-100 dark:data-selected:text-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-colors outline-none">
              About
            </Tab>
          </TabList>

          <TabPanels className="mt-6">
            <TabPanel>
              <Work />
            </TabPanel>
            <TabPanel>
              <About />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </main>
    </div>
  );
}
