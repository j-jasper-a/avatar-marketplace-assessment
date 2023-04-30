import Image from "next/image";
import logo from "/public/images/logos/logo_avatown_manual_1_basi_inverse.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className="h-full w-auto" href={"/"}>
      <Image className="h-full w-auto" src={logo} alt="Avatown logo" />
    </Link>
  );
};

export default Logo;
