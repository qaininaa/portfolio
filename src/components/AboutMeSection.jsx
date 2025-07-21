const hobbies = [
  { name: "Read Novel", icon: "📕" },
  { name: "Listening to Music", icon: "🎧" },
  { name: "Shopping", icon: "🛒" },
];

const AboutMeSection = () => {
  return (
    <section>
      <h1 className="text-orange-400 text-4xl font-semibold my-10">About Me</h1>

      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        <div className="md:max-w-1/2 text-left">
          <h2 className="text-white text-4xl mb-6 font-semibold">I Love...</h2>
          {/* Hobbies */}
          <div className="flex flex-wrap gap-4 w-full items-center">
            {hobbies.map((hobby, i) => (
              <div
                key={i}
                className="bg-white w-fit h-fit py-2 px-4 rounded-full text-red-600 font-medium flex items-center gap-2"
              >
                <span>{hobby.icon}</span>
                {hobby.name}
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Projects */}
        <div className="flex flex-col md:flex-row gap-5 text-white items-center justify-center">
          <div className="bg-red-700 w-52 h-52 flex flex-col justify-center items-center gap-4 text-center rounded-xl">
            <h2 className="text-6xl font-semibold">3+</h2>
            <h3 className="text-lg">Years Learning Experience</h3>
          </div>
          <div className="bg-red-700 w-52 h-52 flex flex-col justify-center items-center gap-4 text-center rounded-xl">
            <h2 className="text-6xl font-semibold">5+</h2>
            <h3 className="text-lg">Personal Projects Completed</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
