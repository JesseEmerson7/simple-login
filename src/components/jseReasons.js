const Reasons = ({ setPage }) => {
  const reasons = [
    {
      title: "Hard work ethic",
      text: "I consistently contribute my utmost effort, giving my full dedication to any team I am a part of.",
    },
    {
      title: "Quick learner",
      text: "I enjoy acquiring and honing new skills through continuous learning and development.",
    },
    {
      title: "Effective communication skills",
      text: "I prioritize maintaining open and transparent communication with both colleagues and customers.",
    },
    {
      title: "Team player",
      text: "I am able to collaborate and contribute positivity to a team improving overall productivity.",
    },
    {
      title: "Problem-Solving Ability",
      text: "I thrive on challenges and am always seeking innovative and creative approaches to problem-solving.",
    },
    {
      title: "Passionate",
      text: "I am passionate about software development and all things IT related. I feel accomplished creating elegant software applications.",
    },
    {
      title: "Experience building full-stack applications",
      text: "I have experience working on full-stack web applications within a remote team setting. My responsibilities included constructing user interfaces, developing APIs, and executing database queries.",
    },
    {
      title: "Adaptable",
      text: "One of my biggest strengths is being adaptable and staying calm under pressure. Always collecting my thoughts and making a measured decision.",
    },
    {
      title: "Leadership skills",
      text: "I have a history of leadership, having led teams in past roles, and I've also gained practical experience in building web applications during my academic pursuits.",
    },
    {
      title: "Goal oriented",
      text: "With my mother being a Realtor I see how technology and automation has benefited Realtors and home owners.  My goal at Florida Realtors is to contribute as a valuable team member and enhance the real estate profession by creating refined and effective software applications.",
    },
  ];
  //back button click
  const handelBack = () => {
    setPage(true);
  };

  return (
    <section className="w-full min-h-screen">
      <div className="w-full lg:w-6/12 xl:w-6/12 md:w-8/12 md:shadow-2xl md:p-16 md:relative md:bottom-24 md:mx-auto md:rounded-sm px-4 pt-2 min-h-screen border-blue-500 border-4 bg-slate-100 text-black fadeIn">
        <h1 className=" text-3xl font-semibold border-b-2 border-blue-500 text-center pb-4">
          10 Reasons to hire Jesse Emerson
        </h1>
        <div>
          {reasons.map(({ title, text }) => {
            return (
              <div className="my-4">
                <h2 className=" font-bold text-lg">{title}:</h2>
                <p className="text-lg">{text}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <button
            className=" border-2 border-blue-600 p-2 text-center mt-10 bg-sky-500 text-black shadow-lg hover:bg-sky-950 hover:text-sky-500 duration-200 hover:shadow-cyan-400 hover:shadow-md bg-opacity-20 rounded-md"
            onClick={handelBack}
          >
            Go back
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
