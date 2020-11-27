import Image from "next/image";
import Layout from "@/components/Layout";
import Head from "@/components/Head";

const Books = () => {
  return <Layout>
    <Head meta={{
      image: 'https://coderdiaz.me/images/my-books.jpg',
    }} />
    <section className="md:pt-12 pb-8">
      <div className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-md">
        <h1 className="text-3xl md:text-5xl font-bold font-inter mb-4 dark:text-white">Books</h1>
        <p className="leading-loose text-lg mb-6 md:mb-12 md:w-4/6 dark:text-gray-100">A working list of all of the books I'm reading in 2020. Ranging from algorithms to beign better developer and manager, I try to dedicate my early mornings to exploring this variety of topics.</p>
        <div className="relative mb-6 md:mb-12">
          <Image
            className="rounded-xl"
            width={1024}
            height={576}
            src="/images/my-books.jpg" />
        </div>
        <ul className="mb-16">
          <li className="mb-4">
            <a className="inline-flex flex-col md:flex-row w-full p-4 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-dark-300 dark:hover:bg-dark-200 transition duration-200 ease-in-out" href="https://www.smashingmagazine.com/printed-books/design-systems/">
              <div className="relative rounded-lg w-full h-48 md:w-42 md:h-42 mb-4 md:mb-0 mr-4 overflow-hidden flex-shrink-0">
                <Image
                  className="absolute object-cover rounded-lg"
                  width={380}
                  height={380}
                  src="/images/books/design-systems.jpg" />
              </div>
              <div className="flex flex-col">
                <span className="inline-block font-inter text-lg text-dark dark:text-white font-semibold">
                  Design Systems
                </span>
                <span className="inline-block text-base dark:text-white font-semibold mb-2">by Alla Kholmatova</span>
                <p className="leading-relaxed dark:text-gray-400">This book presents a perspective on design systems based on the Newman's experiences as an interaction and visual designer. This is a design book, but it isn't about what to design.</p>
              </div>
            </a>
          </li>
          <li className="mb-4">
            <a className="inline-flex flex-col md:flex-row w-full p-4 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-dark-300 dark:hover:bg-dark-200 transition duration-200 ease-in-out" href="https://www.amazon.com/Monolith-Microservices-Evolutionary-Patterns-Transform/dp/1492047848">
              <div className="relative rounded-lg w-full h-48 md:w-42 md:h-42 mb-4 md:mb-0 mr-4 overflow-hidden flex-shrink-0">
                <Image
                  className="absolute object-cover rounded-lg"
                  width={380}
                  height={380}
                  src="/images/books/monolith-to-microservices.jpg" />
              </div>
              <div className="flex flex-col">
                <span className="inline-block font-inter text-lg text-dark dark:text-white font-semibold">Monolith to Microservices</span>
                <span className="inline-block text-base dark:text-white font-semibold mb-2">by Sam Newman</span>
                <p className="leading-relaxed dark:text-gray-400">This book is designed as a deep dive into how you think about, and execute, breaking apart existing systems into a microservice architecture, but the focus is on the descomposition side of things.</p>
              </div>
            </a>
          </li>
          <li className="mb-4">
            <a className="inline-flex flex-col md:flex-row w-full p-4 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-dark-300 dark:hover:bg-dark-200 transition duration-200 ease-in-out" href="https://www.smashingmagazine.com/printed-books/form-design-patterns/">
              <div className="relative rounded-lg w-full h-48 md:w-42 md:h-42 mb-4 md:mb-0 mr-4 overflow-hidden flex-shrink-0">
                <Image
                  className="absolute object-cover rounded-lg"
                  width={380}
                  height={380}
                  src="/images/books/form-design-patterns.jpg" />
              </div>
              <div className="flex flex-col">
                <span className="inline-block font-inter text-lg text-dark dark:text-white font-semibold">Form Design Patterns</span>
                <span className="inline-block text-base dark:text-white font-semibold mb-2">by Adam Silver</span>
                <p className="leading-relaxed dark:text-gray-400">Design patterns serve as guidance and solutions to people solving similar problems over and over. The reason for design patterns is twofold. Second, by solving the same problem in the same way, users haver a consistent and more coherent experience.</p>
              </div>
            </a>
          </li>
          <li className="mb-4">
            <a className="inline-flex flex-col md:flex-row w-full p-4 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-dark-300 dark:hover:bg-dark-200 transition duration-200 ease-in-out" href="https://www.amazon.com/Introducing-Go-Reliable-Scalable-Programs/dp/1491941952">
              <div className="relative rounded-lg w-full h-48 md:w-42 md:h-42 mb-4 md:mb-0 mr-4 overflow-hidden flex-shrink-0">
                <Image
                  className="absolute object-cover rounded-lg"
                  width={380}
                  height={380}
                  src="/images/books/introducing-to-go.jpg" />
              </div>
              <div className="flex flex-col">
                <span className="inline-block font-inter text-lg text-dark dark:text-white font-semibold">Introducing to Go</span>
                <span className="inline-block text-base dark:text-white font-semibold mb-2">by Caleb Doxsey</span>
                <p className="leading-relaxed dark:text-gray-400">This book is written for relative inexperienced programmers who know nothing about Go. Although not exhaustive, it does cover all of the basics, and show leave you well positioned to tackle the more advanced material available on the language.</p>
              </div>
            </a>
          </li>
          <li className="mb-4">
            <a className="inline-flex flex-col md:flex-row w-full p-4 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-dark-300 dark:hover:bg-dark-200 transition duration-200 ease-in-out" href="https://www.smashingmagazine.com/printed-books/smashing-book-6-new-frontiers-in-web-design/">
              <div className="relative rounded-lg w-full h-48 md:w-42 md:h-42 mb-4 md:mb-0 mr-4 overflow-hidden flex-shrink-0">
                <Image
                  className="absolute object-cover rounded-lg"
                  width={380}
                  height={380}
                  src="/images/books/new-frontiers-in-web-design.jpg" />
              </div>
              <div className="flex flex-col">
                <span className="inline-block font-inter text-lg text-dark dark:text-white font-semibold">New Frontiers in Web Design</span>
                <span className="inline-block text-base dark:text-white font-semibold mb-2">by Smashing Magazine</span>
                <p className="leading-relaxed dark:text-gray-400">It’s about time to finally make sense of all the front-end and UX madness. This book contains everything from design systems to accessible single-page apps, CSS Custom Properties, CSS Grid, Service Workers, performance patterns, AR/VR, conversational UIs and responsive art direction.</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>;
}

export default Books;
