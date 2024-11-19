"use client"
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa"
import {SiTailwindcss, SiNextdotjs, SiExpress, SiTypescript, SiPostgresql} from "react-icons/si"
import { TbSql } from "react-icons/tb";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "../../../components/ui/tabs"
import {Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../../../components/ui/tooltip"
import { ScrollArea } from "../../../components/ui/scroll-area"
import {motion, AnimatePresence} from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { useTranslations } from "next-intl";

//About data
const about = {
  info: ["name", "phone", "email", "residence", "languages"]
}

//Experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  items: [
    {
      company: "Grupo WG",
      duration: "2021-2022 (1 year)",
    }
  ]
}

//Education data
const education = {
  icon: '/assets/resume/cap.svg',
  items: ['utn', 'auto', 'coderhouse', 'platzi', 'platzi2', 'platzi3']
}

//Skills data
const skillsData = [
  {
    title: "HTML5",
    icon: <FaHtml5 />,
    name: "html" // Clave que coincide con las traducciones
  },
  {
    title: "CSS3",
    icon: <FaCss3 />,
    name: "css"
  },
  {
    title: "JavaScript",
    icon: <FaJs />,
    name: "javascript"
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
    name: "typescript"
  },
  {
    title: "React",
    icon: <FaReact />,
    name: "react"
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs />,
    name: "nextjs"
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
    name: "tailwind"
  },
  {
    title: "Express.js",
    icon: <SiExpress />,
    name: "express"
  },
  {
    title: "SQL",
    icon: <TbSql />,
    name: "sql"
  },
  {
    title: "PostgreSQL",
    icon: <SiPostgresql />,
    name: "postgresql"
  }
];



const SkillCard = ({skill }) => {
  const t = useTranslations('Resume')
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
            <p className="max-w-[200px] text-sm">{t(`skills.skillsData.${skill.name}.description`)}</p>
            <p className="max-w-[200px] text-sm"></p>
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
            <span className="mobile-instruction">{t('skills.interaction.tap')}</span>
            <span className="desktop-instruction">{t('skills.interaction.hover')}</span>
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
  const t = useTranslations('Resume')
  
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
            <TabsTrigger value="about">{t('about.title')}</TabsTrigger>
            <TabsTrigger value="experience">{t('experience.title')}</TabsTrigger>
            <TabsTrigger value="education">{t('education.title')}</TabsTrigger>
            <TabsTrigger value="skills">{t('skills.title')}</TabsTrigger>
          </TabsList>

          {/*Content*/}
          <div className="min-h-[70vh] w-full px-3">
            {/*about me*/}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{t('about.title')}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{t('about.description')}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6  gap-x-4 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((key, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start xl:items-start gap-3">
                        <span className="text-accent-default">{t(`about.info.${key}.title`)}</span>
                        <span className="text-md">{t(`about.info.${key}.description`)}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/*Experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{t('experience.title')}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{t('experience.description')}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                       <li 
                       key={index} 
                       className="bg-[#232329] h-[183px] xl:h-[250px] py-6 px-10 rounded-xl flex flex-col
                       justify-center items-center xl:items-start xl:justify-start gap-1"
                     > 
                        <span className="text-accent-default">{t('experience.items.position')}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.company}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* Dot */ }
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-default"></span>
                          <p className="text-white/80">{t('experience.items.duration')}</p>
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
                <h3 className="text-4xl font-bold">{t('education.title')}</h3>
                <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{t('education.description')}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((key, index) => (
                      <li 
                        key={index} 
                        className="bg-[#232329] h-[183px] xl:h-[250px] py-6 px-10 rounded-xl flex flex-col
                        justify-center items-center lg:items-start xl:justify-start gap-1"
                      > 
                        <span className="text-accent-default">{t(`education.courses.${key}.duration`)}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                        {t(`education.courses.${key}.degree`)}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* Dot */ }
                          <span className="w-[6px] h-[6px] rounded-full bg-accent-default"></span>
                          <p className="text-white/80 w-full">{t(`education.courses.${key}.institution`)} </p>
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
                    <h3 className="text-4xl font-bold mb-4">{t('skills.title')}</h3>
                    <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0 mb-8">
                      {t('skills.description')}
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