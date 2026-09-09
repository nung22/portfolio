import { useState, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import FleaFlickr from "@/assets/projects/FleaFlickr.webp";
import ChowCounter from "@/assets/projects/ChowCounter.webp";
import ILS from "@/assets/projects/ILS.webp";

export default function Work() {
  return (
    <div className="flex justify-center mt-8 mb-12 relative">
      <div className="flex flex-col gap-3 sm:gap-8 sm:translate-x-2 max-w-2xl w-full px-4 sm:px-0">
        <h3 className="text-lg sm:text-2xl">
          A selection of recent and past projects
        </h3>

        {[
          {
            href: "https://www.infinitelifestylesolutions.org/",
            img: ILS,
            title: "Infinite Lifestyle Solutions",
            desc: "An organization for transforming lives affected by violence through restorative practices and art therapy",
          },
          {
            href: "https://github.com/nung22/fleaflickr",
            img: FleaFlickr,
            title: "FleaFlickr",
            desc: "An issue tracker and project management software",
          },
          {
            href: "https://github.com/nung22/chow-counter",
            img: ChowCounter,
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
              className="rounded-lg object-cover w-full max-w-[360px] h-auto"
              src={work.img}
              alt={`${work.title} ScreenShot`}
            />
            <div className="flex flex-col justify-between sm:w-72">
              <h4 className="text-lg sm:text-2xl font-semibold group-hover:text-blue-500 transition-colors">
                {work.title}
              </h4>
              <p className="text-sm sm:text-base my-3 sm:my-0">{work.desc}</p>
              <div className="flex gap-1 sm:gap-2 items-center group-hover:text-blue-500 transition-colors">
                <p className="text-sm sm:text-base font-semibold">Read more</p>
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
