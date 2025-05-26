import type { ReactNode } from "react";

interface TextInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  icon?: ReactNode;
  required?: boolean;
}

export default function TextInput({
  id,
  label,
  type = "text",
  placeholder = "",
  icon,
  required = false,
}: TextInputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-textPrimary mb-2 block text-sm font-medium"
      >
        {label}
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 text-xl">
          {icon}
        </div>
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          className="text-textPrimary block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 focus:border-blue-500 focus:ring-blue-500"
          required={required}
        />
      </div>
    </div>
  );
}
