type workExperiences = {
  title: string;
  place: string;
  duration: string;
  description: string;
};

const allWorkExperiences: workExperiences[] = [
  {
    title: "Teaching Assistant in IT2805",
    place: "NTNU, Trondheim",
    duration: "August 2022-",
    description:
      "Helped students understand the basics of web development. Graded and returned assignments.",
  },
  {
    title: "Teaching Assistant in IT1901, NTNU, Trondheim",
    place: "NTNU, Trondheim",
    duration: "August 2023-",
    description:
      "Assisted project groups in their java project. Graded and returned assignments.",
  },
  {
    title: "Program representative, NTNU, Trondheim",
    place: "NTNU, Trondheim",
    duration: "January 2023 - June 2023",
    description:
      "Trustee for Bachelor in Informatics program at NTNU. The role involves collecting and passing on feedback from students to professors and subject staff.",
  },
  {
    title: "Shop assistant",
    place: "Mester grønn, Moholt, Trondheim",
    duration: "August 2021 - December 2021",
    description:
      "Permanent substitute position from August 2021 to January 2022",
  },
  {
    title: "Shop assistant",
    place: "Mester grønn, Trekanten, Asker",
    duration: "June 2020 - July 2021",
    description:
      "My role consisted of many different tasks. I am used to fast pace and long days. I have gained valuable insight into customer service and plant care. I became the ”service hero” of the month February 2021.",
  },
  {
    title: "Trainer, Asker skiklubb",
    place: "Asker skiklubb, Asker",
    duration: "February 2017 - June 2021",
    description:
      "Trainer for children between the ages of 9 and 12 in athletics",
  },
];
function Work() {
  return (
    <>
      <h1>Work experience</h1>
      <div>
        {allWorkExperiences.map((experience) => (
          <div>
            <div>
              <h3>{experience.title}</h3>
              <h5>{experience.place}</h5>
              <p>{experience.duration}</p>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Work;
