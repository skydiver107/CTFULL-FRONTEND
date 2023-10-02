import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import icon from "../assets/cropped-ibd-icon-32x32.png";

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["200", "500", "600", "700"],
});

export const ReadMoreModal = (props: any) => {
  const { data, open, handleClose } = props;
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className={`relative z-10 rounded-none ${mont.className}`}
        initialFocus={cancelButtonRef}
        onClose={handleClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto h-[calc(100%-1rem)] max-h-full">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 h-[calc(100%-1rem)] max-h-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="h-[calc(100%-1rem)] max-h-full relative transform overflow-hidden rounded-none shadow-xl transition-all lg:my-16 md:my-16 sm:my-8 sm:w-full sm:max-w-lg">
                <div className="relative bg-black border-2 border-current rounded-none shadow px-3 h-full overflow-hidden	border-white">
                  <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <svg
                      data-prefix="far"
                      data-icon="bookmark"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      className="svg-inline--fa fa-bookmark text-white fa-w-12 fa-3x w-5 h-5"
                    >
                      <path
                        fill="currentColor"
                        d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"
                      ></path>
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-primary">
                      Focus
                    </h3>
                    <button
                      onClick={handleClose}
                      className="text-gray-400 bg-transparent border-white rounded-full border hover:bg-gray-200 hover:text-gray-900 text-sm p-1.5 inline-flex items-center"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="p-4 text-primary">
                    <div className="flex justify-between items-center">
                      <div className="from-pink-600 bg-gradient-to-l text-left text-[28px] w-4/5 leading-5 p-4">
                        News
                      </div>
                      <Image
                        src={icon.src}
                        alt=""
                        width={30}
                        height={30}
                        className="rounded-full border-2 border-white"
                      />
                    </div>
                    <div className="text-[24px] text-left font-bold leading-7 italic mt-4">
                      {data?.title}
                    </div>
                    <div className="text-[16px] text-left leading-5 h-[350px] lg:h-[550px] overflow-auto mt-2">
                      {data?.snippet}
                      <div className="absolute bottom-0 h-[150px] w-full article-img-gradient1"></div>
                    </div>
                    <div className="absolute bottom-4">
                      <Link href={data?.url} target="_blank">
                        <div className="text-lg font-semibold text-white cursor-pointer">
                          Read More→
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
