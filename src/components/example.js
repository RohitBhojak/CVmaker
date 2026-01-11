const example = {
  personal: {
    name: "Rohit Singh Bhojak",
    email: "rohitbhojak99@gmail.com",
    phone: "8882329599",
    links: ["github.com/RohitBhojak", "linkedin.com/in/rohit-bhojak"],
  },
  education: [
    {
      id: 1,
      school: "GCET, AKTU",
      degree: "B.Tech, Computer Science and Design",
      startDate: "2022-09",
      endDate: "2026-05",
      marks: "8.04",
    },
    {
      id: 2,
      school: "CBSE",
      degree: "Intermediate",
      startDate: "2020-09",
      endDate: "2021-05",
      marks: "95.0%",
    },
    {
      id: 3,
      school: "CBSE",
      degree: "High School",
      startDate: "2018-09",
      endDate: "2019-05",
      marks: "95.2%",
    },
  ],
  projects: [
    {
      id: 1,
      name: "Algorithm Visualizer",
      link: "https://rohitbhojak.github.io/Algorithm-Visualizer",
      description:
        "Developed an interactive web app to visualize sorting and searching algorithms with step-by-step animations.\nBuilt a custom visualization module to enable easy integration of new algorithms.\nDesigned interactive UI to control algorithm type, speed, and array size, enhancing user experience.",
    },
    {
      id: 2,
      name: "DoTODO",
      link: "https://github.com/RohitBhojak/DoTODO",
      description:
        "Developed a responsive, terminal-themed to-do list app using vanilla JavaScript, HTML and CSS.\nArchitected a modular, loosely-coupled codebase with OOP and SOLID design principles.\nImplemented CRUD, dynamic filters, and persistent storage, bundling all modules with Webpack.",
    },
    {
      id: 3,
      name: "Battleship",
      link: "https://github.com/RohitBhojak/Battleship",
      description:
        "Architected a modular, loosely-coupled Battleship game with clean separation of concerns.\nApplied Test-Driven Development (TDD) to ensure reliability and maintainability.\nDesigned a smart AI opponent, significantly enhancing gameplay difficulty and user engagement",
    },
  ],
  skills: [
    { id: 1, title: "Languages", description: "Java, JavaScript, SQL, C/C++, Python" },
    {
      id: 2,
      title: "Development",
      description: "HTML, CSS, React, Tailwind, Git, Bash, Webpack, Jest",
    },
  ],
  achievements: {
    id: 1,
    description:
      "Solved 650+ problems on LeetCode across data structures and algorithms.\nAchieved a LeetCode Rating of 1700+, ranked in the top 10% globally.\nSecured a highest contest rank of 1888 in LeetCode Weekly/Global contests.",
  },
  experience: [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Consint Solutions Private Limited",
      startDate: "2025-11",
      endDate: "2026-02",
      description:
        "Working on a React codebase for a large-scale health insurance web platform under development.\nResolve UI/UX issues and functional bugs reported by testers and clients, improving usability and reliability.\nRefactor existing components to make them more maintainable, extensible, and efficient.",
    },
  ],
};

export default example;
