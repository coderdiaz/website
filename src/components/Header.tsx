import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import SiteMetadata from '@/seo.config';

const ColorSwitch = dynamic(() => import('@/components/ColorSwitch'), { ssr: false });

const Header = () => {
  const {
    social: { twitter }
  } = SiteMetadata;

  return <header className="py-10">
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
          <ul className="flex items-center">
            <li className="hidden mr-2">
              <a href="#" className="py-2 px-4 transition duration-200 ease-in-out hover:bg-gray-50 rounded">Projects</a>
            </li>
            <li>
              <a href="" className="py-2 px-4 transition duration-200 ease-in-out hover:bg-gray-50 rounded">About me</a>
            </li>
          </ul>
        </div>
        <ul className="flex items-center">
          <li className="mr-6">
            <ColorSwitch />
          </li>
          <li>
            <a href={`https://twitter.com/${twitter}`} className="py-2 px-4 transition duration-200 text-white ease-in-out bg-dark bg-opacity-90 hover:bg-opacity-100 rounded">
              Follow me
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
};

export default Header;
