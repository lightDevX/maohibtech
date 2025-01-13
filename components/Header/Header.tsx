import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header className="bg-slate-800">
        <div className="flex items-center">
          <div className="  w-64 h-16">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                loading="lazy"
                decoding="async"
                className="w-full h-full"
              />
            </Link>
          </div>
          <nav className="">
            <NavBar />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
