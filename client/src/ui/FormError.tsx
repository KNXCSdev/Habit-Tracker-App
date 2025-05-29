import { MdOutlineErrorOutline } from "react-icons/md";

interface FormErrorProps {
  message: string;
}

export default function FormError({ message }: FormErrorProps) {
  return (
    <div className="text-error flex items-center gap-2 rounded-lg bg-red-200 px-4 py-3">
      <span className="text-2xl">
        <MdOutlineErrorOutline />
      </span>
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}
