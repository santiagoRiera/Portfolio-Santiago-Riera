"use client";
import { Link, usePathname } from "../i18n/routing";
import { useTranslations } from "next-intl";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  }
]

export default function Nav() {
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link 
            href={link.path} 
            key={index}
            className={`${pathname === link.path ? "text-accent-default border-b-2 border-accent-default" : ""}
            capitalize font-medium hover:text-accent-default transition-all`}
          >
             {t(link.name)}
          </Link>
        )
      })}
    </nav>
  )
}