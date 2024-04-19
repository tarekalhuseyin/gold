import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex  items-center justify-between `}>
      <div className="z-10 flex bg-black w-full items-center justify-center ">
        <div className=" left-0 flex h-96 w-full items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Image
            src="/baner.JPG"
            alt="Vercel Logo"
            className="dark:invert w-full h-full"
            fill
            priority
          />
        </div>
      </div>
    </main>
  );
}
