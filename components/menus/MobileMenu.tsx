import { XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import Link from "next/link";
import ThemeSwitcher from "@components/common/ThemeSwitcher";

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: any;
  navigation: any;
  themeSwitcher: boolean;
}

const MobileMenu = ({
  menuOpen,
  setMenuOpen,
  navigation,
  themeSwitcher,
}: MobileMenuProps) => {
  const closeMenu = () => setMenuOpen(false);
  return (
    <Transition show={menuOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 flex z-40"
        onClose={() => setMenuOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-20" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative max-w-xs w-full bg-gray-100 dark:bg-gray-900 shadow-xl pb-12 flex flex-col overflow-y-auto">
            {/* Close button */}
            <div className="px-4 py-6 flex text-gray-900 dark:text-gray-100">
              <button
                onClick={closeMenu}
                className="-m-2 p-2 rounded-md inline-flex items-center justify-center"
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 x-6" />
              </button>
            </div>
            {/* Links */}
            <div className="border-t border-gray-300 py-6 px-4 space-y-6">
              {navigation.pages.map((page: any) => (
                <div key={page.name}>
                  <Link href={page.href} key={page.name}>
                    <a
                      className="block -m-2 p-2 font-medium text-gray-900 dark:text-gray-100"
                      onClick={closeMenu}
                    >
                      {page.name}
                    </a>
                  </Link>
                </div>
              ))}
              {themeSwitcher && <ThemeSwitcher icon={false} text={true} />}
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default MobileMenu;
