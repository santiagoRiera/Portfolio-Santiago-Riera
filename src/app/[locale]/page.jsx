import Photo from "../../components/Photo";
import Social from "../../components/Social";
import InteractiveCVDownload from "../../components/CVDownload";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Homepage");

  return (
    <section className="h-full px-3">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{t("title")}</span>
            <h1 className="h1 mb-6">
              {t("hello")} 
              <br/>
              <span className="text-accent-default">{t("name")}</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {t("description")}
            </p>

            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <InteractiveCVDownload />
              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent-default rounded-full flex items-center 
                  justify-center text-base text-accent-default hover:bg-accent-default hover:text-primary
                  hover:transition-all duration-500"
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