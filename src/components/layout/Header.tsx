"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/20/solid";
import {
  ArrowLeftEndOnRectangleIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-yellow-500 md:block hidden px-2">
      <div className="max-w-8xl mx-auto ">
        <div className="flex justify-between">
          {/* <!-- logp --> */}
          <div className="flex items-center w-3/4">
            <div className="cursor-pointer group hover:text-white">
              <Link href="/">
                <Image
                  className="object-contain"
                  src="/favicon.ico"
                  width={55}
                  height={55}
                  priority
                  alt="fddf"
                />
              </Link>
            </div>
            <div className="flex justify-between items-center w-full bg-white p-1 rounded">
              <input
                id="search_query"
                type="text"
                className="w-full h-10 focus:outline-none"
                name=""
                placeholder="Search for products (e.geggs, milk, potato)"
              />
              <MagnifyingGlassIcon className="w-6 h-6" />
            </div>
          </div>

          {/* <!-- secondary nav --> */}
          <div className="hidden md:flex items-center space-x-2 mr-2">
            <div className="cursor-pointer group w-10 hover:text-white">
              <Link
                href="/cart"
                className="flex flex-row items-center group-hover:animate-bounce relative"
              >
                <ShoppingCartIcon className="h-6 mb-1" />
                <p
                  className="text-xs rounded-full bg-yellow-900 
                                        text-white p-1 absolute top-3 left-3"
                >
                  o
                </p>
              </Link>
            </div>
            <div className="cursor-pointer group w-10 hover:text-white">
              <Link
                href="/cart"
                className="flex flex-row items-center group-hover:animate-bounce relative"
              >
                <HeartIcon className="h-6 mb-1" />
                <p
                  className="text-xs rounded-full bg-yellow-900 
                                        text-dark p-1 absolute top-3 left-3"
                >
                  0
                </p>
              </Link>
            </div>
            {/* // <div className="cursor-pointer group relative">
                        //     <div className=" rounded bg-white" onClick={()=> setToggle(!toggle)}>
                        //         <ChevronDownIcon className="h-6 mb-1"/>
                        //     </div>
                        //     <div className={( (toggle)? 'flex' : 'hidden') + " absolute top-6 right-0 flex flex-col w-40 bg-slate-200 p-3"} >
                        //         <p className="border-b-2 border-red-900 w-full text-center p-2">dfdffdf</p>
                        //         <p className="border-b-2 border-red-900 w-full text-center p-2">dfdffdf</p>
                        //         <button className="border-b-2 border-red-900 w-full text-center p-2">Logout</button>
                        //     </div>
                        // </div> */}
            <Link
              href="/login"
              className="flex items-center rounded-full py-2 px-2 bg-gray-400"
            >
              {/* <img src="32.png" className="rounded-full mr-1" /> */}
              <ArrowLeftEndOnRectangleIcon className="w-6 h-6" />
              <span>Login</span>
            </Link>
            <Link
              href="/login"
              className="flex items-center rounded-full py-2 px-2 bg-gray-400"
            >
              {/* <img src="32.png" className="rounded-full mr-1" /> */}
              <UserIcon className="w-6 h-6" />
              <span>Register</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
