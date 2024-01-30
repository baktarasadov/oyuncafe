import { IInput } from "@/types/ui/IInput";
import React, { memo } from "react";

const Input: React.FC<IInput> = ({
  type,
  id,
  className,
  placeholder,
  value,
  checked,
  name,
  onChange,
  onBlur,
}) => {
  return (
    <>
      <input
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        type={type}
        className={`${className}`}
        checked={checked}
      />
    </>
  );
};

export default memo(Input);
