import Image from "next/image";
import Layout from "@/components/Layout";
import Head from "@/components/Head";

const AboutPage = () => {
  return <Layout>
    <Head meta={{
      title: 'About me — Developer and creator from Mexico City'
    }} />
    <section className="md:pt-8 pb-2">
      <div className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-md">
        <h1 className="text-3xl md:text-5xl font-bold font-inter mb-4 dark:text-white">About me</h1>
        <p className="leading-relaxed text-lg mb-8 md:w-4/6 dark:text-gray-100">
          Hey, I'm Javier a.k.a. <span className="px-2 py-1 bg-gray-50 dark:bg-dark-600 dark:text-gray-100 rounded-md">coderdiaz</span> a developer and creator building amazing platforms and websites with Jamstack. I live in Mexico City <span className="inline-block mx-1">🇲🇽</span> with my wife <a className="border-b-2 border-gray-200 transition duration-200 ease-in-out hover:border-gray-400" href="https://www.instagram.com/manzanita_becky/">Becky</a>.
        </p>
        <div className="relative mb-8">
          <Image
            className="rounded-xl"
            width={1024}
            height={576}
            src="/images/coderdiaz-programming.png" />
        </div>
        <p className="leading-relaxed text-lg mb-4 dark:text-gray-100">
          Currently, I work as a Software Engineer on the BEDU team, a Startup focused on break the educative breach in Mexico using technology and education for impulse people growth.
        </p>
        <p className="leading-relaxed text-lg mb-4 dark:text-gray-100">
          My main focus is developing acquisition from the Website, keeping our Headless E-commerce and Checkout using a Jamstack and microservices architecture for a nicely scalability.
        </p>
        <p className="leading-relaxed text-lg mb-10 dark:text-gray-100">
          I spend my free time playing music, creating videos, and enjoying time with friends and family.
        </p>
        <h2 className="text-xl md:text-2.5xl font-bold font-inter mb-4 dark:text-white">Brief history</h2>
        <p className="leading-relaxed text-lg mb-4 dark:text-gray-100">
          I started software development with sill in high school, after being introduced by a friend. My first programs were written using C, Visual Basic and C++. I attend the collage at the Instituto Tecnologico de Lazaro Cardenas (ITLAC) and study the degree in Computer System Engineering.
        </p>
        <p className="leading-relaxed text-lg mb-4 dark:text-gray-100">
          In 2015, I get my first job in the Port of Lazaro Cardenas (APILAC) as a Web Developer working with Laravel, Vue and other technologies. Here, I obtained the motivation for teamwork and professional development of the teams I worked with and thus achieve to perform as a technical leader and in a future CTO.
        </p>
        <p className="leading-relaxed text-lg mb-4 dark:text-gray-100">
          In 2017, I travel to Mexico City to work in a Startup called <a className="border-b-2 border-gray-200 transition duration-200 ease-in-out hover:border-gray-400" href="https://pulpomatic.com">Pulpomatic</a>, a SaaS for fleet management, reduce costs and save time in management tasks. I was working in the migration from a older dashboard using a Monolitic archicture to better approach using services. Same year, I left Pulpomatic to join a Mexico-based digital media publisher called <a className="border-b-2 border-gray-200 transition duration-200 ease-in-out hover:border-gray-400" href="https://pulpomatic.com">Cultura Colectiva</a>. It publishes content designed to be shared over social media networks targeted at a Latin American audience.
        </p>
        <p className="leading-relaxed text-lg mb-10 dark:text-gray-100">
          For 2019, I was looking for new challenges and I joined the <a className="border-b-2 border-gray-200 transition duration-200 ease-in-out hover:border-gray-400" href="https://bedu.org">BEDU</a> team, first as an Mentor in the Web Development Bootcamp and later as a Technical Leader in Software Engineering. Months later, I was invited to collaborate in the creation of a course in Platzi called <a className="border-b-2 border-gray-200 transition duration-200 ease-in-out hover:border-gray-400" href="https://platzi.com/cursos/vuejs-avanzado/">Advanced Vuejs</a> which I had the pleasure of recording at Platzi HQ in Bogota, Colombia.
        </p>
        <h2 className="text-xl md:text-2.5xl font-bold font-inter mb-4 dark:text-white">Technology Stack</h2>
        <p className="leading-relaxed text-lg mb-4 dark:text-gray-100">
          My primary focus as a software engineer is on web development, which I have been doing since late 2010s. My first projects we build with HTML, CSS, JavaScript, PHP and MySQL. Now, I work using JavaScript how my main language but too I’m creating application using the powerful Go language.
        </p>
        <p className="leading-relaxed text-lg mb-8 dark:text-gray-100">
          My favorite libraries and frameworks are Vue, React, Nest.js, Next.js, Gatsby and Echo. Actually, I create my web designs using <a className="border-b-2 border-gray-200 transition duration-200 ease-in-out hover:border-gray-400" href="https://figma.com">Figma</a> and implementing on web using <a className="border-b-2 border-gray-200 transition duration-200 ease-in-out hover:border-gray-400" href="https://tailwindcss.com">TailwindCSS</a>, a utility-first CSS framework designed to rapid UI development.
        </p>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-8 mb-12">
          <div className="inline-flex items-center justify-center col-span-3 md:col-span-4 bg-notes dark:bg-dark-500 dark:text-gray-100 rounded-lg px-6 py-4">
            Next.js
          </div>
          <div className="inline-flex items-center justify-center col-span-3 md:col-span-4 bg-notes dark:bg-dark-500 dark:text-gray-100 rounded-lg px-6 py-4">
            React
          </div>
          <div className="inline-flex items-center justify-center col-span-3 md:col-span-4 bg-notes dark:bg-dark-500 dark:text-gray-100 rounded-lg px-6 py-4">
            Node
          </div>
          <div className="inline-flex items-center justify-center col-span-3 md:col-span-3 bg-notes dark:bg-dark-500 dark:text-gray-100 rounded-lg px-6 py-4">
            GraphQL
          </div>
          <div className="inline-flex items-center justify-center col-span-3 md:col-span-3 bg-notes dark:bg-dark-500 dark:text-gray-100 rounded-lg px-6 py-4">
            Vue
          </div>
          <div className="inline-flex items-center justify-center col-span-3 md:col-span-3 bg-notes dark:bg-dark-500 dark:text-gray-100 rounded-lg px-6 py-4">
            HTML &amp; CSS
          </div>
          <div className="inline-flex items-center justify-center col-span-3 md:col-span-3 bg-notes dark:bg-dark-500 dark:text-gray-100 rounded-lg px-6 py-4">
            Nest.js
          </div>
          <div className="inline-flex items-center justify-center col-span-3 md:col-span-4 bg-notes dark:bg-dark-500 dark:text-gray-100 rounded-lg px-6 py-4">
            PostgreSQL
          </div>
          <div className="inline-flex items-center justify-center col-span-3 md:col-span-4 bg-notes dark:bg-dark-500 dark:text-gray-100 rounded-lg px-6 py-4">
            Gatsby
          </div>
          <div className="inline-flex items-center justify-center col-span-3 md:col-span-4 bg-notes dark:bg-dark-500 dark:text-gray-100 rounded-lg px-6 py-4">
            TailwindCSS
          </div>
          <div className="inline-flex items-center justify-center col-span-6 md:col-span-6 bg-notes dark:bg-dark-500 dark:text-gray-100 rounded-lg px-6 py-4">
            Microservices Architecture
          </div>
          <div className="inline-flex items-center justify-center col-span-6 md:col-span-6 bg-notes dark:bg-dark-500 dark:text-gray-100 rounded-lg px-6 py-4">
            Jamstack
          </div>
        </div>
        <h2 className="text-xl md:text-2.5xl font-bold font-inter mb-4 dark:text-white">Teaching</h2>
        <p className="leading-relaxed text-lg mb-6 dark:text-gray-100">
          Have I already mentioned I like sharing knowledge? I enjoy teaching and really like to see people growing. In 2017, I join BEDU as an Mentor in the Web Development Bootcamp where I teach about JavaScript, Node and React.
        </p>
        <div className="relative mb-12">
          <Image
            className="rounded-xl"
            width={1024}
            height={576}
            src="/images/teaching-coderdiaz.jpg" />
        </div>
        <h2 className="text-xl md:text-2.5xl font-bold font-inter mb-4 dark:text-white">Web development</h2>
        <p className="leading-relaxed text-lg mb-4 dark:text-gray-100">
          As a developer I value well written code, that’s easy to read, and ins’t unnecessarily complex. I appreciate following industry set coding standards. I make a point of continually learning and improving through attending conferences, reading books and blogs, watching screencasts, and following industry experts but too I love to share what I learned.
        </p>
        <p className="leading-relaxed text-lg mb-16 dark:text-gray-100">
          If you would like me to speak to an upcoming event, please contact me at <a className="border-b-2 border-gray-200 transition duration-200 ease-in-out hover:border-gray-400" href="mailto:hello@coderdiaz.me">hello@coderdiaz.me</a>
        </p>
      </div>
    </section>
  </Layout>;
}

export default AboutPage;
