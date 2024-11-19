"use client"
import { Sheet, SheetContent, SheetTrigger} from "../components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";
import { useState } from "react";

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

function MobileNav() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

  return (
    <Sheet  open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent-default" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          {/* Logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
              <Link href="/" onClick={closeMenu}>
                <h1 className="text-4xl font-semibold">
                  Santiago <span className="text-accent-default">.</span>
                </h1>
              </Link>
            </div>

          {/* Nav */}
          <nav className="flex flex-col items-center justify-center gap-8">
            {links.map((link, index) => {
              return(
                <Link 
                  key={index} 
                  href={link.path}
                  onClick={closeMenu}
                  className={`${link.path === pathname && "text-accent-default border-b-2 border-accent-default"
                  } text-xl capitalize hover:text-accent-default transition-all`} 
                  >  
                  {link.name}
                </Link>
              )
            })}
          </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav