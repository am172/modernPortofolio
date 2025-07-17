
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";
import { SiExpress, SiVite } from "react-icons/si";
import {
  MdOutlineAlternateEmail,
  MdOutlineDesignServices,
} from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { FiCode, FiOctagon, FiSmartphone } from "react-icons/fi";
import { FaReact } from "react-icons/fa6";
import { RiCss3Fill, RiDatabase2Line, RiFile2Line, RiDashboardFill, RiFunctionAddLine, RiHtml5Line, RiMiniProgramFill, RiNodejsLine, RiServerLine, RiTailwindCssFill } from "react-icons/ri";
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
  fadaa,
  zekr2,
  zekr3,
  zekr4,
  zekr1,
  sol,
  problem,
  fadaa1,
  fadaa2,
  fadaa3,
  fadaa4,
  fadaa5,
  fadaa6,
  fadaa7,
  fadaa8,
  fadaa9,
  fadaa10,
  arb1,
  arb2,
  arb3,
  arb4,
  arb5,
  arb6,
  arb7,
  arb8,
  about,
  contact,
  comp,
  product,
  metal,
  cate,
  dash,
  dash1,
  dash2,
  dash4,
  fatwa,
  fatwa1,
  fatwa2,
  fatwa3,
  task,
  dal1,
  dal2,
  dal3,
  dal4,
  dal5,
  dal6,
  dal7,
  dal8,
  dal9,
  dal10,
  bahaa,
  bahaa1,
  moqwel,
  moqwel1,
  moqwel2,
  ecom1,
  proto1,
  proto2,
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
  { name: "Strapi", icon: <RiDashboardFill />, level: "Basic" },
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
    id: "zekr",
    name: "Zekr - Quran Listening Web App",
    description: "Zekr is a full-stack web application designed to provide a seamless Quran listening experience. Built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with Vite, the app allows users to listen to high-quality Quran recitations, save favorite reciters, and navigate through Surahs with ease.",
    image: zekr,
    url: "https://zekr.onrender.com/",
    url1: "https://github.com/am172/zekr/tree/main",
  },
  {
    id: "fadaa",
    name: "Fadaa - Student Welfare Platform",
    description: "Fadaa is a full-stack web application built to manage student welfare and attendance tracking. It offers an admin-friendly interface to manage student records, track presence, and support services across various student housing institutions.",
    image: fadaa,
    url: "https://github.com/am172/fadaa",
    url1: "https://github.com/am172/fadaa",
  },
  {
    id: "arabia",
    name: "Arabia Investment Company",
    description: "A responsive and modern website built for Arabia Investment Company to professionally present their services in construction, IT, electrical works, air conditioning, and marble. The site features service categorization, project showcase, and easy client communication.",
    image: arb1,
    url: "https://github.com/am172/arabia",
    url1: "https://github.com/am172/arabia"
  },
  {
    id: "dal",
    name: "Dal - Programming Learning Platform",
    description: `Dal is a frontend-based web platform designed to help beginners learn programming fundamentals in a structured and interactive way. The website provides essential programming resources, learning roadmaps, and practical exercises to guide users through their journey. It focuses on making programming more accessible through a simple and engaging UI.`,
    image: dall,
    url: "https://github.com/am172/dal",
    url1: "https://am172.github.io/dalforprogramming/",
  },
  {
    id: "taskApp",
    name: "TaskApp - Productivity Tool",
    description: `This project is a full-stack Task application, built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). It provides a seamless online shopping experience with secure authentication, dynamic product management, and an intuitive UI.`,
    image: note,
    url: "https://vimeo.com/1027999285?share=copy",
    url1: "https://github.com/am172/task",
  },
  {
    id: "fatwa-ai",
    name: "Fatwa AI",
    description: "A smart and user-friendly platform that provides instant Islamic rulings using artificial intelligence. Designed to serve as a trusted reference for users seeking religious guidance in various aspects of life, the site supports Arabic language input and offers verified sources when needed. Features include categorized topics, keyword-based search, and an intuitive interface.",
    image: fatwa,
    url: "https://github.com/am172/fatwa-ai-inquire",
    url1: "https://fatwa-ai-inquire.lovable.app/"
  },
  {
    id: "bahaa-law",
    name: "Al-Bahaa Law Firm",
    description: "A professional website for Al-Bahaa Law Firm showcasing legal services, team expertise, and client contact tools. Built with a clean UI to reflect trust, professionalism, and easy access to legal information.",
    image: bahaa,
    url: "https://github.com/am172/bahaa-law-elegance-website",
    url1: "https://bahaa-law.vercel.app/"
  },
  {
    id: "benaa",
    name: "benaa - Construction Company",
    description: "A professional website for Moqawel Construction Company, showcasing engineering services, projects, and contact tools. Designed to reflect credibility and long-standing experience in the construction industry.",
    image: moqwel,
    url: "https://github.com/am172/Construction-Company-Site-Template-main", // حط لينك المشروع لو موجود
    url1: "https://moqawel.vercel.app/" // مثال للعرض الحي
  },


 
  {
    id: "second-portfolio",
    name: "Second Portofolio",
    description: `This portfolio showcases my work as a full-stack developer, built with modern web technologies. It highlights my projects across front-end and back-end development, featuring clean design, smooth user experience.`,
    image: proto,
    url: "https://myprotofolio.onrender.com/",
    url1: "https://github.com/am172/MyProtofolio",
  },
  {
    id:"ecommerce",
    name: "E-commerce Frontend Project",
    description: `This project is a frontend for an e-commerce website, built using modern web technologies. It features an attractive design, smooth user experience, and full responsiveness across all devices.`,
    image: ecom,
    url: "https://am172.github.io/ecommerce/",
    url1: "https://github.com/am172/ecommerce",
  },
  //  {
  //   id:"blog",
  //   name: "BlogApp - A Simple Blogging Platform",
  //   description: `BlogApp is a full-stack blogging platform built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). Users can create an account, log in securely, and write blog posts with images.`,
  //   image: blog,
  //   url: "https://github.com/am172/the-blog",
  //   url1: "https://github.com/am172/the-blog",
  // },
 
];

export const projectDetailsData = [
  //ZEKR
  {
    id: "zekr",
    name: {
      en: "Zekr - Quran Listening Web App",
      ar: "ذكر - تطبيق استماع للقرآن الكريم"
    },
    description: {
      en: `
<div class="problem-box">
  <img src="${problem}" alt="Problem Icon" class="icon-heading" />
  <p>
    Most Quran apps today are cluttered or part of larger Islamic platforms. There wasn’t a simple,
    focused web app dedicated solely to listening to Quran with full control. Users lacked the ability to
    create custom playlists, mark favorite reciters, or organize their listening experience in a clean,
    distraction-free interface.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="Solution Icon" class="icon-heading" />
  <p>
    Zekr was built to solve this gap — a modern full-stack web app crafted with MERN and Vite that offers
    a smooth Quran listening experience. Users can create and manage playlists, choose from high-quality
    recitations, and easily navigate Surahs — all in a beautiful, minimal UI that works across devices.
  </p>
</div>
  `,

      ar: `
<div class="problem-box">
  <img src="${problem}" alt="أيقونة المشكلة" class="icon-heading" />
  <p>
    معظم تطبيقات القرآن اليوم مزدحمة أو جزء من منصات دينية كبيرة، ولم يكن هناك تطبيق ويب بسيط
    ومخصص فقط لسماع القرآن الكريم. لم يتمكن المستخدمون من إنشاء قوائم تشغيل أو حفظ مقرئين مفضلين
    أو تنظيم تجربتهم بسهولة وبشكل مريح.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="أيقونة الحل" class="icon-heading" />
  <p>
    تم تطوير "ذكر" لسد هذه الفجوة — تطبيق ويب حديث يقدم تجربة استماع مرنة وسهلة.
    يمكن للمستخدم إنشاء وإدارة قوائم تشغيل، اختيار المقرئين بجودة عالية، والتنقل بين السور بسلاسة
    داخل واجهة بسيطة وأنيقة تعمل على جميع الأجهزة.
  </p>
</div>
  `
    },
    thumbnail: [zekr],
    images: [zekr1, zekr2, zekr3, zekr4],
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Vite", "Cloudnairy", "TailwindCss"],
    demo: "https://zekr.onrender.com/",
    github: "https://github.com/am172/zekr/tree/main"
  },
  //FADAA
  {
    id: "fadaa",
    name: {
      en: "Fadaa - Student Welfare Platform",
      ar: "فضاء - منصة رعاية الطلاب"
    },
    description: {
      en: `
<div class="problem-box">
  <img src="${problem}" alt="Problem Icon" class="icon-heading" />
  <p>
    Managing student welfare and attendance across multiple housing institutions is often complicated, requiring multiple disconnected systems. There was a lack of a unified platform that provides both administrative control and student accessibility. Moreover, students lacked an easy way to track their attendance and access their records online.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="Solution Icon" class="icon-heading" />
  <p>
    Fadaa was developed as a full-stack web application to solve this problem. It offers a professional, admin-friendly dashboard to manage student records and attendance, a dedicated student portal with secure login where students can check their attendance and personal data, an online presence tracking system integrated with student housing institutions, and a public website to introduce the association and provide important information. This unified platform improves communication, streamlines attendance tracking, and enhances student welfare management.
  </p>
</div>
    `,
      ar: `
<div class="problem-box">
  <img src="${problem}" alt="أيقونة المشكلة" class="icon-heading" />
  <p>
    إدارة رعاية الطلاب وتتبع الحضور في عدة مؤسسات سكن طلابي غالبًا ما تكون معقدة وتتطلب أنظمة منفصلة. لم يكن هناك منصة موحدة توفر تحكم إداري وسهولة وصول للطلاب في نفس الوقت. كما أن الطلاب لم يكن لديهم وسيلة سهلة لمتابعة حضورهم والوصول إلى بياناتهم الشخصية عبر الإنترنت.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="أيقونة الحل" class="icon-heading" />
  <p>
    تم تطوير "فضاء" كتطبيق ويب متكامل لحل هذه المشكلة. يوفر التطبيق لوحة تحكم إدارية احترافية لإدارة بيانات الطلاب وتتبع الحضور، وبوابة خاصة للطلاب مع تسجيل دخول آمن لمتابعة الحضور والبيانات الشخصية، ونظام متابعة حضور إلكتروني مدمج مع مؤسسات السكن الطلابي، وموقع إلكتروني تعريفي للجمعية لتوفير المعلومات الهامة للعامة. هذه المنصة الموحدة تسهل التواصل، وتبسط عملية متابعة الحضور، وتعزز إدارة رعاية الطلاب بشكل فعال.
  </p>
</div>
    `
    },
    thumbnail: [fadaa],
    images: [fadaa1, fadaa2, fadaa3, fadaa4, fadaa5, fadaa6, fadaa7, fadaa8, fadaa9, fadaa10],
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "TailwindCss"],
    demo: "https://github.com/am172/fadaa",
    github: "https://github.com/am172/fadaa"
  },
  //ARABIA
  {
    id: "arabia",
    name: {
      en: "Arabia Investment Company",
      ar: "شركة العربية للاستثمار"
    },
    description: {
      en: `
<div class="problem-box">
  <img src="${problem}" alt="Problem Icon" class="icon-heading" />
  <p>
    Many investment and contracting companies struggle with presenting their diverse services in a clear, organized, and professional way online. Clients often face difficulty accessing service details, contact information, or company portfolios, especially when there is no dedicated or responsive website.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="Solution Icon" class="icon-heading" />
  <p>
    We built a professional web platform for Arabia Investment Company that clearly showcases their services across multiple fields including construction, electrical works, marble, air conditioning, and IT. The website features a clean user interface, responsive design for all devices, service categorization, project portfolio display, and easy-to-access contact methods — offering clients a complete and modern digital presence.
  </p>
</div>
    `,
      ar: `
<div class="problem-box">
  <img src="\${problem}" alt="أيقونة المشكلة" class="icon-heading" />
  <p>
    تعاني العديد من شركات الاستثمار والمقاولات من صعوبة عرض خدماتها المتنوعة بشكل منظم واحترافي عبر الإنترنت. يواجه العملاء صعوبة في الوصول إلى تفاصيل الخدمات أو معلومات التواصل أو استعراض المشاريع، خاصة في غياب موقع إلكتروني مخصص ومتجاوب.
  </p>
</div>

<div class="solution-box">
  <img src="\${sol}" alt="أيقونة الحل" class="icon-heading" />
  <p>
    قمنا ببناء موقع إلكتروني احترافي لشركة العربية للاستثمار يعرض خدماتها بوضوح في مجالات متعددة مثل البناء، والأعمال الكهربائية، والرخام، والتكييف، وتكنولوجيا المعلومات. يتميز الموقع بواجهة مستخدم أنيقة، وتصميم متجاوب مع جميع الأجهزة، وتصنيف للخدمات، وعرض لأعمال ومشاريع الشركة، بالإضافة إلى طرق تواصل سهلة — مما يوفر حضورًا رقميًا عصريًا وكاملاً.
  </p>
</div>
    `
    },
    thumbnail: [arb1],
    images: [arb1, arb2, arb3, arb4, arb5, arb6, arb7, arb8, about, contact, comp, product, metal, cate, dash, dash1, dash2, dash4],
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    demo: "https://github.com/am172/engYaman",
    github: "https://github.com/am172/engYaman"
  },
  //FATWA AI
  {
    id: "fatwa-ai",
    name: {
      en: "Fatwa AI",
      ar: "فتوى AI"
    },
    description: {
      en: `
<div class="problem-box">
  <img src="${problem}" alt="Problem Icon" class="icon-heading" />
  <p>
    Many Muslims seek quick and reliable Islamic rulings online but struggle to find accurate answers in a user-friendly format. Existing platforms often lack smart search, verified sourcing, or support for natural Arabic queries. This creates confusion and leads users to potentially unverified or unclear fatwas.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="Solution Icon" class="icon-heading" />
  <p>
    Fatwa AI is an intelligent web platform that offers instant Islamic rulings using AI technology. It supports Arabic language input, provides categorized topics for easier navigation, allows keyword-based search, and delivers responses with references when available. The clean and intuitive design ensures accessibility for all users, making it a reliable tool for quick and trustworthy religious guidance.
  </p>
</div>
    `,
      ar: `
<div class="problem-box">
  <img src="${problem}" alt="أيقونة المشكلة" class="icon-heading" />
  <p>
    يسعى الكثير من المسلمين للحصول على فتاوى إسلامية سريعة وموثوقة عبر الإنترنت، ولكنهم يواجهون صعوبة في الوصول إلى إجابات دقيقة من خلال منصات سهلة الاستخدام. تفتقر العديد من المنصات إلى البحث الذكي أو دعم اللغة العربية الطبيعية أو توثيق المصادر، مما يسبب ارتباكًا وقد يؤدي للوصول إلى فتاوى غير دقيقة.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="أيقونة الحل" class="icon-heading" />
  <p>
    "فتوى AI" هي منصة ذكية تعتمد على الذكاء الاصطناعي لتقديم فتاوى فورية ودقيقة. تدعم إدخال اللغة العربية، وتوفر تصنيفًا للموضوعات لتسهيل التصفح، وتسمح بالبحث بالكلمات المفتاحية، وتعرض الإجابات مع المصادر الموثوقة عند توفرها. تتميز بتصميم بسيط وسهل الاستخدام، مما يجعلها أداة موثوقة وسريعة لمن يبحث عن الفتوى الصحيحة في مختلف مجالات الحياة.
  </p>
</div>
    `
    },
    thumbnail: [fatwa],
    images: [fatwa1, fatwa2, fatwa3],
    tech: ["React.js", "Geminai API", "TailwindCss"],
    demo: "https://fatwa-ai-inquire.lovable.app/",
    github: "https://github.com/am172/fatwa-ai-inquire"
  },
  //TASK
  {
    id: "taskApp",
    name: {
      en: "TaskApp - Productivity Tool",
      ar: "أداة تنظيم المهام"
    },
    description: {
      en: `
<div class="problem-box">
  <img src="${problem}" alt="Problem Icon" class="icon-heading" />
  <p>
    Many individuals and teams struggle to keep track of their daily tasks, deadlines, and progress in an efficient way. Traditional methods like paper notes or basic apps often lack synchronization, user management, and flexibility needed for growing productivity demands.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="Solution Icon" class="icon-heading" />
  <p>
    TaskApp was developed as a full-stack productivity tool using the MERN stack. It allows users to create, update, and delete tasks with ease. The platform supports secure user authentication, responsive UI for all devices, and dynamic task management. Designed to boost personal and team productivity, TaskApp helps users stay organized and focused.
  </p>
</div>
    `,
      ar: `
<div class="problem-box">
  <img src="${problem}" alt="أيقونة المشكلة" class="icon-heading" />
  <p>
    يواجه الكثير من الأفراد والفرق صعوبة في تتبع المهام اليومية والمواعيد النهائية والتقدم المحرز بطريقة فعالة. الطرق التقليدية مثل الورق أو التطبيقات البسيطة تفتقر غالبًا إلى التزامن وإدارة المستخدمين والمرونة اللازمة لزيادة الإنتاجية.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="أيقونة الحل" class="icon-heading" />
  <p>
    تم تطوير TaskApp كأداة إنتاجية متكاملة باستخدام تقنية MERN Stack. يتيح التطبيق للمستخدمين إنشاء المهام وتحديثها وحذفها بسهولة، ويدعم تسجيل دخول آمن، وتصميم متجاوب مع جميع الأجهزة، ونظام إدارة مهام ديناميكي. تم تصميمه لتعزيز إنتاجية الأفراد والفرق، ومساعدتهم على التنظيم والتركيز.
  </p>
</div>
    `
    },
    thumbnail: [note],
    images: [note],
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "TailwindCss"],
    demo: "https://vimeo.com/1027999285?share=copy",
    github: "https://github.com/am172/task"
  },
  //DAL
  {
    id: "dal",
    name: {
      en: "Dal - Programming Learning Platform",
      ar: "دال - منصة تعلم البرمجة"
    },
    description: {
      en: `
<div class="problem-box">
  <img src="${problem}" alt="Problem Icon" class="icon-heading" />
  <p>
    Many beginners struggle to find a clear, beginner-friendly path to start learning programming. Resources are often scattered, unorganized, or too advanced, which causes confusion and discouragement early on.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="Solution Icon" class="icon-heading" />
  <p>
    Dal is a structured and interactive frontend-based platform designed to help beginners learn programming fundamentals. It offers essential resources, learning roadmaps, practical exercises, and a simple UI to make the learning experience engaging and accessible. The platform empowers users to build a solid foundation in programming with confidence.
  </p>
</div>
    `,
      ar: `
<div class="problem-box">
  <img src="${problem}" alt="أيقونة المشكلة" class="icon-heading" />
  <p>
    يواجه المبتدئون صعوبة في إيجاد طريق واضح وسهل لتعلم البرمجة. فغالبًا ما تكون المصادر مبعثرة، وغير منظمة، أو متقدمة أكثر من اللازم، مما يسبب ارتباكًا وإحباطًا في بداية الطريق.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="أيقونة الحل" class="icon-heading" />
  <p>
    تم تطوير "دل" كمنصة تفاعلية تعتمد على الواجهة الأمامية لمساعدة المبتدئين على تعلم أساسيات البرمجة. توفر المنصة موارد أساسية، وخطط تعلم منظمة، وتطبيقات عملية، وتصميم بسيط يساعد على جعل تجربة التعلم ممتعة وسهلة الوصول. تهدف "دل" إلى تمكين المستخدمين من بناء أساس قوي في البرمجة بثقة.
  </p>
</div>
    `
    },
    thumbnail: [dall],
    images: [dal1, dal2, dal3, dal4, dal5, dal6, dal7, dal8, dal9, dal10],
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://am172.github.io/dalforprogramming/",
    github: "https://github.com/am172/dal"
  },
  //BAHAA
  {
    id: "bahaa-law",
    name: {
      en: "Al-Bahaa Law Firm",
      ar: "مكتب البهاء للمحاماة"
    },
    description: {
      en: `
<div class="problem-box">
  <img src="${problem}" alt="Problem Icon" class="icon-heading" />
  <p>
    Law firms often lack an online presence that matches their professionalism. Clients may struggle to find clear information about legal services, the team, or how to get in touch. Traditional brochures or social media don’t provide the full experience or credibility a professional site can offer.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="Solution Icon" class="icon-heading" />
  <p>
    The Al-Bahaa Law Firm website was created to showcase the firm's legal expertise in a clear, elegant, and modern interface. It includes detailed sections for services, lawyer profiles, contact forms, office locations, and a dedicated blog for legal updates. The website enhances trust and makes it easier for clients to engage with the firm.
  </p>
</div>
    `,
      ar: `
<div class="problem-box">
  <img src="${problem}" alt="أيقونة المشكلة" class="icon-heading" />
  <p>
    تفتقر العديد من مكاتب المحاماة إلى وجود إلكتروني احترافي يعكس مستوى خدماتها. ويواجه العملاء صعوبة في الوصول إلى معلومات واضحة حول الخدمات القانونية أو التواصل مع المكتب، خاصة عند الاعتماد على وسائل تقليدية مثل النشرات أو صفحات التواصل الاجتماعي.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="أيقونة الحل" class="icon-heading" />
  <p>
    تم إنشاء موقع "مكتب البهاء للمحاماة" لعرض الخدمات القانونية بشكل احترافي وواضح من خلال واجهة أنيقة وحديثة. يتضمن الموقع أقسامًا مخصصة للخدمات، وفريق المحامين، ونماذج التواصل، ومواقع الفروع، ومدونة قانونية للتحديثات. يعزز الموقع من الثقة ويسهل على العملاء الوصول إلى المكتب والتفاعل معه.
  </p>
</div>
    `
    },
    thumbnail: [bahaa],
    images: [bahaa1],
    tech: ["React.js", "TailwindCss", "React Router", "EmailJS"],
    demo: "https://bahaa-law.vercel.app/", // مثال
    github: "https://github.com/am172/bahaa-law-elegance-website" // مثال
  },
  //MOQAWEL
  {
    id: "benaa",
    name: {
      en: "benaa - Construction Company",
      ar: "بناء - شركة للمقاولات"
    },
    description: {
      en: `
<div class="problem-box">
  <img src="${problem}" alt="Problem Icon" class="icon-heading" />
  <p>
    Many construction businesses struggle with having a digital presence that represents their professionalism and portfolio. Without a modern website, potential clients can’t easily find or trust their services, which impacts growth and visibility in a competitive market.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="Solution Icon" class="icon-heading" />
  <p>
    The "Moqawel" website was created to highlight the company's construction services and projects in a sleek and professional format. It includes a homepage introducing the company, a services section, gallery of past projects, and a contact page for client inquiries. The platform enhances trust, improves communication, and helps attract new clients through a polished online presence.
  </p>
</div>
    `,
      ar: `
<div class="problem-box">
  <img src="${problem}" alt="أيقونة المشكلة" class="icon-heading" />
  <p>
    تعاني العديد من شركات المقاولات من ضعف الوجود الرقمي الذي يعكس احترافيتها وخبرتها. غياب موقع إلكتروني منظم يؤدي إلى صعوبة وصول العملاء المحتملين للخدمات، مما يحد من فرص النمو والانتشار في سوق شديد المنافسة.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="أيقونة الحل" class="icon-heading" />
  <p>
    تم إنشاء موقع "مقاول" ليعرض خدمات ومشاريع الشركة بشكل احترافي وأنيق. يحتوي الموقع على صفحة تعريفية بالشركة، قسم للخدمات، معرض للمشاريع السابقة، وصفحة تواصل مخصصة لاستقبال استفسارات العملاء. يعزز الموقع من الثقة، ويسهل التواصل، ويساهم في جذب عملاء جدد من خلال واجهة احترافية عبر الإنترنت.
  </p>
</div>
    `
    },
    thumbnail: [moqwel],
    images: [moqwel1, moqwel2],
    tech: ["React.js", "TailwindCss", "EmailJS"],
    demo: "https://moqawel.vercel.app/",
    github: "https://github.com/am172/Construction-Company-Site-Template-main"
  },
  //ECOMMERCE
  {
  id: "ecommerce",
  name: {
    en: "E-commerce Frontend Project",
    ar: "مشروع واجهة متجر إلكتروني"
  },
  description: {
    en: `
<div class="problem-box">
  <img src="${problem}" alt="Problem Icon" class="icon-heading" />
  <p>
    Many e-commerce platforms rely on complex and heavy frameworks, which often result in bloated interfaces and slow performance. For frontend developers, building a lightweight, fast, and fully responsive UI is essential — especially when APIs or backend services aren’t ready.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="Solution Icon" class="icon-heading" />
  <p>
    This E-commerce Frontend Project solves that need by offering a complete static interface for an online store. It includes product listings, detail pages, cart UI, and a modern layout built with HTML, CSS, and vanilla JavaScript. The design is clean, responsive, and suitable for integration into any backend in the future.
  </p>
</div>
    `,

    ar: `
<div class="problem-box">
  <img src="${problem}" alt="أيقونة المشكلة" class="icon-heading" />
  <p>
    تعتمد العديد من منصات التجارة الإلكترونية على تقنيات ثقيلة ومعقدة مما يؤدي إلى بطء الأداء وواجهات مزدحمة. بالنسبة لمطوري الواجهة الأمامية، هناك حاجة إلى تصميم بسيط وسريع ومتجاوب، خاصة عندما لا تكون خدمات الخلفية جاهزة بعد.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="أيقونة الحل" class="icon-heading" />
  <p>
    مشروع واجهة المتجر الإلكتروني هذا يركز على توفير واجهة أمامية كاملة لمتجر إلكتروني. يتضمن قوائم المنتجات، صفحة تفاصيل المنتج، واجهة عربة التسوق، وتصميم عصري باستخدام HTML وCSS وJavaScript. يتميز التصميم بالبساطة والسرعة والتجاوب الكامل مع جميع الأجهزة، ويمكن ربطه بأي Backend لاحقًا.
  </p>
</div>
    `
  },
  thumbnail: [ecom],
  images: [ecom1],
  tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  demo: "https://am172.github.io/ecommerce/",
  github: "https://github.com/am172/ecommerce"
  },
  //SECOND PORT
  {
  id: "second-portfolio",
  name: {
    en: "Second Portfolio - Developer Showcase",
    ar: "البورتفوليو الثاني - عرض أعمال المطور"
  },
  description: {
    en: `
<div class="problem-box">
  <img src="${problem}" alt="Problem Icon" class="icon-heading" />
  <p>
    Many developer portfolios lack personality, are outdated, or fail to clearly present skills and real projects. I needed a portfolio that reflects my capabilities as a full-stack developer and demonstrates my design sense and development range across frontend and backend.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="Solution Icon" class="icon-heading" />
  <p>
    I built a responsive and interactive portfolio using the MERN stack to present my work in a clean, modern layout. It includes live project previews, tech stack indicators, and a contact form — all designed with attention to user experience and accessibility.
  </p>
</div>
    `,
    ar: `
<div class="problem-box">
  <img src="${problem}" alt="أيقونة المشكلة" class="icon-heading" />
  <p>
    الكثير من البورتفوليورات الخاصة بالمطورين تفتقر إلى الاحترافية أو لا تعكس قدراتهم بشكل فعلي. كنت بحاجة إلى موقع يعرض مهاراتي كمطور ويب ويوضح المشاريع التي قمت بتنفيذها بطريقة جذابة وواضحة.
  </p>
</div>

<div class="solution-box">
  <img src="${sol}" alt="أيقونة الحل" class="icon-heading" />
  <p>
    قمت بتطوير بورتفوليو تفاعلي ومتجاوب   يعرض مشاريعي بشكل منظم داخل تصميم عصري وسلس. يحتوي الموقع على روابط لعرض المشاريع مباشرة، مع وصف للتقنيات المستخدمة ونموذج تواصل يعمل بكفاءة.
  </p>
</div>
    `
  },
  thumbnail: [proto],
  images: [proto1,proto2],
  tech: ["React.js", "Css","Bootstrap"],
  demo: "https://myprotofolio.onrender.com/",
  github: "https://github.com/am172/MyProtofolio"
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
    icon: < BsTelegram />,
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
