import Logo from "../reusable/Logo";
import MobileMenuButton from "../buttons/MobileMenuButton";
import SearchBar from "./SearchBar";
import UserAvatar from "./UserAvatar";
import data from "@/data.json";
import BellButton from "../buttons/BellButton";
import CartButton from "../buttons/CartButton";

const Header = () => {
  return (
    <div className="flex h-12 w-full items-center justify-between bg-gradient-to-r from-[#351e81] to-[#7e1f89] px-4 py-2 md:h-16 md:rounded-b-lg">
      <Logo />
      <div className="flex items-center gap-4">
        <SearchBar className="hidden md:flex" />
        <CartButton />
        <BellButton />
        <UserAvatar userAvatar={data.user.userAvatar} name={data.user.name} />
        <MobileMenuButton />
      </div>
    </div>
  );
};

export default Header;
