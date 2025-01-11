// styles
import { cn } from "@/utils/cn";

// components
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import ProjectItem from "./components/ProjectItem";

// images
import project1 from "/public/home/projects/web-studio.jpg";
import project2 from "/public/home/projects/o-americana.jpg";
import project3 from "/public/home/projects/todo-list.jpg";

// next intl
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("HomePage.projects");

  const projects = [
    {
      project: "project1",
      link: "https://prime-x-studio.ru/",
      image: project1,
    },
    {
      project: "project2",
      link: "https://oamericana.com/",
      image: project2,
    },
    {
      project: "project3",
      link: "/todo-list",
      image: project3,
    },
  ] as const;

  return (
    <section id="projects">
      <SectionTitle text={t("title")} />

      <ul className={cn("space-y-18", "sm:space-y-22", "lg:sm:space-y-28")}>
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectItem
              index={index}
              title={t(`projectList.${project.project}.title`)}
              description={t(`projectList.${project.project}.description`)}
              link={project.link}
              imageSrc={project.image}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
