import AboutSection from "./AboutSection";

export default function About() {
  const education_details = [
    {
      name: "National University of Computer and Emerging Sciences",
      timePeriod: "Aug 2019 - Jun 2023",
      title: "BS, Artificial Intelligence",
      location: "Islamabad, Pakistan",
      points: [
        "3.65/4.00 GPA",
        "Awarded with a silver medal for achieving 2nd highest semester-GPA in my batch from my department.",
      ],
    },
  ];

  const exeperience_details = [
    {
      name: "Fiverr",
      timePeriod: "Jan 2022 - Present",
      title: "Data Scientist",
      location: "",
      points: [
        "Completed 15+ orders with an average rating of 5.0/5.0 stars",
        "Developed and trained machine learning models using PyTorch and scikit-learn.",
        "Preprocessed, analyzed, and visualized data.",
      ],
    },
  ];

  const certification_details = [
    {
      name: "DeepLearning.AI TensorFlow Developer Specialization",
      timePeriod: "Mar 2023",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      timePeriod: "Jun 2022",
    },
    {
      name: "German Language: Level A1",
      timePeriod: "Dec 2018",
    },
  ];

  return (
    <div
      id="about"
      className="max-w-[900px] h-screen min-h-[900px] flex flex-col justify-center mx-auto p-4"
    >
      <AboutSection heading={"education"} detailsArr={education_details} />
      <AboutSection
        heading={"work experience"}
        detailsArr={exeperience_details}
      />
      <AboutSection
        heading={"certifications"}
        detailsArr={certification_details}
      />
    </div>
  );
}
