import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "NGUYEN VAN DUNG",
  initials: "BJ",
  location: "Au Co, Ha Noi",
  locationLink: "https://www.google.com/maps/place/259+%C4%90.+%C3%82u+C%C6%A1,+Qu%E1%BA%A3ng+An,+T%C3%A2y+H%E1%BB%93,+H%C3%A0+N%E1%BB%99i,+Vietnam/@21.0698101,105.8233029,17z/data=!3m1!4b1!4m6!3m5!1s0x3135aaf77554eae1:0xe6173fdc8e65d0c9!8m2!3d21.0698101!4d105.8258778!16s%2Fg%2F11dznwfj57?entry=ttu",
  about:
    "Backend Intern specializing in Java mobile development, with a strong emphasis on learning and honing skills for IT projects.",
  summary:
    "Hi everyone, my name is Nguyen Van Dung, but you can call me vandunxg. I'm a intern studying Infomation Technology at University of Transport Technology. I love learning about new technologies such as Programing Language, Big Data, BlockChain... I want to acquire all the skills I can use for my profession and I want to be a Developer soon. Nice to connect with you!",
  avatarUrl: "https://avatars.githubusercontent.com/u/e?email=nguyenvandung.official%40gmail.com&s=460",
  personalWebsiteUrl: "https://vandunxg.vercel.app",
  contact: {
    email: "vandunxg@gmail.com",
    tel: "+84835595675",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/vandunxg",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vandunxg/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/vandunxg",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Transport Technology",
      degree: "Bachelor's Degree in Information Technology",
      start: "2022",
      end: "2025",
    },
  ],
  work: [
    /*
    {
      
      company: "Parabol",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: [],
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: [],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description: "Creating and testing software for LTE base stations",
    },
    */
  ],
  skills: [
    "C",
    "C++",
    "C#",
    "SQL",
    "PostgreSQL (Updating)",
    "Java (updating)",
  ],
  projects: [
    {
      title: "Dormitory Management",
      techStack: [
        "C#",
        ".NET",
        "Bunifu UI",
        "TSQL",
        "iconsax",
      ],
      description: "An application for managing dormitories in school",
      logo: ConsultlyLogo,
      link: {
        label: "Dormitory Management",
        href: "https://github.com/vandunxg/DormitoryManagement",
      },
    },
    
  ],
} as const;
