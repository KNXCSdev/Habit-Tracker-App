import type { ReactNode, ChangeEvent } from "react";

interface TextInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  icon?: ReactNode;
  required?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({
  id,
  label,
  type = "text",
  placeholder = "",
  icon,
  required = false,
  value,
  onChange,
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
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5 text-xl">
            {icon}
          </div>
        )}
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          className={`text-textPrimary bg-background block w-full rounded-lg border border-gray-300 p-2.5 ${icon ? "ps-10" : ""} placeholder-textTertiary/90 font-light outline-none focus:border-blue-500 focus:ring-blue-500`}
          required={required}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
