import { Poppins } from "next/font/google";
import Image from "next/image";
import Favicon from "../assets/icon/favicon.png";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "500", "600"] });

function Welcome() {
  return (
    <div className="">
      <div className="flex justify-center items-center h-screen">
        <div
          className={`text-center text-primary text-2xl font-poppins mr-2 ${poppins.className}`}
        >
          Citefull
        </div>
        <Image src={Favicon.src} alt="" width={36} height={36} />
      </div>
    </div>
  );
}

export default Welcome;
