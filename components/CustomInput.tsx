import React from "react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  required?: boolean;
}

export default function CustomInput({
  label,
  helperText,
  error,
  required,
  disabled = false,
  className = "",
  ...props
}: CustomInputProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      {label && (
        <label className="text-sm font-medium text-[#0C1421]">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}

      <input
        {...props}
        disabled={disabled}
        className={`w-full rounded-xl border px-3 py-2.5 text-base outline-none text-black placeholder:text-[#8897AD]
          ${
            error ? "border-red-500" : "border-[#D4D7E3] focus:border-[#375DFB]"
          }
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-[#F7FBFF]"}
          ${className}
        `}
      />

      {/* Error has higher priority */}
      {error ? (
        <p className="text-sm text-red-500 -mt-1">{error}</p>
      ) : helperText ? (
        <p className="text-sm text-gray-500 -mt-1">{helperText}</p>
      ) : null}
    </div>
  );
}
