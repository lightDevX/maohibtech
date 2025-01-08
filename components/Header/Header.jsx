import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" bg-red-400">
      <div className="container mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <Link href="#">Item 1</Link>
                </li>
                <li>
                  <Link href="#">Parent</Link>
                  <ul className="p-2">
                    <li>
                      <Link href="#">Submenu 1</Link>
                    </li>
                    <li>
                      <Link href="#">Submenu 2</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">Item 3</Link>
                </li>
              </ul>
            </div>
            <Link href="/" className=" w-64 h-12">
              <Image src={logo} alt="Logo" className="w-full h-full" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="#">Item 1</Link>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="#">Submenu 1</Link>
                    </li>
                    <li>
                      <Link href="#">Submenu 2</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="#">Item 3</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link href="#">Button</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
