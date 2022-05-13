import { HTMLAttributes } from "react";
import { MenuIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Link from "next/link";
import MobileMenu from "@components/menus/MobileMenu";
import ThemeSwitcher from "@components/common/ThemeSwitcher";

const navigation = {
  pages: [
    {
      name: "Women",
      href: "/",
    },
    {
      name: "Men",
      href: "/blog",
    },
    {
      name: "Blog",
      href: "/contact",
    },
    {
      name: "Track Your Order",
      href: "/tags",
    },
  ],
};

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  logoName: string;
  themeSwitcherInMenu?: boolean;
  themeSwitcherInMobileMenu?: boolean;
}

const Header = ({
  logoName,
  themeSwitcherInMenu = true,
  themeSwitcherInMobileMenu = true,
}: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section>
        <div className="flex items-center justify-between py-4 border-b">
          <div className="xl:hidden text-gray-900 dark:text-gray-100">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-md"
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="xl:mr-16 xl:ml-4 font-bold text-2xl text-gray-900 dark:text-gray-100">
            <Link href="/">
              <a>{logoName}</a>
            </Link>
          </div>
          <div className="hidden xl:flex xl:flex-1 items-center justify-center space-x-6">
            {navigation.pages.map((page) => (
              <div key={page.name}>
                <Link href={page.href} key={page.name}>
                  <a className="font-semibold font-heading hover:text-gray-600  text-gray-900 dark:text-gray-100">
                    {page.name}
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className="font-semibold font-heading hover:text-gray-600  text-gray-900 dark:text-gray-100">
            <button type="button" className="p-2 rounded-md">
              <span className="sr-only">Open cart</span>
              <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="hidden xl:inline-block">
              {themeSwitcherInMenu && <ThemeSwitcher />}
            </div>
          </div>
        </div>
      </section>
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navigation={navigation}
        themeSwitcher={themeSwitcherInMobileMenu}
      />
    </>
  );
};

export default Header;
