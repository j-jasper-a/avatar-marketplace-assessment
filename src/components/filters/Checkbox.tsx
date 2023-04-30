import { useState } from "react";
import { BsCircleFill, BsCircle } from "react-icons/bs";

interface CheckboxProps {
  value: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ value }) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="flex items-center gap-1 text-xs">
      {isChecked ? (
        <BsCircleFill
          className="text-neutral-800"
          onClick={handleCheckboxChange}
        />
      ) : (
        <BsCircle className="text-neutral-800" onClick={handleCheckboxChange} />
      )}
      <p>{value}</p>
    </div>
  );
};

export default Checkbox;
