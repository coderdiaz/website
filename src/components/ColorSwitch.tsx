import useDarkMode from "use-dark-mode";

const ColorSwitch = () => {
  const { value, toggle } = useDarkMode(false, {
    classNameDark: 'dark',
    classNameLight: 'light',
  });

  return <button onClick={toggle} className="inline-flex focus:outline-none items-center text-dark-500 hover:text-dark-800 bg-gray-50 md:hover:bg-gray-100 dark:text-white dark:hover:text-white dark:bg-dark-600 dark:hover:bg-dark-700 rounded-full md:w-auto p-3 transition duration-300 ease-in-out fill-current outline-none shadow-none" aria-label="Switch Dark Mode">
    { value ? <div className="flex items-center">
      <svg className="w-4 h-4 inline-block align-middle flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    </div> : <div className="flex items-center">
      <svg
        className="w-4 h-4 inline-block align-middle flex-shrink-0"
        aria-hidden="true"
        viewBox="0 0 24 24">
        <path fill="currentColor" d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z" />
      </svg>
    </div>}
  </button>;
}

export default ColorSwitch;
