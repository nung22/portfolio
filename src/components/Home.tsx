import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import FleaFlickr from "@/assets/projects/FleaFlickr.webp";
import ChowCounter from "@/assets/projects/ChowCounter.webp";
import ILS from "@/assets/projects/ILS.webp";
import "./Home.css";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mb-12 relative">
      {!loaded && (
        <div className="flex justify-center items-center absolute inset-0 z-40 bg-white dark:bg-zinc-900 min-h-280">
          <svg
            className="animate-spin h-10 w-10 text-blue-500 pb-96"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}

      <div className="flex flex-col items-center gap-10">
        <div className="flex justify-center mt-8 sm:mt-16 z-30 relative top-5 mr-8 sm:mx-0">
          <div className="flex flex-col gap-3 sm:gap-6 translate-x-7 sm:translate-x-2 z-30 pr-2 max-w-[360px] sm:max-w-160">
            <p className="text-base sm:text-xl font-semibold">
              Hello, my name is
            </p>
            <p className="text-2xl sm:text-5xl font-bold">Nicholas Ung</p>
            <p className="text-l sm:text-3l font-semibold">
              Software Engineer / Full Stack Developer.
            </p>
            <p className="text-base sm:text-2xl font-light">
              My passion lies in solving business problems through a
              human-centered approach. I specialize in developing and
              occasionally designing digital experiences.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12 sm:mt-16 z-30">
          <div className="flex flex-col gap-3 sm:gap-10 sm:translate-x-6 z-50 w-10/12 sm:w-fit">
            <Link
              to={"/about"}
              className="flex items-center gap-1 sm:gap-2 text-lg sm:text-2xl hover:text-blue-500 transition-colors w-fit"
            >
              <p>View profile</p>
              <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
            <h2 className="font-bold text-xl sm:text-3xl">Selected Work</h2>

            {[
              {
                href: "https://www.infinitelifestylesolutions.org/",
                img: ILS,
                alt: "Infinite Lifestyle Solutions ScreenShot",
                title: "Infinite Lifestyle Solutions",
                desc: "An organization for transforming lives affected by violence through restorative practices and art therapy",
              },
              {
                href: "https://github.com/nung22/fleaflickr",
                img: FleaFlickr,
                alt: "FleaFlickr ScreenShot",
                title: "FleaFlickr",
                desc: "An issue tracker and project management software",
              },
              {
                href: "https://github.com/nung22/chow-counter",
                img: ChowCounter,
                alt: "Chow Counter ScreenShot",
                title: "Chow Counter",
                desc: "A calorie-tracking app with built-in tools to discover new restaurants and recipes",
              },
            ].map((work) => (
              <a
                key={work.title}
                href={work.href}
                className="flex flex-col sm:flex-row gap-5 text-xl group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="rounded-lg object-cover w-full max-w-90 h-auto"
                  src={work.img}
                  alt={work.alt}
                />
                <div className="flex flex-col justify-between sm:w-72">
                  <h4 className="text-lg sm:text-2xl font-semibold group-hover:text-blue-500 transition-colors">
                    {work.title}
                  </h4>
                  <p className="text-sm sm:text-base my-3 sm:my-0">
                    {work.desc}
                  </p>
                  <div className="flex gap-1 sm:gap-2 items-center group-hover:text-blue-500 transition-colors">
                    <p className="text-sm sm:text-base font-semibold">
                      Read more
                    </p>
                    <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[16.5rem] sm:mt-0 w-[360px] sm:w-[40rem] sm:top-[28rem] -ml-[2.5rem] pointer-events-none">
        <div
          id="left-box"
          className="flex items-center rotate-90 rounded-full w-24 h-24 sm:w-36 sm:h-36 z-20 -translate-x-3 sm:translate-x-0"
        />
        <div
          id="middle-box"
          className="flex items-center rotate-90 rounded-full w-40 h-40 sm:w-80 sm:h-80 z-10"
        />
        <div
          id="right-box"
          className="flex items-center rotate-90 rounded-full w-24 h-24 sm:w-48 sm:h-48 mt-24 z-0 translate-x-5 sm:translate-x-0"
        />
      </div>
    </div>
  );
}
