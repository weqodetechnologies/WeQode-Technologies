import React from "react";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: number; // base size in px
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  size = 26, // base size
  className = "",
}) => {
  // Convert px → rem for responsive scaling
  const outerSize = `clamp(20px, ${size}px, 40px)`;
  const innerSize = `calc(${outerSize} - 10px)`; // auto-adjust inner size

  return (
    <div
      className={`flex items-center cursor-pointer ${className}`}
      onClick={(e) => {
        e.preventDefault();
        onChange?.(!checked);
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onChange?.(!checked);
        }
      }}
      style={{ width: outerSize, height: outerSize }}
    >
      {/* Outer Circle */}
      <div
        className="rounded-full flex items-center justify-center"
        style={{
          width: outerSize,
          height: outerSize,
          border: "3px solid #b5b5b5",
        }}
      >
        {/* Inner Circle */}
        <div
          className="rounded-full transition-all duration-200"
          style={{
            width: innerSize,
            height: innerSize,
            backgroundColor: checked ? "#ff8c32" : "#d9d9d9",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Checkbox;
