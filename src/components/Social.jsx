import {FaLinkedin} from 'react-icons/fa'
import Link from 'next/link'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/ui/tooltip"
import {BsGithub} from "react-icons/bs"

const socials = [
    "https://www.linkedin.com/in/santi-riera/",
    "https://github.com/santiagoRiera",
];


function Social({containerStyles}) {
  return (
    <div className={containerStyles}>
        {/* live project button */}
        <Link href={socials[0]} target="_blank" rel="noopener noreferrer">
            <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex
                justify-center items-center group"
                >
                <FaLinkedin className="text-white text-3xl group-hover:text-accent-default"/>
                </TooltipTrigger>
                <TooltipContent>
                <p>Linkedin</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
        </Link>

        {/* github project button */}
        <Link href={socials[1]}  target="_blank" rel="noopener noreferrer">
            <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex
                justify-center items-center group"
                >
                <BsGithub className="text-white text-3xl group-hover:text-accent-default"/>
                </TooltipTrigger>
                <TooltipContent>
                <p>Github</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
        </Link>
    </div>
  )
}

export default Social