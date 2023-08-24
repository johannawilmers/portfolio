import s from "./Projects.module.css";
import fitshareUrl from "../assets/fitshare.png";
import periodtrackerUrl from "../assets/periodtracker.png";
import quarantinehotelUrl from "../assets/quarantinehotel.png";
import portfolioUrl from "../assets/portfolio.png";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  repositoryLink: string;
};

const allProjects: Project[] = [
  {
    title: "Portfolio",
    description:
      "This is the website you are currently on. The purpose of the project was to collect all my information that is relevant for potential employers on a website.",
    imageUrl: portfolioUrl,
    repositoryLink: "https://github.com/johannawilmers/portfolio",
  },
  {
    title: "Fitshare",
    description:
      "This project was for the course TDT4140 'Programvareutvikling'. The group fulfilled a training application with a focus on and the social the aspect. In the application, you are able to create and share training programs, add friends, join groups and interact with friends and group members through likes and comments.",
    imageUrl: fitshareUrl,
    repositoryLink: "",
  },
  {
    title: "Period tracker",
    description:
      "This web application was a java project, made in the course IT1901 'ITprosjekt 1'. We were a group of four girls, so naturally we madesomething that we all couls get use of; a period calender. The application was made to track the monthly period cycle by plotting inpain, bleeding amount, mood and other things every day.",
    imageUrl: periodtrackerUrl,
    repositoryLink: "",
  },
  {
    title: "Quarantine hotel",
    description:
      "The Quarantine hotel app was a java project in the course TDT4100 'Objektorientert programmering'. We were a group og two that in the spring semester of 2022 made this app woth object oriented programmingin Java.",
    imageUrl: quarantinehotelUrl,
    repositoryLink: "",
  },
];

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className={s.projectsWrapper}>
        {allProjects.map((project) => (
          <div className={s.projectDiv}>
            <h3>{project.title}</h3>
            <img className={s.projectImg} src={project.imageUrl} alt="" />
            <p>{project.description}</p>
            <a href={project.repositoryLink}>View repository</a>
          </div>
        ))}
      </div>
    </>
  );
}
export default Projects;
