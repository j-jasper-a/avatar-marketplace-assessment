import { BsCartPlusFill } from "react-icons/bs";

const AddToCartButton = () => {
  return (
    <button
      className="absolute bottom-0 right-0 z-10 flex items-center gap-1 rounded-br-lg rounded-tl-lg border-[1px] border-transparent bg-emerald-700 px-2 py-1 text-xs text-white shadow transition hover:border-white"
      onClick={(e) => {
        e.preventDefault;
      }}
    >
      <BsCartPlusFill />
      Add
    </button>
  );
};

export default AddToCartButton;
