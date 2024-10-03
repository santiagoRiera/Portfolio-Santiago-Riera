import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
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
          

            {/*btn and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border-accent-default"
                asChild
              >
                <a 
                  href="/assets/CVSantiagoRiera-FullstackDev.pdf" 
                  download="CV Santiago Riera - Fullstack Dev.pdf"
                  className=""
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl"/>
                </a>
              </Button>
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
          {/*Photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
