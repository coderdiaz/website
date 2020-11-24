import Link from "next/link";
import dynamic from "next/dynamic";
const ColorSwitch = dynamic(() => import('@/components/ColorSwitch'), { ssr: false });

interface INavigationProps {
  className?: string;
}

const Navigation = ({ className }: INavigationProps) => {
  return <ul className={className}>
    <li className="block md:hidden mb-4 md:mb-0 md:mr-4">
      <Link href="/">
        <a className="text-lg md:text-normal px-6 py-4 md:py-2 md:px-4 transition duration-200 ease-in-out dark:text-gray-100 dark:hover:text-gray-400 md:dark:hover:bg-dark-700 md:hover:bg-gray-50 rounded">
          Home
        </a>
      </Link>
    </li>
    <li className="mb-4 md:mb-0 md:mr-4">
      <Link href="/uses">
        <a className="text-lg md:text-normal px-6 py-4 md:py-2 md:px-4 transition duration-200 ease-in-out dark:text-gray-100 md:dark:hover:bg-dark-700 md:hover:bg-gray-50 rounded">
          Uses
        </a>
      </Link>
    </li>
    <li className="mb-4 md:mb-0 md:mr-4">
      <Link href="/books">
        <a className="text-lg md:text-normal px-6 py-4 md:py-2 md:px-4 transition duration-200 ease-in-out dark:text-gray-100 md:dark:hover:bg-dark-700 md:hover:bg-gray-50 rounded">
          Books
        </a>
      </Link>
    </li>
    <li className="mb-4 md:mb-0 md:mr-4">
      <Link href="/about">
        <a className="text-lg md:text-normal px-6 py-4 md:py-2 md:px-4 transition duration-200 ease-in-out dark:text-gray-100 md:dark:hover:bg-dark-700 md:hover:bg-gray-50 rounded">
          About me
        </a>
      </Link>
    </li>
    <li className="px-6 py-4">
      <ColorSwitch />
    </li>
  </ul>
}

export default Navigation;
