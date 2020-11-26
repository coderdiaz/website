import Image from "next/image";
import Head from "@/components/Head";
import Layout from "@/components/Layout";

const UsesPage = () => {
  return <Layout>
    <Head meta={{
      title: 'Uses — Developer and creator from Mexico City',
      image: 'https://coderdiaz.me/images/setup-coderdiaz.jpg',
    }} />
    <section className="md:pt-0 pb-2">
      <div className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-md">
        <h1 className="text-3xl md:text-5xl font-bold font-inter mb-4 dark:text-white">Uses</h1>
        <p className="leading-loose text-lg mb-6 md:mb-12 md:w-4/6 dark:text-gray-100">
          This page will serve as a living document and a place to point curious developers to when I get asked.
        </p>
        <div className="relative mb-6 md:mb-12">
          <Image
            className="rounded-xl"
            width={1024}
            height={576}
            src="/images/setup-coderdiaz.png" />
        </div>
        <h2 className="text-xl md:text-2.5xl font-bold font-inter mb-4 dark:text-white">Editor + Terminal</h2>
        <div className="leading-loose text-lg mb-16 dark:text-gray-100">
          <ul className="ml-6 md:ml-12 list-disc list-outside">
            <li className="mb-4">
              <a className="text-cyan-700 dark:text-cyan-300 font-medium shadow-link dark:shadow-darkLink" href="https://code.visualstudio.com/">Visual Studio Code</a> is my current editor which has been using since 2017.
            </li>
            <li className="mb-4">
              I'm currently using <a className="text-cyan-700 dark:text-cyan-300 font-medium shadow-link dark:shadow-darkLink" href="https://monolisa.dev">Monolisa</a> for a font. Yes I paid the <span className="font-semibold">€59</span> for it. Before that I used Fira Code for many years.
            </li>
            <li className="mb-4">Also, use iTerm for my terminal.</li>
            <li className="mb-4">For best workflow in terminal, I use <a className="text-cyan-700 dark:text-cyan-300 font-medium shadow-link dark:shadow-darkLink" href="https://starship.rs">Starship</a>, a minimal, blazing-fast and infinitely prompt.</li>
            <li className="mb-4">I use Monolisa in VS Code and Fira Code in iTerm.</li>
            <li className="mb-4">I'm currently switching between Firefox, Chrome and Chrome Canary as my main browser.</li>
          </ul>
        </div>
        <h2 className="text-xl md:text-2.5xl font-bold font-inter mb-4 dark:text-white">Desktop Apps</h2>
        <div className="leading-loose text-lg mb-16 dark:text-gray-100">
          <ul className="ml-6 md:ml-12 list-disc list-outside">
            <li className="mb-4">I design almost entirely in <a className="text-cyan-700 dark:text-cyan-300 font-medium shadow-link dark:shadow-darkLink" href="https://figma.com/">Figma</a>.</li>
            <li className="mb-4">
              I use <a className="text-cyan-700 dark:text-cyan-300 font-medium shadow-link dark:shadow-darkLink" href="https://magnet.crowdcafe.com/">Magnet</a> for keep my workspace organized.
            </li>
            <li className="mb-4">
              Also, I use <a className="text-cyan-700 dark:text-cyan-300 font-medium shadow-link dark:shadow-darkLink" href="https://getpixelsnap.com/">PixelSnap 2</a>, the fastest tool for measuring anything on your screen, mainly to make sure everything is in place when developing front-end.
            </li>
            <li className="mb-4">
              I use <a className="text-cyan-700 dark:text-cyan-300 font-medium shadow-link dark:shadow-darkLink" href="https://www.glyphfinder.com/">Glyphfinder</a> to find emojis and characters faster.
            </li>
            <li className="mb-4">
              Occasionally, I'm drawn to colors that I see on the web, and to know what color it is I use <a className="text-cyan-700 dark:text-cyan-300 font-medium shadow-link dark:shadow-darkLink" href="https://apps.apple.com/us/app/pikka-color-picker/id1195076754">Pikka</a>.
            </li>
          </ul>
        </div>
        <h2 className="text-xl md:text-2.5xl font-bold font-inter mb-4 dark:text-white">Desk Setup</h2>
        <div className="leading-loose text-lg mb-16 dark:text-gray-100">
          <ul className="ml-6 md:ml-12 list-disc list-outside">
            <li className="mb-4">
              I currently use a 2019 16" MacBook Pro 2.6GHz 6-Core Intel Core i7 with 16Gb memory.
            </li>
            <li className="mb-4">
              My last laptop was a 2017 13" MacBook Pro 1.4GHz Intel Core i5 with 8Gb memory
            </li>
            <li className="mb-4">
              Recently, I switched to a mechanical keyboard that supports Kickstarter which I love, this keyboard can be used on Mac devices on the same integrated keyboard which is great. The keyboard is a <a className="text-cyan-700 dark:text-cyan-300 font-medium shadow-link dark:shadow-darkLink" href="https://nuphy.com/collections/shop/products/nutype-f1">Nuphy NuType F1</a> with Red Switch.
            </li>
            <li className="mb-4">I like the gestures in MacBook Pro for this reason I use the <a className="text-cyan-700 dark:text-cyan-300 font-medium shadow-link dark:shadow-darkLink" href="https://www.apple.com/shop/product/MJ2R2LL/A/magic-trackpad-2-silver">Apple Magic Trackpad 2</a>.</li>
            <li className="mb-4">My desk was build by a friend and is 127cm x 76cm using Pine wood.</li>
            <li className="mb-4">My mic is a Blue Snowball and doesn't have an arm yet.</li>
            <li className="mb-4">I use two monitors HP 23 inch Series UltraFast LED Full HD (1920x1080) and an open loaded MacbookPro nested on a <a className="text-cyan-700 dark:text-cyan-300 font-medium shadow-link dark:shadow-darkLink" href="https://www.amazon.com.mx/dp/B07377XVNY/ref=cm_sw_em_r_mt_dp_dcnNFbFAP1E31">Twelve South 12-1708</a>.</li>
            <li className="mb-4">
              Also, I use my iPhone XR 256Gb for streaming using <a className="text-cyan-700 dark:text-cyan-300 font-medium shadow-link dark:shadow-darkLink" href="https://apps.apple.com/us/app/camera-for-obs-studio/id1352834008">Camera for OBS Studio</a>.
            </li>
            <li className="mb-4">
              I listen to <a className="text-cyan-700 dark:text-cyan-300 font-medium shadow-link dark:shadow-darkLink" href="https://www.marshallheadphones.com/us/en/monitor-bluetooth.html">Marshall Monitor Bluetooth</a> all day in my desk and Airpods when on the go.
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>;
}

export default UsesPage;
