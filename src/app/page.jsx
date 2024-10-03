"use client"
import { useState } from "react";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload, FiChevronDown } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  const [language, setLanguage] = useState("English");

  const cvOptions = {
    English: {
      href: "/assets/ResumeSantiagoRiera-FullstackDev.pdf",
      filename: "CV Santiago Riera - Fullstack Dev (EN).pdf"
    },
    Spanish: {
      href: "/assets/CVSantiagoRiera-FullstackDev.pdf",
      filename: "CV Santiago Riera - Fullstack Dev (ES).pdf"
    }
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /><span className="text-accent-default">Santiago Riera</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a full-stack developer and I'm currently pursuing a degree in Systems Engineering, 
              which allows me to combine academic knowledge with hands-on professional practice. 
              I specialize in JavaScript and frameworks like React and Next.js to build scalable 
              and efficient solutions. 
            </p>

            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2 border-accent-default"
                  >
                    <span>Download CV ({language})</span>
                    <FiChevronDown className="text-xl"/>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage("English")}>
                    <a 
                      href={cvOptions.English.href}
                      download={cvOptions.English.filename}
                      className="flex items-center gap-2"
                    >
                      <FiDownload /> English CV
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("Spanish")}>
                    <a 
                      href={cvOptions.Spanish.href}
                      download={cvOptions.Spanish.filename}
                      className="flex items-center gap-2"
                    >
                      <FiDownload /> Spanish CV
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent-default rounded-full flex items-center 
                  justify-center text-base text-accent-default hover:bg-accent-default hover:text-primary
                  hover:transition-all duaration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}