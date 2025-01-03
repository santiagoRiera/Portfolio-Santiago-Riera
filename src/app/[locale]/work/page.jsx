"use client"
import {motion} from "framer-motion"
import { useState } from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import {BsArrowUpRight, BsGithub} from "react-icons/bs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../../components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "../../../components/WorkSliderBtns"
import { useTranslations } from "next-intl";

const projects = [
  {
    num: "01",
    title: "PingPanda",
    stack: [{name: "Typescript"}, {name: "Tailwind"}, {name: "Next.js"}, {name: "Hono.js"}, {name: "Postgres"}],
    image: "/assets/photos/pingpandaImage.png",
    live: "https://pingpanda-santi.vercel.app/",
    github: "https://github.com/santiagoRiera/pingpanda"
  },
  {
    num: "02",
    title: "CaseCobra",
    stack: [{name: "Next.js"}, {name: "React"}, {name: "TypeScript"}, {name: "Tailwind"}, {name: "Postgres"}],
    image: "/assets/photos/casecobra.png",
    live: "https://casecobra-santi.vercel.app/",
    github: "https://github.com/santiagoRiera/casecobra"
  },
  {
    num: "03",
    title: "DigitalHippo",
    stack: [{name: "Next.js"}, {name: "React"}, {name: "Typescript"}, {name: "Tailwind"}, {name: "Express"}, {name:"TRPC"}, {name: "MongoDB"}],
    image: "/assets/photos/digitalhippo.png",
    live: "https://digitalhippo-santi.up.railway.app/",
    github: "https://github.com/santiagoRiera/digitalHippo"
  },
  
]

function Work() {
  const t = useTranslations('Work')
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex
    //update project stote based on current slide index
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 0.8, duration: 0.1, ease: "easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between 
          order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] px-3">

              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold">
                {project.num}
              </div>
              
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white goup-hover:text-accent
                transition-all duration-500 capitalize"
              >
                {t(`projects.${project.title}.category`)}
              </h2>

              {/* project description */}
              <p className="text-white/80">{t(`projects.${project.title}.description`)}</p>

              {/* project stack */}
              <ul className="grid grid-cols-3 gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-accent-default">
                        {item.name}
                        {index != project.stack.length - 1 }
                      </li>
                    )
                  })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4 ">

                {/* live project button */}
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex
                      justify-center items-center group"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent-default"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex
                      justify-center items-center group"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent-default"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
        
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className="xl:h-[520px] mb-12" 
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[400px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      
                      {/* image */}
                      <div className="relative w-full h-[350px]">
                      
                        <Image 
                          src={project.image} 
                          fill 
                          objectFit="cover"
                          className="cover w-full h-full" 
                          alt="casecobra main page" 
                          sizes=""
                        />
                        
                      </div>

                      {/* clickable overlay */}
                      <a 
                        href={project.live}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute top-0 left-0 w-full h-full z-20"
                        onClick={(e) => e.stopPropagation()} // Prevent Swiper from capturing the click
                      >
                        <span className="sr-only">View project</span>
                      </a>
                    </div>
                  </SwiperSlide>
                  
                )
              })}

              {/* slider buttons */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
                xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent-default hover:bg-accent-hover text-primary text-[22px] w-[44px]
                 h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work