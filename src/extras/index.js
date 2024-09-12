import{
  FullstackDev, ComputerGraph, VideoG, SuperDry, VRH, LS
} from "../Assets";

const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
  ];

const interests = [
    {
      title: "Full-Stack Development",
      icon: FullstackDev,
    },
    {
      title: "Video Game Development",
      icon: VideoG,
    },
    {
      title: "Computer Graphics",
      icon: ComputerGraph,
    }
  ];

const projects = [
  {
    name: "Lickety-Split",
    description:
      "Collaborated on a 2D RPG built in Unity using C#, designed to allow a character to pursue a thrilling western adventure, gamespawn project during winter 2024",
    date: "Jan 2024 - Mar 2024",
    points: [],
    image: LS,
    source_link: "https://github.com/NikOhNo/lickety-split",
  },
    {
      name: "Super Dry",
      description:
        "A video game built in Unity using C#, gameplay of a cactus fighting other cactuses followed by an antagonistic boss fight",
      date: "Mar 2023 - Jun 2023",
      points: [],
      image: SuperDry,
      source_link: "https://github.com/MidnightHorse/Portfolio2024/tree/main/Unity/Super-Dry",
    },
    {
      name: "Virtual Reality Horror",
      description:
        "A 3D video game built in Unity using C#, definitive gameplay of escaping from an otherworldy alien, find jerry cans and refill your vehicle to escape.",
      date: "Nov 2022 - Dec 2022",
      points: [],
      image: VRH,
      source_link: "https://github.com/MidnightHorse/Portfolio2024/tree/main/Unity/VirtualReality",
    },
  ];

  export {navLinks, interests, projects}