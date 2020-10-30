import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const ColorSwitch = dynamic(() => import("@/components/ColorSwitch"), { ssr: false });

const Footer = () => <footer className="py-8">
  <div className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-lg">
    <div className="flex justify-between items-center">
      <Link href="/">
        <a className="flex flex-row items-center fill-current transition duration-300 ease-in-out mr-6">
          <svg className="hidden w-6 h-6" viewBox="0 0 72.28 75.44">
            <path d="M46.08,5.29,17.65,12.51a19.57,19.57,0,0,0-14.75,19V51.18A19.56,19.56,0,0,0,22.47,70.74H49.82A19.56,19.56,0,0,0,69.38,51.18V23.4A18.69,18.69,0,0,0,46.08,5.29Zm.62,42.14L35.43,59.21a5.36,5.36,0,0,1-7.57.17h0a5.38,5.38,0,0,1-.17-7.58l7.56-7.9a5.35,5.35,0,0,0-.16-7.57l-7.91-7.56A5.35,5.35,0,0,1,27,21.2h0A5.36,5.36,0,0,1,34.58,21L46.36,32.29,50.23,36a5.36,5.36,0,0,1,.17,7.57Z" fillRule="evenodd"/>
          </svg>
          <Image
            width={40}
            height={40}
            className="w-10 rounded-full"
            src="/images/avatar.png"
            alt="Avatar of Javier Diaz Chamorro" />
        </a>
      </Link>
      <div className="flex mx-6 justify-center md:justify-between w-full items-center">
        <p className="dark:text-gray-400">
          &copy; 2020 Javier Diaz
        </p>
      </div>
      <ul className="flex items-center">
        <li>
          <ColorSwitch />
        </li>
      </ul>
    </div>
  </div>
</footer>

export default Footer;
