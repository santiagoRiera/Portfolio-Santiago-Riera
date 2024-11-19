"use client"
import { useState } from "react";
import { Button } from "../components/ui/button";
import { FiDownload, FiChevronDown } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

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

export default function InteractiveCVDownload() {
  const [language, setLanguage] = useState("English");
  const t = useTranslations("DownloadCV");

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="uppercase flex items-center gap-2 border-accent-default"
        >
          <span>{t("title") + " " + t("language")}</span>
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
            <FiDownload /> {t("enMessage")}
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("Spanish")}>
          <a 
            href={cvOptions.Spanish.href}
            download={cvOptions.Spanish.filename}
            className="flex items-center gap-2"
          >
            <FiDownload /> {t("esMessage")}
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}