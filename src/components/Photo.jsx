"use client"
import {motion} from "framer-motion"
import Image from "next/image"

function Photo() {
  return (
    <div className="w-full h-full relative">
        <motion.div 
            initial={{opacity:0}}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.1,
                    delay: 0.9,
                    ease: "easeIn"
                }
            }}
        >

            {/*image */}
            <motion.div
                initial={{opacity:0}}
                animate={{
                    opacity: 1,
                    rotate: -1,
                    transition: {
                        duration: 0.1,
                        delay: 1,
                        ease: "easeInOut",
                    }
                }}
                className="w-[298px] h-[285px] xl:w-[380px] xl:h-[370px] mix-blend-lighten 
                absolute transform"
                >
                <Image
                    src="/assets/photos/imagenCv.png"
                    alt="Photo Santiago Riera"
                    priority 
                    quality={100}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                />
            </motion.div>
            

            {/*circle*/}
            <motion.svg 
                className="w-full xl:w-[400px] h-full xl:h-[400px]"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#00ff99"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{strokeDasharray: "24 10 0 0"}}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120,360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            </motion.svg>
        </motion.div>
    </div>
  )
}

export default Photo