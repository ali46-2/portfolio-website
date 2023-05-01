import Skill from "./Skill";

export default function Skills({ theme }) {
  return (
    <div
      id="skills"
      className="w-full pt-24 lg:p-0 lg:h-screen flex flex-col justify-center items-center"
    >
      <div className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider highlight-transition p-4">
        My Skills
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-4 lg:pb-0">
        <Skill path="/skills/python.svg" name="Python" size={70} />
        <Skill path="/skills/pytorch.svg" name="PyTorch" size={70} />
        <Skill path="/skills/tensorflow.svg" name="TensorFlow" size={55} />
        <Skill path="/skills/scikitlearn.svg" name="Scikit-Learn" size={70} />
        <Skill path="/skills/numpy.svg" name="Numpy" size={70} />
        <Skill path="/skills/pandas.svg" name="Pandas" size={70} />
        <Skill path="/skills/matplotlib.svg" name="Matplotlib" size={70} />
        <Skill path="/skills/opencv.svg" name="OpenCV" size={70} />
        {theme == "dark" ? (
          <Skill
            path="/skills/amazonwebservices-wordmark-darkmode.svg"
            name="AWS"
            size={70}
          />
        ) : (
          <Skill
            path="/skills/amazonwebservices-wordmark.svg"
            name="AWS"
            size={70}
          />
        )}
        <Skill path="/skills/docker.svg" name="Docker" size={70} />
        <Skill path="/skills/jenkins.svg" name="Jenkins" size={70} />
        <Skill path="/skills/flask.svg" name="Flask" size={70} />
        <Skill path="/skills/mongodb.svg" name="MongoDB" size={70} />
        <Skill path="/skills/mysql-wordmark.svg" name="MySQL" size={70} />
        <Skill path="/skills/file-type-cpp3.svg" name="C++" size={70} />
        <Skill path="/skills/javascript.svg" name="JavaScript" size={70} />
        <Skill path="/skills/react.svg" name="React JS" size={70} />
        <Skill path="/skills/tailwindcss.svg" name="Tailwind" size={70} />
        <Skill path="/skills/html5.svg" name="HTML" size={70} />
        <Skill path="/skills/css3.svg" name="CSS" size={70} />
      </div>
    </div>
  );
}
