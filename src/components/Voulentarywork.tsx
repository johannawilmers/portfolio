type voulentaryExperiences = {
  title: string;
  place: string;
  duration: string;
  description: string;
};

const allVoulentaryExperiences: voulentaryExperiences[] = [
  {
    title: "Financial manager",
    place: "Student organization, Online",
    duration: "March 2023-",
    description:
      "I have the main responsibility for the finances of online. This includes, among other things, creating a budget, accounting, submitting VAT notices and outsourcing.",
  },
  {
    title: "Member of the board",
    duration: "March 2023 -",
    place: "Student organization, Online",
    description:
      "I sit on the board as financial manager for the line association. The Executive Board is responsible for the overall operation of the line association.",
  },
  {
    title: "Member of the Banking and finance committee",
    duration: "August 2021 -",
    place: "Student organization, Online",
    description:
      "The Banking and finance committee manages the finances of the student organization. I sat in the committee as a representative of Office management committee and the Welcoming comittee.",
  },
  {
    title: "Financial manager of the Office management committee",
    duration: "August 2021 - March 2023",
    place: "Student organization, Online",
    description:
      "I was responsible for running the committee's finances by creating a budget, auditing and accounting. The programs we use for this are dnb, stripe and fiken.",
  },
  {
    title: "Member of the Office management committee",
    duration: "August 2021 - ",
    place: "Student organization, Online",
    description:
      "The Office management comittee runs the kiosk in our office and arranges low-threshold events for members of the Online student organization.",
  },
  {
    title: "Financial manager of the Welcoming committee",
    duration: "January 2022 - January 2023",
    place: "Student organization, Online",
    description:
      "I was responsible for running the committee's finances by creating a budget, auditing and accounting. The programs we use for this are dnb, stripe and fiken.",
  },
  {
    title: "Member of the Welcoming committee",
    duration: "January 2022 - January 2023",
    place: "Student organization, Online",
    description:
      "The welcoming comittee arranges the 'fadder-weeks' for the new students in Online student organization. ",
  },
  {
    title: "Member of FeminIT (Females in IT)",
    duration: "January 2022 -",
    place: "Student organization, Online",
    description:
      "Feminit's goal is to get fewer girls and non-binary people to drop out of Informatics studies. We try to achieve this by arranging events to gain a wider network and increase well-being among girls and non-binary students in Online student organization. ",
  },
  {
    title: "Social media manager",
    duration: "August 2021 - June 2022",
    place: "Ascend NTNU",
    description:
      "Ascend NTNU is an aerial robotics team at NTNU, developing innovative solutions for world-class competitions in drone cybernetics. I managed the organizations social media accounts such as Instagram, Facebook and LinkedIn. ",
  },
];
function Work() {
  return (
    <>
      <h1>Voulentary work</h1>
      <div>
        {allVoulentaryExperiences.map((experience) => (
          <div>
            <h3>{experience.title}</h3>
            <h5>{experience.place}</h5>
            <p>{experience.duration}</p>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Work;
