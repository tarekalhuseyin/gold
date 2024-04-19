import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex  items-center justify-between lg:py-24 py-44 h-screen `}
    >
      <div className="z-10 flex  w-full h-full items-center justify-center ">
        <div className=" left-0 flex h-full w-full items-center relative justify-center ">
          <Image
            src="/baner.JPG"
            alt="Vercel Logo"
            className="dark:invert w-full h-full absolute "
            fill
            priority
          />
        </div>
      </div>
    </main>
  );
}
