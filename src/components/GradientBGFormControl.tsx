import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "500", "600"] });

interface FormProps {
  name: string;
  type: string;
  placeholder?: string;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}
export const GradientBGFormControl = ({
  name,
  type,
  placeholder,
  startAdornment,
  endAdornment,
}: FormProps) => {
  return (
    <div className="mb-4">
      <label
        className="block text-secondary text-sm mb-2 capitalize"
        htmlFor={name}
      >
        {name}
      </label>
      <div className="shadow appearance-none border p-3 rounded w-full text-secondary mb-3 gradient-bg-input flex gap-x-2">
        <div className={`p-1`}>{startAdornment}</div>
        <input
          className={`bg-transparent border-none w-full text-sm py-0.5 ${poppins.className}`}
          id="password"
          type={type}
          placeholder={placeholder}
          style={{ outline: "none" }}
        />
        <div className={`p-1`}>{endAdornment}</div>
      </div>
      {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
    </div>
  );
};
