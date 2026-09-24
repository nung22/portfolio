import { useState } from "react";
import profilePic from "@/assets/headshots/headShot.jpg";
import Python_badge from "@/assets/icons/Python_badge.png";
import Bootstrap_badge from "@/assets/icons/Bootstrap_badge.png";
import CSS_badge from "@/assets/icons/CSS_badge.png";
import HTML5_badge from "@/assets/icons/HTML5_badge.png";
import Java_badge from "@/assets/icons/Java_badge.png";
import Javascript_badge from "@/assets/icons/Javascript_badge.png";
import MUI_badge from "@/assets/icons/MUI_badge.png";
import Flask_badge from "@/assets/icons/Flask_badge.png";
import MySQL_badge from "@/assets/icons/MySQL_badge.png";
import NodeJS_badge from "@/assets/icons/NodeJS_badge.png";
import MongoDB_badge from "@/assets/icons/MongoDB_badge.png";
import SpringBoot_badge from "@/assets/icons/SpringBoot_badge.png";
import Tailwind_badge from "@/assets/icons/Tailwind_badge.png";
import React_badge from "@/assets/icons/React_badge.png";
import Typescript_badge from "@/assets/icons/Typescript_badge.png";
import Git_badge from "@/assets/icons/Git_badge.png";

export default function About() {
  const skills = [
    { src: HTML5_badge, label: "HTML5" },
    { src: CSS_badge, label: "CSS" },
    { src: Javascript_badge, label: "Javascript" },
    { src: Typescript_badge, label: "Typescript" },
    { src: Python_badge, label: "Python" },
    { src: Java_badge, label: "Java" },
    { src: React_badge, label: "React" },
    { src: Flask_badge, label: "Flask" },
    { src: SpringBoot_badge, label: "Spring Boot" },
    { src: NodeJS_badge, label: "Node.js" },
    { src: MongoDB_badge, label: "MongoDB" },
    { src: MySQL_badge, label: "MySQL" },
    { src: MUI_badge, label: "Material UI" },
    { src: Bootstrap_badge, label: "Bootstrap" },
    { src: Tailwind_badge, label: "TailwindCSS" },
    { src: Git_badge, label: "Git" },
  ];

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex flex-col gap-12 items-center">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start h-fit text-sm sm:text-base gap-8 max-w-320px sm:max-w-42rem">
        <img
          src={profilePic}
          alt="Nicholas Ung headshot"
          decoding="async"
          ref={(el) => {
            if (el?.complete) setLoaded(true);
          }}
          onLoad={() => setLoaded(true)}
          className={`bg-zinc-300 dark:bg-zinc-800 w-48 h-48 sm:w-56 sm:h-56 object-cover shrink-0 border transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="flex flex-col gap-5 text-zinc-700 dark:text-zinc-300 leading-relaxed text:sm sm:text-xs">
          <p>
            I started my journey as a programmer by writing Python scripts to
            visualize proteogenomic data for biochemistry research at UCLA. That
            position taught me how to turn chaotic datasets into clear
            interfaces: a mindset I now bring to full-stack development.
          </p>
          <p>
            While earning my M.S. in Computer Science at Northeastern
            University, I guided a frontend migration at{" "}
            <a
              href="https://www.policyengine.org/us/"
              target="_blank"
              className="font-bold underline"
            >
              PolicyEngine
            </a>
            , shipped React components for{" "}
            <a
              href="https://opensearch.org/"
              target="_blank"
              className="font-bold underline"
            >
              AWS OpenSearch
            </a>
            , and built real-time telemetry applications at{" "}
            <a
              href="https://www.jt4llc.com/what-we-do/"
              target="_blank"
              className="font-bold underline"
            >
              JT4
            </a>
            .
          </p>
          <p>
            My engineering philosophy is simple: prioritize quality, simplicity,
            and maintainability over a rushed fix. I do my best work with
            collaborative teams who care deeply about the end user, and I am
            ready to bring that perspective to my next role.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-42rem">
        <h2 className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
          Technical Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="flex items-center gap-2 px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors shadow-sm"
            >
              <img
                className="h-5 w-5 object-contain"
                src={skill.src}
                alt={`${skill.label} icon`}
              />
              <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
