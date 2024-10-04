"use client"
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs, SiExpress} from "react-icons/si"
import { TbSql } from "react-icons/tb";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import {motion, AnimatePresence} from "framer-motion"
import { useState, useRef, useEffect } from "react"


//About data
const about = {
  title: "About me",
  description: "I'm a software developer with experience in web development. I have worked with technologies like HTML, CSS, JavaScript, React, TailwindCSS, and Next.js. I'm passionate about learning new technologies and improving my skills.  I'm always seeking new challenges and opportunities to learn emerging technologies and apply my knowledge to solve problems. My passion lies in creating intuitive and optimized user experiences.",
  info: [
    {
      fieldName: "Name:",
      fieldValue: "Santiago Riera"
    },
    {
      fieldName: "Phone:",
      fieldValue: "(+54) 3515529191"
    },
    {
      fieldName: "Email:",
      fieldValue: "santilrier@gmail.com"
    },
    {
      fieldName: "Recidence:",
      fieldValue: "Cordoba, Arg."
    },
    {
      fieldName: "Languages:",
      fieldValue: "Spanish (native) English (B1)"
    },
  ]
}

//Experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "Experience",
  description: "I worked for a year at a local company, starting with a training period that helped me develop my skills. Once I transitioned into my role, I focused on making updates to React components to enhance functionality and improve user experience. Additionally, I built websites using WordPress, which allowed me to apply my knowledge of web development. This experience was invaluable in helping me refine my technical skills and learn how to collaborate effectively with a team on various projects.",
  items: [
    {
      company: "Grupo WG",
      position: "Web developer",
      duration: "2021-2022 (1 year)",
    }
  ]
}

//Education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: "Education",
  description: "I'm a student of Systems Engineering at the Universidad Tecnológica Nacional (Córdoba), where I am developing a strong foundation in programming, and software development principles, including system design.  Additionally, I have taken various online courses in web development and programming to enhance my skills. Some of these courses include:",
  items: [
    {
      institution: "Universidad Tecnologica Nacional",
      degree: "Systems Engineering",
      duration: "2021 - Present",
    },
    {
      institution: "Self-taught", 
      degree: "Next.js and TailwindCSS",
      duration: "2024",
    },
    {
      institution: "Coderhouse",
      degree: "React.js course",
      duration: "2022",
    },
    {
      institution: "Platzi",
      degree: "Javascript practico",
      duration: "2022",
    },
    {
      institution: "Platzi",
      degree: "React.js",
      duration: "2022",
    },
    {
      institution: "Platzi",
      degree: "Frontend developer",
      duration: "2022",
    },
  ]
}

//Skills data
const skillsData = [
  {
    title: "HTML5",
    description: "Proficient in writing semantic HTML5 markup, ensuring accessibility and SEO-friendly structure.",
    icon: <FaHtml5 />,
    name: "HTML5"
  },
  {
    title: "CSS3",
    description: "Proficient in modern CSS3 techniques including Flexbox and Grid for responsive layouts.",
    icon: <FaCss3 />,
    name: "CSS3"
  },
  {
    title: "JavaScript",
    description: "Proficient in writing clean, modular, and maintainable JavaScript code.",
    icon: <FaJs />,
    name: "JavaScript"
  },
  {
    title: "React",
    description: "Experienced in building dynamic single-page applications (SPAs) using React, including hooks, context, and component-based architecture.",
    icon: <FaReact />,
    name: "React.js"
  },
  {
    title: "Next.js",
    description: "Expertise in server-side rendering (SSR), and building scalable, performant web applications with Next.js.",
    icon: <SiNextdotjs />,
    name: "Next.js"
  },
  {
    title: "Tailwind CSS",
    description: "Skilled in creating highly responsive, custom designs quickly with Tailwind's utility-first CSS framework.",
    icon: <SiTailwindcss />,
    name: "TailwindCSS"
  },
  {
    title: "Express.js",
    description: "Proficient in developing RESTful APIs and backend services using Node.js and Express for scalable and performant applications.",
    icon: <SiExpress />,
    name: "Express.js"
  },
  {
    title: "SQL",
    description: "Knowledge in working with relational databases (SQL) for data management and storage.",
    icon: <TbSql />,
    name: "SQL"
  }
];


const SkillCard = ({ skill }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showInstruction, setShowInstruction] = useState(true);
  const tooltipTimeoutRef = useRef(null);

  const handleTooltipOpen = () => {
    setShowTooltip(true);
    setShowInstruction(false);
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }
    tooltipTimeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
  };

  const handleTooltipClose = () => {
    if (tooltipTimeoutRef.current) {
      clearTimeout(tooltipTimeoutRef.current);
    }
    setShowTooltip(false);
  };

  useEffect(() => {
    return () => {
      if (tooltipTimeoutRef.current) {
        clearTimeout(tooltipTimeoutRef.current);
      }
    };
  }, []);

  return (
    <li className="relative">
      <TooltipProvider>
        <Tooltip open={showTooltip}>
          <TooltipTrigger
            onClick={handleTooltipOpen}
            onMouseEnter={handleTooltipOpen}
            onMouseLeave={handleTooltipClose}
            className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group p-4"
          >
            <div className="text-6xl group-hover:text-accent-hover transition-all duration-300">
              {skill.icon}
            </div>
            <span className="mt-2 text-sm text-center text-white/80">{skill.title}</span>
          </TooltipTrigger>
          <TooltipContent>
            <p className="max-w-[200px] text-sm">{skill.description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <AnimatePresence>
        {showInstruction && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute h-6 xl:text-nowrap top-0 left-0 right-0 bg-accent-default text-primary text-xs p-1 rounded-t-xl text-center instruction-message"
          >
            <span className="mobile-instruction">Tap for details</span>
            <span className="desktop-instruction">Hover for more</span>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx>{`
        @media (hover: hover) and (pointer: fine) {
          .mobile-instruction {
            display: none;
          }
        }
        @media (hover: none) and (pointer: coarse) {
          .desktop-instruction {
            display: none;
          }
        }
      `}</style>
    </li>
  );
};

function Resume() {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.1,
          delay: 0.8,
          ease: "easeIn"
        }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/*Content*/}
          <div className="min-h-[70vh] w-full">
            {/*about me*/}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6  gap-x-4 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start xl:items-start gap-3">
                        <span className="text-accent-default">{item.fieldName}</span>
                        <span className="text-md">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/*Experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                       <li 
                       key={index} 
                       className="bg-[#232329] h-[183px] xl:h-[250px] py-6 px-10 rounded-xl flex flex-col
                       justify-center items-center xl:items-start xl:justify-start gap-1"
                     > 
                        <span className="text-accent-default">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.company}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* Dot */ }
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-default"></span>
                          <p className="text-white/80">{item.position}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*education*/}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li 
                        key={index} 
                        className="bg-[#232329] h-[183px] xl:h-[250px] py-6 px-10 rounded-xl flex flex-col
                        justify-center items-center lg:items-start xl:justify-start gap-1"
                      > 
                        <span className="text-accent-default">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* Dot */ }
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-default"></span>
                          <p className="text-white/80 w-full">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*skills*/}
            <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="text-center xl:text-left">
                    <h3 className="text-4xl font-bold mb-4">Skills</h3>
                    <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0 mb-8">
                      In addition to my technical skills, I possess interpersonal competencies that enhance my teamwork. I excel in effective communication, allowing me to express my ideas clearly and facilitate collaboration with colleagues and clients. I approach challenges with an analytical mindset, seeking creative and efficient solutions, and I quickly adapt to new situations and feedback. I value collaboration and the contributions of others, fostering a positive and productive environment.
                      Here are my key technical skills and areas of expertise:
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skillsData.map((skill, index) => (
                      <SkillCard key={index} skill={skill} />
                    ))}
                  </ul>
                </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume