// import axios from 'axios'
import { Poppins } from "next/font/google";
import Image from "next/image";

import { GradientBGFormControl } from "@/components/GradientBGFormControl";
import Google from "../assets/google-icon.png";
import Logo from "../assets/logo-light.png";
import Apple from "../assets/apple-icon.png";
import UserIcon from "../assets/user.png";
import KeyIcon from "../assets/key.png";
import HiddenIcon from "../assets/hidden.png";
import { widthGoogleAuth } from "@/components/";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "500", "600"] });

function Login({ login }: { login: () => void }) {
  return (
    <div>
      <div className="flex justify-center pt-32">
        <Image src={Logo.src} alt="" width={182} height={36} />
      </div>
      <div className="mt-28">
        <h2
          className={`text-center text-primary text-2xl font-poppins ${poppins.className}`}
        >
          Welcome Back!
        </h2>
        <p
          className={`text-center text-background text-sm font-poppins ${poppins.className}`}
        >
          We missed you
        </p>
      </div>
      <div className="rounded px-8 pt-6 pb-8 flex flex-col max-w-lg mx-auto">
        <GradientBGFormControl
          name="username"
          type="text"
          startAdornment={
            <div className="block w-[17px] h-[17px]">
              <Image
                src={UserIcon.src}
                alt=""
                width={17}
                height={17}
                className="text-secondary"
              />
            </div>
          }
        />
        <GradientBGFormControl
          name="password"
          type="password"
          startAdornment={
            <div className="block w-[17px] h-[17px]">
              <Image
                src={KeyIcon.src}
                alt=""
                width={17}
                height={17}
                className="text-secondary"
              />
            </div>
          }
          endAdornment={
            <div className="block w-[17px] h-[17px]">
              <Image
                src={HiddenIcon.src}
                alt=""
                width={17}
                height={17}
                className="text-secondary"
              />
            </div>
          }
        />
        <div
          className={`text-right text-background text-xs font-poppins ${poppins.className}`}
        >
          Forgot Password?
        </div>
        <div className="flex items-center justify-between mt-6">
          <button
            className="bg-blue hover:bg-blue-dark text-primary py-3 px-4 rounded-xl w-full rounded bg-gradient-to-r from-[#9C3FE4] to-[#C65647]"
            type="button"
          >
            Sign In
          </button>
        </div>
        <div className="flex gap-x-1 mt-4">
          <div className="gradient-line gradient-line-left flex-1"></div>
          <p className="text-background mx-2">Or continue with</p>
          <div className="gradient-line gradient-line-right flex-1"></div>
        </div>
        <div className="flex justify-center gap-x-4 mt-4 mb-32">
          <button
            className="rounded-xl text-white border border-background py-4 px-5 gradient-bg-input"
            onClick={() => login()}
          >
            <Image src={Google.src} alt="" width={20} height={20} />
          </button>
          <button className="rounded-xl text-white border border-background p-4 px-5 gradient-bg-input">
            <Image src={Apple.src} alt="" width={20} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default widthGoogleAuth(Login);
