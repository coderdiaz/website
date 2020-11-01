import Image from "next/image";
import Layout from "@/components/Layout";
import Head from "@/components/Head";

const IndexPage = () => {
  return <Layout>
    <Head meta={{
      image: 'https://coderdiaz.me/images/og-home.jpg',
    }} />
    <section className="md:pt-2 pb-2">
      <div className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-lg relative">
        <h1 className="inline-block text-4xl md:text-6xl font-bold font-inter mb-4 dark:text-white relative">
          Hey! I'm Javier
        </h1>
        <div className="mb-6 md:w-5/6 lg:w-7/12 relative">
          <p className="leading-loose text-lg mb-4 dark:text-gray-300">
            I'm a developer and creator from Mexico City 🇲🇽 . I work on the <a className="border-b-2 border-gray-200 transition duration-200 ease-in-out hover:border-gray-400" href="https://bedu.org">BEDU</a> team as a Software Engineer Lead.
          </p>
          <p className="leading-loose text-lg mb-4 dark:text-gray-300">Currently, I'm developing platforms and websites with Jamstack. I mostly do <span className="text-">front-end</span> development but also back-end.</p>
          <p className="leading-loose text-lg mb-16 dark:text-gray-300">
            I'm <span className="font-semibold">coderdiaz</span> on <a className="border-b-2 border-gray-200 transition duration-200 ease-in-out hover:border-gray-400" href="https://twitter.com/coderdiaz">Twitter</a> and <a className="border-b-2 border-gray-200 transition duration-200 ease-in-out hover:border-gray-400" href="https://github.com/coderdiaz">GitHub</a>, also I take <a className="border-b-2 border-gray-200 transition duration-200 ease-in-out hover:border-gray-400" href="https://vsco.co/coderdiaz">photos</a> and share my designs in <a className="border-b-2 border-gray-200 transition duration-200 ease-in-out hover:border-gray-400" href="https://dribbble.com/coderdiaz">Dribbble</a>. Come say hello! Let's be internet buddies, or grab a coffee.
          </p>
          <div className="absolute right-0 top-0 -mt-4 -mr-102 w-72 h-full dark:opacity-90">
            <div className="circle-pink absolute right-0 mr-64 w-18" />
            <div className="w-pink absolute right-0 mt-48 mr- w-8" />
            <div className="w-blue absolute right-0 w-5 mr-36 transform rotate-180 -mt-4" />
            <div className="w-blue absolute left-0 mt-48 ml-12 w-6" />
            <div className="l-blue absolute right-0 mt-10 w-4" />
            <div className="circle-yellow absolute right-0 mr-20 mt-20 w-32" />
            <div className="w-yellow absolute right-0 mt-48 w-6 hidden" />
            <div className="l-yellow absolute right-0 top-0 -mt-20 mr-20 w-18" />
          </div>
        </div>
      </div>
    </section>
    <section className="pt-2 pb-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-lg">
        <h2 className="text-xl md:text-2.5xl font-bold font-inter mb-6 dark:text-white">What I do</h2>
        <div className="grid md:grid-cols-4 lg:grid-cols-3 gap-10">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="bg-primary-500 w-20 h-20 p-4 rounded-2xl mb-4 flex justify-center align-middle">
              <svg className="fill-current text-white text-opacity-75 w-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path
                  d="M41 32.16v-3.32A2.835 2.835 0 0043 26a2.87 2.87 0 00-3-3 3.044 3.044 0 00-1.906.63l-3.156-1.973A3.573 3.573 0 0035 21a2.835 2.835 0 00-2-2.84v-3.32A2.835 2.835 0 0035 12a2.87 2.87 0 00-3-3 3.044 3.044 0 00-1.906.63l-3.156-1.973A3.573 3.573 0 0027 7a2.87 2.87 0 00-3-3 2.87 2.87 0 00-3 3 3.573 3.573 0 00.062.657L17.906 9.63A3.044 3.044 0 0016 9a2.87 2.87 0 00-3 3 2.835 2.835 0 002 2.84v3.32A2.835 2.835 0 0013 21a3.573 3.573 0 00.062.657L9.906 23.63A3.044 3.044 0 008 23a2.87 2.87 0 00-3 3 2.835 2.835 0 002 2.84v3.32A2.835 2.835 0 005 35a2.87 2.87 0 003 3 3.044 3.044 0 001.906-.63l3.156 1.973A3.573 3.573 0 0013 40a2.87 2.87 0 003 3 2.87 2.87 0 003-3 3.573 3.573 0 00-.062-.657l3.156-1.973a3.2 3.2 0 003.812 0l3.156 1.973A3.573 3.573 0 0029 40a3 3 0 006 0 3.573 3.573 0 00-.062-.657l3.156-1.973A3.044 3.044 0 0040 38a2.87 2.87 0 003-3 2.835 2.835 0 00-2-2.84zM37 35a3.573 3.573 0 00.062.657l-3.156 1.973a3.2 3.2 0 00-3.812 0l-3.156-1.973A3.573 3.573 0 0027 35a2.835 2.835 0 00-2-2.84v-3.32A2.835 2.835 0 0027 26a3.573 3.573 0 00-.062-.657l3.156-1.973a3.2 3.2 0 003.812 0l3.156 1.973A3.573 3.573 0 0037 26a2.835 2.835 0 002 2.84v3.32A2.835 2.835 0 0037 35zm-16 0a3.573 3.573 0 00.062.657l-3.156 1.973a3.2 3.2 0 00-3.812 0l-3.156-1.973A3.573 3.573 0 0011 35a2.835 2.835 0 00-2-2.84v-3.32A2.835 2.835 0 0011 26a3.573 3.573 0 00-.062-.657l3.156-1.973a3.2 3.2 0 003.812 0l3.156 1.973A3.573 3.573 0 0021 26a2.835 2.835 0 002 2.84v3.32A2.835 2.835 0 0021 35zm-2-23a3.573 3.573 0 00-.062-.657l3.156-1.973a3.2 3.2 0 003.812 0l3.156 1.973A3.573 3.573 0 0029 12a2.835 2.835 0 002 2.84v3.32A2.835 2.835 0 0029 21a3.573 3.573 0 00.062.657l-3.156 1.973a3.2 3.2 0 00-3.812 0l-3.156-1.973A3.573 3.573 0 0019 21a2.835 2.835 0 00-2-2.84v-3.32A2.835 2.835 0 0019 12zm14 9a1 1 0 01-2 0 1 1 0 012 0zm-9 6a1 1 0 010-2 1 1 0 010 2zm16-2a1 1 0 11-1 1 .884.884 0 011-1zm-8-14a.884.884 0 011 1 1 1 0 01-2 0 .884.884 0 011-1zm-8-5a.884.884 0 011 1 .884.884 0 01-1 1 .884.884 0 01-1-1 .884.884 0 011-1zm-8 5a.884.884 0 011 1 .884.884 0 01-1 1 .884.884 0 01-1-1 .884.884 0 011-1zm0 9a.884.884 0 011 1 .884.884 0 01-1 1 .884.884 0 01-1-1 .884.884 0 011-1zm-8 5a1 1 0 010 2 1 1 0 010-2zm0 11a1 1 0 010-2 1 1 0 010 2zm8 5a1 1 0 010-2 1 1 0 010 2zm8-5a1 1 0 010-2 1 1 0 010 2zm8 5a1 1 0 111-1 .884.884 0 01-1 1zm8-5a1 1 0 111-1 .884.884 0 01-1 1z" />
              </svg>
            </div>
            <span className="inline-block text-lg font-semibold mb-2 dark:text-white">Software Development</span>
            <p className="leading-loose mr-4 dark:text-gray-300">I build awesome software experiences using the best skills and technologies according to product.</p>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <div className="bg-blue w-20 h-20 p-4 rounded-2xl mb-4 flex justify-center align-middle">
              <svg className="fill-current text-white text-opacity-75 w-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path
                  d="M6 16h36v13h2V10a2 2 0 00-2-2H6a2 2 0 00-2 2v28a2 2 0 002 2h22v-2H6zm36-6v4H6v-4zM8 12a1 1 0 111 1 1 1 0 01-1-1zm32.956 24.542L44 35.781v-2.468l-14.248-5.48-1.919 1.919L33.313 44h2.468l.761-3.044L40 44.414 44.414 40zm-5.5.5L34.4 41.263l-4.233-11.015.081-.081L41.264 34.4l-4.22 1.055L41.586 40 40 41.586zM12 28a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2zm0 6v-4h4v4zm25-11H20v-2h17zm-17 8h6v2h-6zm-.231-12.36l-5.3 6.36H12.52l-2.3-2.875 1.562-1.25L13.531 23l4.7-5.64zM12 12a1 1 0 111 1 1 1 0 01-1-1z" />
              </svg>
            </div>
            <span className="inline-block text-lg font-semibold mb-2 dark:text-white">UI Development</span>
            <p className="leading-loose mr-4 dark:text-gray-300">I develop user friendly and visually products. I build delightful experiences that let users achieve their goals.</p>
          </div>
          <div className="md:col-span-2  lg:col-span-1">
            <div className="bg-yellow-400 w-20 h-20 p-4 rounded-2xl mb-4 flex justify-center align-middle">
              <svg className="fill-current text-white text-opacity-75 w-28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path
                  d="M42 6H6a2 2 0 00-2 2v32a2 2 0 002 2h36a2 2 0 002-2V8a2 2 0 00-2-2zM20 8v14h-1c0-3.084-2.3-5-6-5s-6 1.916-6 5H6V8zM9 22c0-2.479 2.175-3 4-3s4 .521 4 3zm-3 2h16V8h20v22.823a29.365 29.365 0 00-2.027-.851c-2.346-.908-3.736-1.529-3.9-3.19a11.191 11.191 0 001.427-3.516 3.745 3.745 0 00.855-4.442C38.349 15.439 38.19 11 32 11s-6.349 4.433-6.353 7.818a3.65 3.65 0 00.855 4.45 11.2 11.2 0 001.421 3.51c-.16 1.373-1.344 1.869-3.472 2.645-2.6.945-5.824 2.12-6.439 6.425L17.373 40H6zm23.653 1.739a8.835 8.835 0 01-1.264-3.189l-.066-.3-.218-.21c-.884-.851-1.1-1.682-.623-2.405l.165-.251v-.3c0-.436.007-.84.019-1.226a11.182 11.182 0 002.211-.7 8.46 8.46 0 004.6 1.126 15.538 15.538 0 001.866-.137c.007.3.011.612.011.942v.286l.151.243c.475.764.27 1.581-.609 2.427l-.219.21-.065.3a8.835 8.835 0 01-1.264 3.189l-.288.292v.41a4.527 4.527 0 00.664 2.476 4.656 4.656 0 01-5.565.026 4 4 0 00.783-2.5v-.41zm-1.778-9.984C28.268 13.864 29.314 13 32 13c2.87 0 3.865.99 4.2 3.161-3.933.511-5.485-.866-5.488-.868l-.51-.509-.643.321a11.318 11.318 0 01-1.684.65zM19.4 40l.594-3.858c.447-3.129 2.729-3.96 5.145-4.84a16.619 16.619 0 002.448-1.045 6.69 6.69 0 008.558.1 15.061 15.061 0 003.109 1.484A17.894 17.894 0 0142 33.094V40zM13 16a3.314 3.314 0 003.5-3.5A3.314 3.314 0 0013 9a3.314 3.314 0 00-3.5 3.5A3.314 3.314 0 0013 16zm0-5a1.344 1.344 0 011.5 1.5A1.344 1.344 0 0113 14a1.344 1.344 0 01-1.5-1.5A1.344 1.344 0 0113 11zm20 26a1 1 0 11-1-1 1 1 0 011 1zm0-3a1 1 0 11-1-1 1 1 0 011 1z" />
              </svg>
            </div>
            <span className="inline-block text-lg font-semibold mb-2 dark:text-white">Mentoring/Teaching</span>
            <p className="leading-loose mr-4 dark:text-gray-300">Each person has a story and a goal. I will help you achieve your professional growth through software.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="pt-4 pb-30">
      <div className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-lg relative">
        <div className="flex md:flex-col overflow-hidden relative bg-gradient-to-l from-blue-500 md:from-blue-300 to-purple rounded-lg p-8 md:p-16">
          <div className="flex flex-col justify-center lg:w-3/6 md:mr-32">
            <h3 className="font-bold font-inter text-2xl text-white md:mr-10 mb-4 leading-tight">
              Let's learn something new together!
            </h3>
            <p className="leading-loose text-lg mb-8 text-white">
              Education is for everyone and <span className="font-semibold">YouTube</span> is a great space to share knowledge. You can access all my content focused on solving problems through technology.
            </p>
            <a href="https://www.youtube.com/channel/UCMcn-dkjGbCCdnos9416ZhQ" className="inline-flex items-center md:w-4/6 justify-center px-6 py-4 transition duration-200 ease-in-out bg-white text-dark-900 hover:text-purple hover:shadow-md transform hover:-translate-y-1 rounded-md font-semibold">
              <span className="mr-2">Go to channel</span>
              <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="relative">
            <div className="lg:absolute right-0 top-0 lg:-mt-96 lg:-mr-32">
              <div className="hidden lg:inline-block">
                <Image
                  width={512}
                  height={512}
                  src="/images/creator-content.png"
                  alt="Education is for everyone" />
              </div>
            </div>
          </div>
        </div>
        <div className="circle-pink opacity-50 dark:opacity-75 absolute left-0 top-0 -ml-48 -mt-12 w-18" />
        <div className="w-blue opacity-50 dark:opacity-75 absolute left-0 top-0 -ml-32 -mt-32 w-8" />
        <div className="circle-blue opacity-50 dark:opacity-75 absolute right-0 bottom-0 -mr-48 -mb-12 w-18" />
        <div className="w-pink opacity-50 dark:opacity-75 absolute right-0 bottom-0 -mr-48 -mb-48 w-18" />
        <div className="l-yellow opacity-50 dark:opacity-75 absolute right-0 bottom-0 -mr-32 -mb-26 w-12" />
      </div>
    </section>
    <section className="pt-4 pb-4">
      <div className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-lg relative">
        <h2 className="text-xl md:text-2.5xl font-bold font-inter mb-4 w-80 leading-tight dark:text-white">Some great projects I worked on</h2>
        <p className="leading-loose text-lg mb-12 md:w-112 dark:text-gray-300">This is a just part of them, have a look at my work! If you have an idea. <a className="border-b-2 border-gray-200 transition duration-200 ease-in-out hover:border-gray-400" href="mailto:hello@coderdiaz.me">Contact me</a>.</p>
        <div className="bg-gradient-to-l from-neureta-from to-neureta-to rounded-md mb-10 border border-neureta-from ">
          <div className="p-8 lg:p-16 overflow-hidden">
            <div className="flex">
              <div className="pr-2 lg:pr-18">
                <h3 className="text-3xl md:text-4xl font-inter font-bold text-white mb-4 leading-none">Neureta</h3>
                <p className="leading-loose mr-4 text-white text-lg mb-6">A simple Jamstack e-commerce using Stripe and Stripe Checkout to sell special education courses.</p>
                <span className="line-through inline-flex items-center font-semibold text-white transition duration-200 ease-in-out border-b-2 border-transparent hover:border-white opacity-75 hover:opacity-100 tracking-wide">
                  <span className="mr-2">Coming soon</span>
                  <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
              <div className="hidden md:block w-3/6 flex-shrink-0 relative">
                <div className="absolute top-0 -mt-10 md:-ml-0 lg:-ml-12">
                  <Image
                    width={600}
                    height={382}
                    src="/images/projects/neureta-cover.png"
                    alt="Website of Neureta" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-l from-gray-500 to-gray-900 rounded-md mb-24 border border-gray-600">
          <div className="p-8 lg:p-16 overflow-hidden">
            <div className="flex">
              <div className="pr-2 lg:pr-18">
                <h3 className="text-3xl md:text-4xl font-inter font-bold text-white mb-4 leading-none">Bedu</h3>
                <p className="leading-loose mr-4 text-white text-lg mb-6">We are talent trainers: we raise the professional level of our students through an accelerated and flexible learning model.</p>
                <span className="line-through inline-flex items-center font-semibold text-white transition duration-200 ease-in-out border-b-2 border-transparent hover:border-white opacity-75 hover:opacity-100 tracking-wide">
                  <span className="mr-2">Coming soon</span>
                  <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
              <div className="hidden md:block w-3/6 flex-shrink-0 relative">
                <div className="absolute top-0 -mt-10 md:-ml-0 lg:-ml-12">
                  <Image
                    width={600}
                    height={382}
                    src="/images/projects/bedu-cover.png"
                    alt="Website of Bedu" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden text-center">
          <a href="#" className="inline-flex w-72 rounded-lg py-4 px-2 justify-center items-center border-2 border-dark-500 font-semibold transition duration-200 ease-in-out transform hover:-translate-y-1">
            <span className="mr-2">Go to projects</span>
            <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
          </a>
        </div>
        <div className="absolute top-0 left-0 -ml-64 mt-56">
          <div className="w-blue opacity-50 dark:opacity-75 absolute right-0 bottom-0 -mr-48 -mb-0 w-18" />
          <div className="l-yellow opacity-50 dark:opacity-75 absolute right-0 bottom-0 -mr-32 -mb-26 w-12" />
        </div>
        <div className="absolute bottom-0 right-0 -mr-12">
          <div className="circle-yellow opacity-50 dark:opacity-75 absolute right-0 bottom-0 -mr-48 -mb-0 w-18" />
          <div className="l-blue absolute opacity-50 dark:opacity-75 right-0 bottom-0 -mr-32 -mb-26 w-4 transform -rotate-45" />
        </div>
      </div>
    </section>
    <section className="pt-4 pb-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-lg relative">
        <h2 className="text-xl md:text-2.5xl font-bold font-inter mb-4 dark:text-white">OSS Contributions</h2>
        <p className="leading-loose text-lg mb-16 md:w-112 dark:text-gray-300">
          A compilation of my Open Source projects on GitHub. Many of these projects are centered to solve an specific problem in JavaScript frameworks.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-dark-100 dark:bg-dark-700 rounded-md px-6 py-5">
            <span className="inline-block font-inter font-semibold text-white mb-2">Tiny Pagination</span>
            <p className="leading-loose text-white mb-6">A vue component to create a simple pagination using Flexbox</p>
            <a href="https://github.com/coderdiaz/vue-tiny-pagination" className="inline-flex items-center font-semibold text-white transition duration-200 ease-in-out border-b-2 border-transparent hover:border-white opacity-75 hover:opacity-100 tracking-wide">
              <span className="mr-2">View code</span>
              <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="bg-dark-100 dark:bg-dark-700 rounded-md px-6 py-5">
            <span className="inline-block font-inter font-semibold text-white mb-2">Card Brand</span>
            <p className="leading-loose text-white mb-6">
              A zero-dependency react hook to show the card brand
            </p>
            <a href="https://github.com/coderdiaz/react-card-brand" className="inline-flex items-center font-semibold text-white transition duration-200 ease-in-out border-b-2 border-transparent hover:border-white opacity-75 hover:opacity-100 tracking-wide">
              <span className="mr-2">View code</span>
              <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="bg-dark-100 dark:bg-dark-700 rounded-md px-6 py-5">
            <span className="inline-block font-inter font-semibold text-white mb-2">Yell Theme</span>
            <p className="leading-loose text-white mb-6">
              VS Code theme for dark lovers with accessible colors
            </p>
            <a href="https://github.com/coderdiaz/yell-vscode-theme" className="inline-flex items-center font-semibold text-white transition duration-200 ease-in-out border-b-2 border-transparent hover:border-white opacity-75 hover:opacity-100 tracking-wide">
              <span className="mr-2">View code</span>
              <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="hidden md:block bg-dark-100 dark:bg-dark-700 rounded-md px-6 py-5">
            <span className="inline-block font-inter font-semibold text-white mb-2">Status Indicator</span>
            <p className="leading-loose text-white mb-6">
              A vue component to show an indicator as colored dots
            </p>
            <a href="https://github.com/coderdiaz/vue-status-indicator" className="inline-flex items-center font-semibold text-white transition duration-200 ease-in-out border-b-2 border-transparent hover:border-white opacity-75 hover:opacity-100 tracking-wide">
              <span className="mr-2">View code</span>
              <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="hidden md:block bg-dark-100 dark:bg-dark-700 rounded-md px-6 py-5">
            <span className="inline-block font-inter font-semibold text-white mb-2">Scoreboard</span>
            <p className="leading-loose text-white mb-6">
              A game scoreboard using Vue based on React project from Treehouse
            </p>
            <a href="https://github.com/coderdiaz/scoreboard" className="inline-flex items-center font-semibold text-white transition duration-200 ease-in-out border-b-2 border-transparent hover:border-white opacity-75 hover:opacity-100 tracking-wide">
              <span className="mr-2">View code</span>
              <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="hidden md:block bg-dark-100 dark:bg-dark-700 rounded-md px-6 py-5">
            <span className="inline-block font-inter font-semibold text-white mb-2">Datasource</span>
            <p className="leading-loose text-white mb-6">
              A component to create dynamic tables with Vue 2.x
            </p>
            <a href="https://github.com/coderdiaz/vue-datasource" className="inline-flex items-center font-semibold text-white transition duration-200 ease-in-out border-b-2 border-transparent hover:border-white opacity-75 hover:opacity-100 tracking-wide">
              <span className="mr-2">View code</span>
              <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute top-0 left-0 -ml-64 mt-56">
          <div className="w-pink opacity-50 dark:opacity-75 absolute right-0 bottom-0 -mr-48 -mb-0 w-18" />
          <div className="l-yellow opacity-50 dark:opacity-75 absolute right-0 bottom-0 -mr-32 -mb-26 w-12" />
        </div>
        <div className="absolute bottom-0 right-0 -mr-12">
          <div className="circle-blue opacity-50 dark:opacity-75 absolute right-0 bottom-0 -mr-12 mb-10 w-18" />
          <div className="l-yellow absolute opacity-50 dark:opacity-75 right-0 bottom-0 -mr-32 -mb-8 w-20 transform -rotate-45" />
        </div>
      </div>
    </section>
  </Layout>;
}

export default IndexPage;
