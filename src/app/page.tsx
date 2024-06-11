import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="max-w-6xl flex flex-col justify-center items-center gap-20 mx-40 p-20">
        <div className="w-full flex justify-between gap-10 items-center flex-col lg:flex-row">
          <div className="flex flex-col justify-center items-center md:items-center lg:items-start">
            <h1 className="text-5xl font-bold mt-4 mb-4">
              Maurice&nbsp;Becnel
            </h1>
            <div className="flex gap-2 items-center justify-center">
              <p className="text-md md:text-xl lg:text-xl">
                Senior&nbsp;Front-End&nbsp;Engineer
              </p>
              <a
                className="inline text-xl text-secondary"
                href="https://www.kizen.com"
                target="_blank"
              >
                @Kizen
              </a>
            </div>
            <p className="text-secondary">Los Angeles, California</p>
          </div>
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-8 border-white">
            <Image
              src="/profile.JPG"
              alt="Profile Picture"
              priority
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
        <div className="flex justify-center text-center md:text-left lg:text-left">
          <h2 className="text-xl font-bold md:text-4xl lg:text-4xl">
            Dedicated to improving digital experiences one
            <pre className="inline p-2 text-xl inline">
              <code className="bg-secondary px-1 text-xl md:text-3xl lg:text-3xl">
                yarn install
              </code>
            </pre>
            at a time.
          </h2>
        </div>
      </div>
      <section className="fixed bottom-16 w-full">
        <div className="flex justify-center gap-20 w-full h-full">
          <div className="w-12 flex justify-center items-center hover:animate-grow ">
            <a
              className="w-full h-full"
              href="https://github.com/mauricebecnel400"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} color="white" />
            </a>
          </div>
          <div className="w-10 flex justify-center items-center hover:animate-grow ">
            <a
              className="w-full h-full"
              href="https://www.linkedin.com/in/maurice-becnel-3a1945117/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} color="white" />
            </a>
          </div>
          <div className="w-12 flex justify-center items-center hover:animate-grow ">
            <a
              className="w-full h-full"
              href="https://x.com/mauricethedev"
              target="_blank"
            >
              <FontAwesomeIcon icon={faXTwitter} color="white" />
            </a>
          </div>
        </div>
      </section>
      <footer className="w-full fixed inset-x-0 bottom-0 bg-black text-white text-center p-4">
        <p>© 2024 Maurice Becnel. All rights reserved.</p>
      </footer>
    </main>
  );
}
