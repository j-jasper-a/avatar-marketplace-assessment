interface BigButtonProps {
  title: string;
  isSpecial: boolean;
}

const BigButton: React.FC<BigButtonProps> = ({ title, isSpecial }) => {
  return (
    <button
      className={`${
        isSpecial
          ? "bg-gradient-to-r from-[#351e81] to-[#7e1f89] hover:from-[#644eaa] hover:to-[#a14caa]"
          : "bg-emerald-700 hover:bg-emerald-600"
      }  rounded-lg px-8 py-4 font-bold text-white shadow transition`}
      onClick={() => {}}
    >
      {title}
    </button>
  );
};

export default BigButton;
