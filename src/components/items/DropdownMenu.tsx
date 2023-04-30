import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Option {
  label: string;
  value: string;
}

interface DropdownMenuProps {
  dropdownMenuOptions: Option[];
  label?: string;
  onSelect: (value: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  dropdownMenuOptions: options,
  label = "Sort: Featured (Default)",
  onSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option.value);
  };

  return (
    <>
      <div className="relative z-20 text-xs shadow">
        <button
          className="flex items-center gap-1 rounded-lg bg-white p-2 font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption?.label ?? label}
          <BsChevronDown className="" />
        </button>

        {isOpen && (
          <div
            className="absolute right-0 mt-2 flex w-56 flex-col items-start gap-2 rounded-lg bg-white p-2 shadow"
            role="menu"
          >
            {options.map((option) => (
              <button
                className={`${
                  selectedOption?.value === option.value
                    ? "font-medium opacity-100"
                    : "opacity-75"
                } rounded-lg text-xs`}
                onClick={() => handleOptionClick(option)}
                key={option.value}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DropdownMenu;
