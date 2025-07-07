// components/contact/ContactTextarea.tsx
import { FieldError, UseFormRegister } from "react-hook-form";

type Props = {
  label: string;
  name: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  validation?: object;
};

export default function ContactTextArea({
  label,
  name,
  placeholder,
  register,
  error,
  validation,
}: Props) {
  return (
    <div className="mb-4">
      <label className="block text-gray-300 mb-2" htmlFor={name}>
        {label} <span className="text-red-400">*</span>
      </label>
      <textarea
        id={name}
        rows={5}
        placeholder={placeholder}
        maxLength={name === "message" ? 1000 : undefined}
        {...register(name, validation)}
        className={`w-full px-4 py-2 rounded bg-[#1e2130] border ${
          error ? "border-red-500" : "border-gray-600"
        } text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none`}
        required
      />
      {typeof error?.message === "string" && (
        <p className="text-red-400 text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
}
