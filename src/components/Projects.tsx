import s from "./Projects.module.css";
import fitshareUrl from "../assets/fitshare.png";
import periodtrackerUrl from "../assets/periodtracker.png";
import quarantinehotelUrl from "../assets/quarantinehotel.png";
import portfolioUrl from "../assets/portfolio.png";
import moviemingleUrl from "../assets/moviemingle.png";
import wineopediaUrl from "../assets/wineopedia.png";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
};

const allProjects: Project[] = [
  {
    title: "Summer internship- Bluemoni",
    description:
      "My summer project focused on developing a dashboard designed to display live measurement data in real-time. The project required a robust backend, so I primarily used Python to handle data processing and integration tasks. For the frontend, I worked with JavaScript, HTML, and CSS to create an intuitive and responsive user interface. This combination of technologies allowed me to bridge the gap between efficient data handling and user-friendly design. Through this project, I not only enhanced my technical skills but also gained significant experience in full-stack development, particularly in balancing backend functionality with frontend usability. The knowledge and insights I acquired have been invaluable, and I feel well-prepared to tackle similar challenges in the future",
    imageUrl: "",
  },
  {
    title: "Kvaliteket",
    description:
      "For my bachelor’s thesis, I collaborated with Trondheim Municipality to develop a search engine aimed at improving information retrieval within their internal procedures. The project was undertaken by a team of seven students, allowing us to work closely together and gain hands-on experience in effective teamwork and collaboration. This project not only sharpened my technical skills in building search functionalities but also provided me with invaluable insights into the dynamics of working within a team to achieve a common goal. The experience has significantly contributed to my ability to work effectively in collaborative environments.",
    imageUrl: "",
  },
  {
    title: "Moviemingle",
    description:
      "Moviemingle was the second and final project in IT2810. The project is a fullstack application with our own database and backend. The user interface is made with React, TypeScript and Material UI. The entire project is set up with Vite. The project has a custom developed GraphQL API, and there is a MongoDB database set up by the group. ",
    imageUrl: moviemingleUrl,
  },
  {
    title: "Wineopedia",
    description:
      "Wineopedia was the first project in IT2810. The data is fetched from Vinmonopolet's API. The application was made with React, TypeScript, vite, React Query and Material UI",
    imageUrl: wineopediaUrl,
  },
  {
    title: "Portfolio",
    description:
      "This is the website you are currently on. The purpose of the project was to collect all my information that is relevant for potential employers on a website.",
    imageUrl: portfolioUrl,
  },
  {
    title: "Fitshare",
    description:
      "This project was for the course TDT4140 'Programvareutvikling'. The group fulfilled a training application with a focus on and the social the aspect. In the application, you are able to create and share training programs, add friends, join groups and interact with friends and group members through likes and comments.",
    imageUrl: fitshareUrl,
  },
  {
    title: "Period tracker",
    description:
      "This web application was a java project, made in the course IT1901 'ITprosjekt 1'. We were a group of four girls, so naturally we madesomething that we all couls get use of; a period calender. The application was made to track the monthly period cycle by plotting inpain, bleeding amount, mood and other things every day.",
    imageUrl: periodtrackerUrl,
  },
  {
    title: "Quarantine hotel",
    description:
      "The Quarantine hotel app was a java project in the course TDT4100 'Objektorientert programmering'. We were a group og two that in the spring semester of 2022 made this app woth object oriented programmingin Java.",
    imageUrl: quarantinehotelUrl,
  },
];

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <div className={s.projectsWrapper}>
        {allProjects.map((project) => (
          <>
            <div className={s.projectDiv}>
              <h3>{project.title}</h3>
              <img className={s.projectImg} src={project.imageUrl} alt="" />
              <p>{project.description}</p>
            </div>
          </>
        ))}
      </div>
      <div>
        <a href="https://github.com/johannawilmers">
          View repositories on Github
        </a>
      </div>
    </>
  );
}
export default Projects;
