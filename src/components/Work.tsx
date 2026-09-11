import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/20/solid";
import FleaFlickr from "@/assets/projects/FleaFlickr.png";
import PerfectRep from "@/assets/projects/PerfectRep.png";
import ILS from "@/assets/projects/ILS.webp";

export default function Work() {
  const projects = [
    {
      featured: true,
      title: "PerfectRep",
      subtitle: "AI-Powered Exercise Form Analyzer",
      img: PerfectRep,
      why_build:
        "Athletes often lack access to immediate, objective feedback on their lifting form, which is critical for preventing injury and maximizing physical performance.",
      what_i_created:
        "A computer vision web application leveraging RTMPose models to analyze squat mechanics, calculate joint angles, and generate frame-by-frame visual feedback.",
      tech: [
        { name: "Python", bg: "bg-green-600" },
        { name: "Streamlit", bg: "bg-violet-500" },
        { name: "OpenCV", bg: "bg-green-600" },
        { name: "RTMLib", bg: "bg-violet-500" },
      ],
      active_site: false,
      link: "https://github.com/nung22/PerfectRep",
    },
    {
      featured: true,
      title: "Infinite Lifestyle Solutions",
      subtitle: "Web Platform Overhaul & SEO Optimization",
      img: ILS,
      why_build:
        "The organization needed a modernized digital presence to better connect with individuals affected by violence and expand their restorative practices.",
      what_i_created:
        "A complete frontend overhaul focusing on accessibility, responsive design, and search engine optimization to drive organic traffic.",
      tech: [
        { name: "Fullstack", bg: "bg-green-600" },
        { name: "HTML", bg: "bg-violet-500" },
        { name: "CSS", bg: "bg-green-600" },
        { name: "JavaScript", bg: "bg-violet-500" },
        { name: "SEO", bg: "bg-green-600" },
      ],
      active_site: true,
      link: "https://www.infinitelifestylesolutions.org/",
    },
    {
      featured: false,
      title: "FleaFlickr",
      subtitle: "Issue Tracker & Project Management",
      img: FleaFlickr,
      why_build:
        "Managing complex software projects requires streamlined issue tracking that does not bog down developers with unnecessary or cluttered features.",
      what_i_created:
        "A lightweight, highly responsive project management dashboard designed for quickly tracking bugs, features, and team sprints.",
      tech: [
        { name: "Fullstack", bg: "bg-green-600" },
        { name: "Java", bg: "bg-violet-500" },
        { name: "Spring Boot", bg: "bg-green-600" },
        { name: "AWS EC2", bg: "bg-violet-500" },
        { name: "MySQL", bg: "bg-green-600" },
      ],
      active_site: false,
      link: "https://github.com/nung22/fleaflickr",
    },
  ];

  return (
    <div className="flex flex-col gap-12 mt-6 mb-12 max-w-3xl mx-auto">
      {projects.map((project) => (
        <div key={project.title} className="relative group">
          <div className="absolute inset-0 bg-zinc-900 dark:bg-zinc-200" />
          <article
            className="relative border-[3px] border-zinc-900 dark:border-zinc-200 bg-[#f4f1ea] dark:bg-zinc-900 p-6 sm:p-10 
                       transition-transform duration-200 ease-out 
                       group-hover:-translate-x-2 group-hover:-translate-y-2"
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
                  Why Build?
                </h4>
                <div className="border-l-4 border-violet-500 pl-4">
                  <p className="text-zinc-800 dark:text-zinc-300 text-base sm:text-lg font-medium leading-relaxed">
                    {project.why_build}
                  </p>
                </div>
              </section>

              {/* What I created Section */}
              <section>
                <h4 className="text-green-600 font-mono text-sm font-bold tracking-widest uppercase mb-3">
                  What I created
                </h4>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="text-zinc-800 dark:text-zinc-300 text-base sm:text-lg font-medium leading-relaxed">
                    {project.what_i_created}
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
                  {project.active_site ? (
                    <>
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      website
                    </>
                  ) : (
                    <>
                      <CodeBracketIcon className="w-5 h-5" />
                      source
                    </>
                  )}
                </a>
              </footer>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
