const example = {
  personal: {
    name: "Rohit Singh Bhojak",
    email: "rohitbhojak99@gmail.com",
    phone: "+91-8882329599",
    github: "github.com/RohitBhojak",
    linkedin: "linkedin.com/in/rohit-bhojak",
  },
  education: [
    {
      school: "Galgotias College of Engineering and Technology, AKTU",
      degree: "Bachelor of Technology in Computer Science and Design",
      startDate: "2022",
      endDate: "2026",
      description:
        "CGPA: 8.04\n\
      Relevant Coursework: Data Structures and Algorithms, Object Oriented Programming, Operating Systems, Computer Networks, Database Management Systems",
    },
    {
      school: "Angels Public School, CBSE",
      degree: "Intermediate",
      startDate: "2020",
      endDate: "2021",
      description: "Percentage: 95.0%",
    },
    {
      school: "Angels Public School, CBSE",
      degree: "High School",
      startDate: "2018",
      endDate: "2019",
      description: "Percentage: 95.2%",
    },
  ],
  projects: [
    {
      name: "Algorithm Visualizer",
      link: "https://github.com/RohitBhojak/Algorithm-Visualizer",
      description:
        "Developed an interactive web app to visualize sorting and searching algorithms with step-by-step animations.\n\
      Built a custom visualization module to enable easy integration of new algorithms.\n\
      Designed interactive UI to control algorithm type, speed, and array size, enhancing user experience.",
    },
    {
      name: "DoTODO",
      link: "https://github.com/RohitBhojak/DoTODO",
      description:
        "Developed a responsive, terminal-themed to-do list app using vanilla JavaScript, HTML and CSS.\n\
      Architected a modular, loosely-coupled codebase with OOP and SOLID design principles.\n\
      Implemented CRUD, dynamic filters, and persistent storage, bundling all modules with Webpack.",
    },
    {
      name: "Battleship",
      link: "https://github.com/RohitBhojak/Battleship",
      description:
        "Architected a modular, loosely-coupled Battleship game with clean separation of concerns.\n\
      Applied Test-Driven Development (TDD) to ensure reliability and maintainability.\n\
      Designed a smart AI opponent, significantly enhancing gameplay difficulty and user engagement",
    },
  ],
  skills: [
    { title: "Languages", description: "Java, JavaScript, SQL, C/C++, Python" },
    {
      title: "Development",
      description: "HTML, CSS, React, Tailwind, Git, Bash, Webpack, Jest",
    },
  ],
  extras: [
    {
      heading: "Open Source Contributions",
      content: [
        {
          title: "openSUSE",
          description:
            "Contributed to openSUSE’s Uyuni project by resolving SonarCloud-reported issues in legacy Java code.\n\
      Improved code quality by refactoring outdated patterns and applying modern Java best practices.\n\
      Maintained a clean Git history by rebasing and squashing commits as per open source standards.",
        },
      ],
    },
  ],
};

export default example;
