import { useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

import Image from "next/image";
import penIcon from "../assets/Mini-pencil-icon.svg";

export const SearchModal = (props: any) => {
  const { setShowSearchModal, showSearchModal } = props;
  const [searchNameModal, setSearchNameModal] = useState(false);
  const [editCarouselModal, setEditCarouselModal] = useState(false);
  const [addCarouselModal, setAddCarouselModal] = useState(false);
  const [dateModal, setDateModal] = useState(false);
  const [searchNameValue, setSearchNameValue] = useState("Top Stories");
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={showSearchModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setShowSearchModal}
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-40 transition-opacity" />
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
              <Dialog.Panel className="h-[calc(100%-1rem)] max-h-full relative transform overflow-hidden rounded-lg shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="relative bg-black border-2 border-white rounded-md shadow px-3 h-full">
                  <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Search
                    </h3>
                    <button
                      type="button"
                      onClick={() => setShowSearchModal(false)}
                      className="text-gray-400 bg-transparent border-white rounded-full border hover:bg-gray-200 hover:text-gray-900 text-sm p-1.5 ml-auto inline-flex items-center"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
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
                  <div className="px-4 py-4 space-y-2">
                    <div className="flex">
                      <div
                        className="flex flex-none cursor-pointer w-6 text-md mb-1"
                        onClick={() => setAddCarouselModal(true)}
                      >
                        +
                      </div>
                      <div
                        className="flex items-center cursor-pointer text-lg text-slate-300 grow"
                        onClick={() => setEditCarouselModal(true)}
                      >
                        {searchNameValue}
                      </div>
                      <div
                        className="flex flex-none cursor-pointer w-6"
                        onClick={() => setSearchNameModal(true)}
                      >
                        <Image
                          src={penIcon.src}
                          alt=""
                          width={16}
                          height={16}
                        />
                      </div>
                    </div>
                    <div className="bg-neutral-600 pt-1 pb-1.5 px-2 text-slate-300 text-base">
                      Dates
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-slate-300 pt-1 pb-1.5 px-2 text-base">
                        From
                      </div>
                      <div
                        className="text-slate-300 pt-1 pb-1.5 px-2 text-base"
                        onClick={() => setDateModal(true)}
                      >
                        Apr 18, 2023
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-slate-300 pt-1 pb-1.5 px-2 text-base">
                        To
                      </div>
                      <div className="text-slate-300 pt-1 pb-1.5 px-2 text-base">
                        Apr 20, 2023
                      </div>
                    </div>
                    <div className="bg-neutral-600 pt-1 pb-1.5 px-2 text-slate-300 text-base">
                      General
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-slate-300 pt-1 pb-1.5 px-2 text-base">
                        Text
                      </div>
                      <input
                        type="text"
                        placeholder="Text Search"
                        className="bg-inherit outline-0 text-slate-300 text-base"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-1 w-11/12 sm:w-full flex justify-center items-center p-2 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      type="button"
                      className="text-black bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-base px-5 py-2 text-center"
                    >
                      SEARCH
                    </button>
                    <button
                      type="button"
                      className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-md text-base font-medium px-5 py-2 focus:z-10"
                    >
                      DELETE
                    </button>
                  </div>
                  {searchNameModal && (
                    <SearchNameModal
                      setSearchNameValue={setSearchNameValue}
                      searchNameValue={searchNameValue}
                      setSearchNameModal={setSearchNameModal}
                      searchNameModal={searchNameModal}
                    />
                  )}
                  {editCarouselModal && (
                    <EditCarouselModal
                      searchNameValue={searchNameValue}
                      setEditCarouselModal={setEditCarouselModal}
                      editCarouselModal={editCarouselModal}
                    />
                  )}
                  {addCarouselModal && (
                    <AddCarouselModal
                      setAddCarouselModal={setAddCarouselModal}
                      addCarouselModal={addCarouselModal}
                    />
                  )}
                  {dateModal && (
                    <DateModal
                      setDateModal={setDateModal}
                      dateModal={dateModal}
                    />
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

const SearchNameModal = (props: any) => {
  const {
    setSearchNameValue,
    searchNameValue,
    setSearchNameModal,
    searchNameModal,
  } = props;
  const [searchNameInputValue, setSearchNameInputValue] =
    useState(searchNameValue);
  const cancelButtonRef = useRef(null);

  const handleSave = () => {
    setSearchNameValue(searchNameInputValue);
    setSearchNameModal(false);
  };

  return (
    <Transition.Root show={searchNameModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setSearchNameModal}
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity" />
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
              <Dialog.Panel className="h-[calc(100%-1rem)] max-h-full relative transform overflow-hidden rounded-lg shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="flex justify-center items-center relative w-full h-full max-h-full">
                  <div className="bg-neutral-900 rounded-sm py-5 px-6">
                    <div className="text-lg">Search Name</div>
                    <div className="mb-8">Top Stories</div>
                    <input
                      className="bg-inherit outline-0 border-b-2	pb-2 w-full"
                      type="text"
                      value={searchNameInputValue}
                      onChange={(e) => setSearchNameInputValue(e.target.value)}
                    />
                    <div className="flex justify-end mt-8">
                      <button
                        className="bg-inherit outline-0 border-0 mr-4 text-base text-blue-400"
                        onClick={handleSave}
                      >
                        OK
                      </button>
                      <button
                        className="bg-inherit outline-0 border-0 text-base text-blue-400"
                        onClick={() => setSearchNameModal(false)}
                      >
                        CANCEL
                      </button>
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

const EditCarouselModal = (props: any) => {
  const { searchNameValue, setEditCarouselModal, editCarouselModal } = props;
  const cancelButtonRef = useRef(null);

  const handleSave = () => {
    setEditCarouselModal(false);
  };

  return (
    <Transition.Root show={editCarouselModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setEditCarouselModal}
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity" />
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
              <Dialog.Panel className="h-[calc(100%-1rem)] max-h-full relative transform overflow-hidden rounded-lg shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="flex justify-center items-center relative w-full h-full max-h-full">
                  <div className="bg-neutral-900 rounded-sm py-5">
                    <div className="text-xl px-6">Edit Carousel</div>
                    <div className="mb-4 px-6">Select carousel to edit</div>
                    <div className="border-y border-gray-600 px-6">
                      <div className="flex items-center my-4">
                        <input
                          checked
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ml-4 text-lg font-medium text-gray-900 dark:text-gray-300"
                        >
                          {searchNameValue}
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4 px-6">
                      <button
                        className="bg-inherit outline-0 border-0 mr-4 text-base text-blue-400"
                        onClick={handleSave}
                      >
                        OK
                      </button>
                      <button
                        className="bg-inherit outline-0 border-0 text-base text-blue-400"
                        onClick={() => setEditCarouselModal(false)}
                      >
                        CANCEL
                      </button>
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

const AddCarouselModal = (props: any) => {
  const { setAddCarouselModal, addCarouselModal } = props;
  const cancelButtonRef = useRef(null);

  const handleSave = () => {
    setAddCarouselModal(false);
  };

  return (
    <Transition.Root show={addCarouselModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setAddCarouselModal}
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity" />
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
              <Dialog.Panel className="h-[calc(100%-1rem)] max-h-full relative transform overflow-hidden rounded-lg shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="flex justify-center items-center relative w-full h-full max-h-full">
                  <div className="bg-neutral-900 rounded-sm py-5">
                    <div className="text-xl px-6">Add Carousel</div>
                    <div className="mb-4 px-6">Add a new carousel</div>
                    <div className="border-y border-gray-600 px-6">
                      <div className="flex items-center my-4">
                        <input
                          checked
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ml-4 text-lg font-medium text-gray-900 dark:text-gray-300"
                        >
                          Keyword (Carousel)
                        </label>
                      </div>
                      <div className="flex items-center my-4">
                        <input
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-2"
                          className="ml-4 text-lg font-medium text-gray-900 dark:text-gray-300"
                        >
                          Keyword (Article)
                        </label>
                      </div>
                      <div className="flex items-center my-4">
                        <input
                          id="default-radio-3"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-3"
                          className="ml-4 text-lg font-medium text-gray-900 dark:text-gray-300"
                        >
                          Top Story
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4 px-6">
                      <button
                        className="bg-inherit outline-0 border-0 mr-4 text-base text-blue-400"
                        onClick={handleSave}
                      >
                        OK
                      </button>
                      <button
                        className="bg-inherit outline-0 border-0 text-base text-blue-400"
                        onClick={() => setAddCarouselModal(false)}
                      >
                        CANCEL
                      </button>
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

const DateModal = (props: any) => {
  const { setDateModal, dateModal } = props;
  const cancelButtonRef = useRef(null);

  const handleSave = () => {
    setDateModal(false);
  };

  return (
    <Transition.Root show={dateModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setDateModal}
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
          <div className="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity" />
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
              <Dialog.Panel className="h-full max-h-full transform overflow-hidden rounded-lg shadow-xl transition-all sm:my-0 sm:w-full sm:max-w-lg">
                <div className="fixed flex justify-center bottom-0 left-0 right-0 z-50 w-full overflow-x-hidden overflow-y-auto md:inset-0 max-h-full">
                  <div className="relative w-full max-h-full">
                    <div className="absolute bottom-0 w-full bg-neutral-900 rounded-sm py-3">
                      <div className="flex justify-end items-end px-4">
                        <button
                          className="bg-inherit outline-0 border-0 text-sm text-blue-400 mr-4"
                          onClick={() => setDateModal(false)}
                        >
                          CANCEL
                        </button>
                        <button
                          className="bg-inherit outline-0 border-0 text-sm text-blue-400"
                          onClick={handleSave}
                        >
                          DONE
                        </button>
                      </div>
                      <div className="flex items-center justify-between w-1/2 m-auto mt-4">
                        <div className="mb-4 px-6">Feb</div>
                        <div className="mb-4 px-6">20</div>
                        <div className="mb-4 px-6">2023</div>
                      </div>
                      <div className="flex items-center justify-between w-1/2 m-auto mt-2">
                        <div className="mb-4 px-6">Apr</div>
                        <div className="mb-4 px-6">20</div>
                        <div className="mb-4 px-6">2023</div>
                      </div>
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
