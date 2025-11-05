import React, { useState } from "react";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: number;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  size = 24,
  className = "",
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative flex items-center justify-center rounded-full border-2 border-gray-400 transition-all duration-200 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: isChecked ? "#ffffff" : "#e0e0e0",
      }}
    >
      <div
        className={`rounded-full transition-all duration-300 ${
          isChecked ? "bg-orange-400 scale-75" : "bg-gray-300 scale-50"
        }`}
        style={{
          width: "100%",
          height: "100%",
        }}
      ></div>
    </button>
  );
};

export default Checkbox;
