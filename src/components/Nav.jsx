"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link 
          href={link.path} 
          key={index}
          className={`${link.path === pathname && "text-accent-default border-b-2 border-accent-default"}
          capitalize font-medium hover:text-accent-default transition-all`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}
