export const mySkills = [
  {
    name: "VueJS",
    level: "85%",
    available: true,
  },
  {
    name: "ReactJS",
    level: "70%",
    available: true,
  },

  {
    name: "NodeJS",
    level: "70%",
    available: true,
  },
  {
    name: "JavaScript",
    level: "85%",
    available: true,
  },
  {
    name: "C++",
    level: "0",
    available: false,
  },
  {
    name: "C",
    level: "0",
    available: false,
  },
  {
    name: "Swift",
    level: "0",
    available: false,
  },
  {
    name: "Flutter",
    level: "65%",
    available: false,
  },
  {
    name: "Perl",
    level: "0",
    available: false,
  },
  {
    name: "Lisp",
    level: "0",
    available: false,
  },
  {
    name: "GoLang",
    level: "40%",
    available: true,
  },
  {
    name: "Spring Boot",
    level: "0",
    available: false,
  },
  {
    name: "Ruby on Rails",
    level: "0",
    available: false,
  },
  {
    name: "MongoDB",
    level: "75%",
    available: true,
  },
  {
    name: "TypeScript",
    level: "40%",
    available: true,
  },
  {
    name: "MySQL",
    level: "60%",
    available: true,
  },
  {
    name: "Clojure",
    level: "0",
    available: false,
  },
];

export const numberOfAvailableSkills = mySkills.reduce((acc, skill) => {
  if (skill.available) {
    return acc + 1;
  }
  return acc;
}, 0);
