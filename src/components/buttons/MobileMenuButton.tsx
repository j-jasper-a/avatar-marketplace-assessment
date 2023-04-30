import { BsList } from "react-icons/bs";

const MobileMenuButton = () => {
  return (
    <button className="block md:hidden">
      <BsList className="h-6 w-6 text-white" />
    </button>
  );
};

export default MobileMenuButton;
