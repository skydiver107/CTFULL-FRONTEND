import Image from "next/image";
import { Montserrat } from "next/font/google";

import siteIcon from "../assets/cropped-ibd-icon-32x32.png";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["200", "500", "600", "700"],
});

export const Article = (props: any) => {
  const { data, handleOpen } = props;

  return (
    <div
      className={`${mont.className} relative text-primary bg-black h-full lg:h-[350px]`}
    >
      <div className="block lg:hidden article-header py-2 px-8">
        <p className="text-primary text-left">Story Name</p>
      </div>
      <div className="flex flex-col justify-between relative bg-black h-auto lg:h-full pb-4">
        <div className="relative w-full h-[340px] lg:h-[240px]">
          <Image src={data?.top_image} alt="" fill />
          <div className="block lg:hidden absolute bottom-0 h-full w-full article-img-gradient"></div>
        </div>
        <div className="absolute top-0 w-full h-full px-4 sm:px-8 z-[-1]">
          <div className="h-full border-y-2 border-primary pb-8"></div>
        </div>
        <div className="flex flex-col justify-end bg-black px-6 sm:px-4 mt-[-100px] lg:mt-[-50px] text-left z-[100]">
          <h6
            className="text-[18px] leading-none cursor-pointer font-medium font-sans"
            onClick={() => handleOpen(true, data)}
          >
            {data?.title ||
              `Democratic state Rep. Tricia Cotham switched parties, giving Republicans a veto-proof majority`}
          </h6>
          <div className="hidden lg:flex items-center mt-4">
            <Image
              src={data?.favicon || siteIcon.src}
              alt=""
              width={30}
              height={30}
              className="rounded-full border-2 border-white"
            />
            <div className="text-sm ml-2">{data?.outlet_identity}</div>
          </div>
          <p className="text-[16px] font-normal block lg:hidden leading-[17px] mt-4">
            Lorem Ipsum etc lkha fiejklsl warned that Americans are hurting too
            badly to wait for partisan negotiations as Friday’s weak jobs report
            shows the country’s recovery is at real risk of stalling. President
            Joe Biden
          </p>
          <p className="block lg:hidden text-[16px] font-normal mt-4">
            Lorem Ipsum Again{" "}
          </p>
        </div>
        <div className="absolute bottom-0 h-full w-full article-img-gradient sm:article-img-gradient-desktop"></div>
      </div>
      <div className="border-t border-current w-full"></div>
      <div className="block lg:hidden bg-black flex justify-between w-full p-4 z-10">
        <button className="from-pink-900 bg-gradient-to-l py-1 px-5 xl:px-3 lg:px-6 sm:px-6 rounded flex">
          <div className="text-[22px] xl:text-[20px] lg:text-[22px] sm:text-[24px] font-semibold text-primary pt-0 xl:pt-0.5">
            Explore
          </div>
          <div className="py-2 px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-5 xl:h-5 lg:h-5 sm:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </button>
        <button className="rounded border-2 border-white px-4 xl:px-3 py-1.5">
          <div className="flex">
            <p className="text-[18px] text-primary font-normal">Share</p>
            <div className="px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
