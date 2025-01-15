import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <header className="bg-red-800">
        <div className="container mx-auto">
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
            <div className="justify-self-center">
              <NavBar />
            </div>
            <div className="justify-self-end">
              <NavigationMenu>
                <NavigationMenuList>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}>
                      Contact-Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
