import logo from "@/public/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-4">
        <div className="logo w-full h-full">
          <Image src={logo} alt="logo" width={256} height={48} />
        </div>
        <div className="services">
          <ul>
            <li>Services</li>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </div>
        <div className="information">information</div>
        <div className="social">social</div>
      </div>
    </footer>
  );
};

export default Footer;
