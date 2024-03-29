'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
  ];

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="hidden md:flex gap-4">
            {links.map((link)=>(
                <Link key={link.url} href={link.url}>{link.title}</Link>
            ))}
        </div>

      {/* LOGO */}
      <div className="md:hidden">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={200} height={200} />
        </Link>
      </div>
      <div className="flex gap-8">
        <Link href=""><Image src={"/github.png"} alt="" width={24} height={24}/></Link>
        <Link href=""><Image src={"/linkedin.png"} alt="" width={24} height={24}/></Link>
        <Link href=""><Image src={"/facebook.png"} alt="" width={24} height={24}/></Link>
      </div>
        {/* responsive menu */}
      <div className="md:hidden">
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(e)=>{setOpen(!open)}}>
            <div className={`w-10 h-1 bg-black rounded`}></div>
            <div className={`w-10 h-1 bg-black rounded`}></div>
            <div className={`w-10 h-1 bg-black rounded`}></div>
        </button>
        {/* Menu list */}
        {
           open && <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center gap-8 text-4xl">
           {links.map((link)=>(
               <Link href={link.url} key={link.title}>{link.title}</Link>
           ))}
                   </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
