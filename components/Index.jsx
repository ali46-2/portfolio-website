export default function Index() {
  return (
    <div
      id="home"
      className="w-full h-screen min-h-[600px] flex flex-col justify-center items-center p-4"
    >
      <div className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        <p>
          Hi, I'm <span className="highlight-transition">Ali Murtaza</span>
        </p>
        <p className="md:mt-2">A Machine Learning Engineer</p>
      </div>

      <div className="mx-auto max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[800px] text-sm sm:text-base md:text-lg lg:text-xl text-justify">
        <p className="mt-4 md:mt-6 lg:mt-8">
          I am a machine learning engineer and a data scientist who has been
          programming in Python for the past 4 years. My skills include making
          machine learning models and solving complex programming problems.
        </p>

        <p className="mt-4 md:mt-6 lg:mt-8">
          I am a student of National University of Computer and Emerging
          Sciences (also known as FAST), pursuing my bachelor's degree in
          Artificial Intelligence. I am in my final semester with a cummulative
          GPA of 3.65.
        </p>

        <p className="mt-4 md:mt-6 lg:mt-8">
          In addition, I freelance on Fiverr as a Data Scientist by utilizing my
          skills and expertise in Python and machine learning. I have
          accumulated five-star reviews and excellent feedback from many clients
          on the platform.
        </p>
      </div>
    </div>
  );
}
