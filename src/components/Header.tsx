import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Menu from "@/components/Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return <header className="py-10 lg:pb-4">
    <div className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-lg">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link href="/">
            <a className="flex flex-row items-center fill-current transition duration-300 ease-in-out mr-6">
              <Image
                width={40}
                height={40}
                className="w-10 rounded-full"
                src="/images/avatar.png"
                alt="Avatar of Javier Diaz Chamorro" />
            </a>
          </Link>
        </div>
        <Navigation className="items-center hidden md:flex" />
        <Menu
          className="block md:hidden dark:text-gray-400 dark:hover:text-gray-500"
          isOpen={isOpen}
          onClick={toggle} />
      </div>
    </div>
  </header>
};

export default Header;
