import Link from "next/link";
import { ReactElement } from "react";

export default function Headeritem({Icon, title, url}:{Icon:ReactElement, title:string, url:string}) {
    return (
        <div className=" cursor-pointer group w-50 sm:w-30 hover:text-white">
            <Link href={url} className="flex flex-row items-center group-hover:animate-bounce">
                    {Icon}
                    <p className="text-sm tracking-widest">
                        {title}
                    </p>
            </Link>
        </div>
    )
}
