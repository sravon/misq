import {
    BellIcon,
    MagnifyingGlassIcon,HeartIcon, ShoppingCartIcon
} from "@heroicons/react/20/solid";
import { Bars2Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import DropdownMenu from "../ui/dropdown-menu";

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function TopBar() {
  return (
    <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 items-center">
      <form
        className="relative flex flex-1 border h-12 rounded-md p-1"
        action="#"
        method="GET"
      >
        <label htmlFor="search-field" className="sr-only">
          Search
        </label>
        <input
          id="search-field"
          className="block h-full w-full border-0 py-0 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
          placeholder="Search..."
          type="search"
          name="search"
        />
        <MagnifyingGlassIcon
          className="pointer-events-none absolute inset-y-0 right-1 h-full w-5 text-gray-400"
          aria-hidden="true"
        />
      </form>
      <div className="flex items-center gap-x-4 lg:gap-x-6">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-900 hover:text-gray-500"
        >
          <span className="sr-only">View notifications</span>
          <HeartIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-900 hover:text-gray-500"
        >
          <span className="sr-only">View notifications</span>
          <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        <DropdownMenu
          menuTitle={
            <Image
              width={8}
              height={8}
              className="h-8 w-8 rounded-full"
              src="/vercel.svg"
              alt=""
            />
          }
          menuItems={userNavigation}
        />

        <DropdownMenu
          menuTitle={<Bars2Icon className="h-8 w-8 rounded-full" />}
          menuItems={userNavigation}
        />
      </div>
    </div>
  );
}

export default TopBar;
