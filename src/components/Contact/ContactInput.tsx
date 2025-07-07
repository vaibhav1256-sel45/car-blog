// components/contact/ContactInput.tsx
import { FieldError, UseFormRegister } from "react-hook-form";
import { InputHTMLAttributes } from "react";

type Props = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  validation?: object;
  onKeyDown?: InputHTMLAttributes<HTMLInputElement>["onKeyDown"];
};

export default function ContactInput({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  validation,
  onKeyDown,
}: Props) {
  return (
    <div className="mb-4">
      <label className="block text-gray-300 mb-2" htmlFor={name}>
        {label} <span className="text-red-400">*</span>
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        maxLength={name === "name" ? 20 : name === "subject" ? 100 : undefined}
        {...register(name, validation)}
        onKeyDown={onKeyDown}
        className={`w-full px-4 py-2 rounded bg-[#1e2130] border ${
          error ? "border-red-500" : "border-gray-600"
        } text-white focus:outline-none focus:ring-2 focus:ring-indigo-400`}
        required
      />
      {typeof error?.message === "string" && (
        <p className="text-red-400 text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
}
