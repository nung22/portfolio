import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import FleaFlickr from "@/assets/projects/FleaFlickr.webp";
import ChowCounter from "@/assets/projects/ChowCounter.webp";
import ILS from "@/assets/projects/ILS.webp";

export default function Work() {
  const projects = [
    {
      featured: true,
      title: "Infinite Lifestyle Solutions",
      subtitle: "Web Platform Overhaul & SEO Optimization",
      img: ILS,
      why_build:
        "The organization needed a modernized digital presence to better connect with individuals affected by violence and expand their restorative practices.",
      what_i_built:
        "A complete frontend overhaul focusing on accessibility, responsive design, and search engine optimization to drive organic traffic.",
      tech: [
        { name: "Fullstack", bg: "bg-green-600" },
        { name: "JavaScript", bg: "bg-amber-500" },
        { name: "SEO", bg: "bg-violet-500" },
      ],
      link: "https://www.infinitelifestylesolutions.org/",
    },
    {
      featured: false,
      title: "FleaFlickr",
      subtitle: "Issue Tracker & Project Management",
      img: FleaFlickr,
      why_build:
        "Managing complex software projects requires streamlined issue tracking that does not bog down developers with unnecessary or cluttered features.",
      what_i_built:
        "A lightweight, highly responsive project management dashboard designed for quickly tracking bugs, features, and team sprints.",
      tech: [
        { name: "Frontend", bg: "bg-green-600" },
        { name: "TypeScript", bg: "bg-blue-700" },
      ],
      link: "https://github.com/nung22/fleaflickr",
    },
    {
      featured: false,
      title: "Chow Counter",
      subtitle: "Calorie Tracking & Restaurant Discovery",
      img: ChowCounter,
      why_build:
        "Users typically have to switch between multiple applications to track their daily nutritional intake and discover new local dining options.",
      what_i_built:
        "A unified calorie-tracking application with integrated tools for finding new recipes and discovering nearby restaurants in a single interface.",
      tech: [
        { name: "React", bg: "bg-sky-500" },
        { name: "Node.js", bg: "bg-green-600" },
      ],
      link: "https://github.com/nung22/chow-counter",
    },
  ];

  return (
    <div className="flex flex-col gap-12 mt-6 mb-12 max-w-3xl mx-auto">
      {projects.map((project) => (
        <article
          key={project.title}
          className="relative border-[3px] border-zinc-900 dark:border-zinc-200 bg-[#f4f1ea] dark:bg-zinc-900 p-6 sm:p-10 
                     transition-all duration-200 ease-out 
                     translate-x-0 translate-y-0 
                     shadow-[0px_0px_0px_0px_rgba(24,24,27,1)] dark:shadow-[0px_0px_0px_0px_rgba(228,228,231,1)]
                     hover:-translate-x-2 hover:-translate-y-2 
                     hover:shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(228,228,231,1)]"
        >
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-0 left-0 bg-violet-600 text-white px-3 py-1.5 text-xs font-bold uppercase tracking-widest border-r-[3px] border-b-[3px] border-zinc-900 dark:border-zinc-200">
              Featured
            </div>
          )}

          {/* Header */}
          <header className={`mb-6 ${project.featured ? "mt-6" : "mt-0"}`}>
            <h3 className="text-2xl sm:text-3xl font-bold font-mono text-zinc-900 dark:text-zinc-100 mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base font-mono text-zinc-600 dark:text-zinc-400">
              {project.subtitle}
            </p>
          </header>

          {/* Image */}
          <img
            className="w-full h-auto object-cover border-[3px] border-zinc-900 dark:border-zinc-200 mb-8 bg-zinc-800"
            src={project.img}
            alt={`${project.title} interface`}
          />

          <div className="flex flex-col gap-8">
            {/* Why Build Section */}
            <section>
              <h4 className="text-violet-500 font-mono text-sm font-bold tracking-widest uppercase mb-3">
                Why Build
              </h4>
              <div className="border-l-4 border-violet-500 pl-4">
                <p className="text-zinc-800 dark:text-zinc-300 text-base sm:text-lg font-medium leading-relaxed">
                  {project.why_build}
                </p>
              </div>
            </section>

            {/* What I Built Section */}
            <section>
              <h4 className="text-green-600 font-mono text-sm font-bold tracking-widest uppercase mb-3">
                What I Built
              </h4>
              <div className="border-l-4 border-green-600 pl-4">
                <p className="text-zinc-800 dark:text-zinc-300 text-base sm:text-lg font-medium leading-relaxed">
                  {project.what_i_built}
                </p>
              </div>
            </section>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-3 mt-2">
              {project.tech.map((t) => (
                <span
                  key={t.name}
                  className={`${t.bg} text-white px-3 py-1 text-xs sm:text-sm font-mono font-semibold border-[3px] border-zinc-900 dark:border-zinc-200`}
                >
                  {t.name}
                </span>
              ))}
            </div>

            {/* Website Link */}
            <footer className="mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline underline-offset-4"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                website
              </a>
            </footer>
          </div>
        </article>
      ))}
    </div>
  );
}
