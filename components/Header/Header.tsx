import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header className="bg-red-800">
        <div className="grid grid-cols-3 items-center">
          <div className="w-64 h-16 justify-self-start">
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
          <div className=" justify-self-center">
            <NavBar />
          </div>
          <div className=" justify-self-end">
            <p>Contact Us</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
