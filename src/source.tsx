
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import {  SiExpress, SiVite } from "react-icons/si";
import {
  MdOutlineAlternateEmail,
  MdOutlineDesignServices,
} from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { FiCode, FiOctagon, FiSmartphone } from "react-icons/fi";
import { FaReact } from "react-icons/fa6";
import { RiCss3Fill, RiDatabase2Line, RiFile2Line, RiFunctionAddLine, RiHtml5Line, RiMiniProgramFill, RiNodejsLine, RiServerLine, RiTailwindCssFill } from "react-icons/ri";
import {
  alun,
  blog,
  dall,
  ecom,
  elon,
  gates,
  grace,
  hubber,
  note,
  proto,
  steve,
  zekr,
} from "./assets";
import { DiJavascript } from "react-icons/di";
import { BsBootstrap, BsLinkedin, BsTelegram } from "react-icons/bs";
import { LuFunctionSquare } from "react-icons/lu";
import { BiBrain } from "react-icons/bi";

export const navigation = [
  { name: "Home", id: "header" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Quotes", id: "testimonials" },
  { name: "Contact", id: "contact" },
];
export const techStack = [
  { name: "HTML", icon: <RiHtml5Line />, level: "Experienced" },
  { name: "CSS", icon: <RiCss3Fill />, level: "Experienced" },
  { name: "JavaScript", icon: <DiJavascript />, level: "Experienced" },
  { name: "Bootstrap", icon: <BsBootstrap />, level: "Experienced" },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill />, level: "Intermediate" },
  { name: "Vite", icon: <SiVite />, level: "Intermediate" },
  { name: "ReactJs", icon: <FaReact />, level: "Experienced" },
  { name: "UI/UX Design", icon: <MdOutlineDesignServices />, level: "Intermediate" },
  { name: "Git", icon: <RiServerLine />, level: "Experienced" },

  // Backend Development
  { name: "Node.js", icon: <RiNodejsLine />, level: "Intermediate" },
  { name: "ExpressJs", icon: <SiExpress />, level: "Intermediate" },
  { name: "MongoDB", icon: <RiDatabase2Line />, level: "Basic" },
  { name: "API", icon: <RiFile2Line />, level: "Intermediate" },

  // Computer Science
  { name: "C++", icon: <RiMiniProgramFill />, level: "Experienced" },
  { name: "OOP", icon: <RiFunctionAddLine />, level: "Intermediate" },
  { name: "Data Structures", icon: <RiFunctionAddLine />, level: "Intermediate" },
  { name: "Algorithms", icon: <LuFunctionSquare />, level: "Intermediate" },
  { name: "Problem Solving", icon: <BiBrain />, level: "Intermediate" }

];

export const services = [
  {
    icon: <FiSmartphone />,
    name: "Responsive Web Design",
    description: `
      Crafting visually appealing and fully responsive websites that adapt seamlessly to any device, ensuring an excellent user experience on desktops, tablets, and smartphones.`,
  },
  {
    icon: <FiCode />,
    name: "Full-Stack Web Development",
    description: `
      Developing robust and scalable web applications, handling both front-end and back-end processes using modern technologies like React, Node.js, Express, and MongoDB.`,
  },
  {
    icon: <MdOutlineDesignServices />,
    name: "UI/UX Optimization",
    description: `
      Enhancing user engagement with intuitive and aesthetically pleasing interfaces, prioritizing performance, accessibility, and smooth navigation for optimal user satisfaction.`,
  },
  {
    icon: <RiFile2Line />,
    name: "API Development & Integration",
    description: `
      Designing secure, high-performance RESTful APIs to connect your frontend and backend seamlessly, ensuring smooth data flow and interoperability between systems.`,
  },
  {
    icon: <FiOctagon />,
    name: "Performance Optimization & Debugging",
    description: `
      Identifying bottlenecks, fixing bugs, and optimizing performance to ensure your web applications run smoothly and efficiently.`,
  },
];


export const projects = [
  {
    name: "Zekr - Quran Listening Web App",
    description: `Zekr is a full-stack web application designed to provide a seamless Quran listening experience. Built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with Vite, the app allows users to listen to high-quality Quran recitations, save favorite reciters, and navigate through Surahs with ease.!`,
    image: zekr,
    url: "https://zekr.onrender.com/",
    url1: "https://github.com/am172/zekr/tree/main",
  },
  {
    name: "TaskApp - Productivity Tool",
    description: `This project is a full-stack e-commerce application, built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). It provides a seamless online shopping experience with secure authentication, dynamic product management, and an intuitive UI.`,
    image: note,
    url: "https://vimeo.com/1027999285?share=copy",
    url1: "https://github.com/am172/task",
  },
  {
    name: "Dal - Programming Learning Platform",
    description: `Dal is a frontend-based web platform designed to help beginners learn programming fundamentals in a structured and interactive way. The website provides essential programming resources, learning roadmaps, and practical exercises to guide users through their journey. It focuses on making programming more accessible through a simple and engaging UI.`,
    image: dall,
    url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
    url1: "dalforprogramming",
  },
  {
    name: "BlogApp - A Simple Blogging Platform",
    description: `BlogApp is a full-stack blogging platform built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). Users can create an account, log in securely, and write blog posts with images.`,
    image: blog,
    url: "https://github.com/am172/the-blog",
    url1: "https://github.com/am172/the-blog",
  },
  {
    name: "E-commerce Frontend Project",
    description: `This project is a frontend for an e-commerce website, built using modern web technologies. It features an attractive design, smooth user experience, and full responsiveness across all devices.`,
    image: ecom,
    url: "https://am172.github.io/ecommerce/",
    url1: "https://github.com/am172/ecommerce",
  },
  {
    name: "Second Portofolio",
    description: `This portfolio showcases my work as a full-stack developer, built with modern web technologies. It highlights my projects across front-end and back-end development, featuring clean design, smooth user experience.`,
    image: proto,
    url: "https://myprotofolio.onrender.com/",
    url1: "https://github.com/am172/MyProtofolio",
  },
];
export const testimonies = [
  {
    profile: hubber,
    name: "Linus Torvalds",
    position: "Creator of Linux",
    company: "Open Source Community",
    content: `“Talk is cheap. Show me the code.”`,
  },
  {
    profile: steve,
    name: "Steve Jobs",
    position: "Co-founder",
    company: "Apple Inc.",
    content: `“Design is not just what it looks like and feels like. Design is how it works.”`,
  },
  {
    profile: grace,
    name: "Grace Hopper",
    position: "Computer Scientist",
    company: "US Navy",
    content: `“The most dangerous phrase in the language is, 'We've always done it this way.'”`,
  },
  {
    profile: alun,
    name: "Alan Turing",
    position: "Father of Modern Computing",
    company: "Bletchley Park",
    content: `“Sometimes it is the people no one imagines anything of who do the things that no one can imagine.”`,
  },
  {
    profile: gates,
    name: "Bill Gates",
    position: "Co-founder",
    company: "Microsoft",
    content: `“Your most unhappy customers are your greatest source of learning.”`,
  },
  {
    profile: elon,
    name: "Elon Musk",
    position: "CEO",
    company: "SpaceX, Tesla",
    content: `“When something is important enough, you do it even if the odds are not in your favor.”`,
  },
];


export const contactInfo = [
  {
    name: "Email",
    icon: <MdOutlineAlternateEmail />,
    value: "hmnm5485@gmail.com",
  },
  {
    name: "Phone",
    icon: <IoCallOutline />,
    value: "+20 111 806 9683",
  },
  {
    name: "Address",
    icon: <IoLocationOutline />,
    value: "Beni Suef, Egypt",
  },
];

export const socialHandles = [
  {
    name: "whatsapp",
    icon: <AiOutlineWhatsApp />,
    link: "https://api.whatsapp.com/send/?phone=201118069683&text&type=phone_number&app_absent=0",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/am172?tab=packages",
  },
  {
    name: "Telegram",
    icon: < BsTelegram/>,
    link: "https://t.me/amrshanab",
  },
  {
    name: "Linkedin",
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/amr-roshdy-675835293/",
  },
];

export const footer = [
  {
    group: "Hot Links",
    routes: [
      { name: "Home", id: "header" },
      { name: "About", id: "about" },
      { name: "Services", id: "services" },
      { name: "Projects", id: "projects" },
      { name: "Quotes", id: "testimonials" },
      { name: "Contact", id: "contact" },
    ],
  },
  {
    group: "Others",
    routes: [
      { name: "Privacy Policy" },
      { name: "Terms and Conditions" },
      { name: "Cookie Policy" },
    ],
  },
];
