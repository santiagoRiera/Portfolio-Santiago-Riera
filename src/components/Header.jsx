import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav";

export default function Header(){
  return (
        <header className="py-8 xl:py-12 text-white px-3">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Santiago<span className="text-accent-default">.</span>
                    </h1>
                </Link>
                
                {/* Desktop nav and hire me */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/* Mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
};

