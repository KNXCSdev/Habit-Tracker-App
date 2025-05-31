import type { ReactNode } from "react";

interface EmptyCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  quote?: string;
}

export default function EmptyCard({
  icon,
  title,
  description,
  quote,
}: EmptyCardProps) {
  return (
    <div className="bg-background col-span-3 flex h-full w-full flex-col items-center justify-center rounded-lg p-5 text-center shadow">
      <div className="bg-backgroundIcon text-textTertiary mb-2 rounded-full p-4 text-3xl">
        {icon}
      </div>
      <h2 className="text-textPrimary mb-2 text-xl font-medium">{title}</h2>
      <p className="text-textAccent text-md mb-2 font-light">
        {description.split("ENTER").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
      {quote && (
        <p className="text-textTertiary text-sm tracking-wider italic">
          {quote}
        </p>
      )}
    </div>
  );
}
