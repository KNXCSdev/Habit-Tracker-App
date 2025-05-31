import { useState } from "react";
import { ICON_OPTIONS } from "../config/iconOptions";
import type { SvgIconComponent } from "@mui/icons-material";

interface IconOption {
  name: string;
  icon: SvgIconComponent;
}

interface IconPickerProps {
  onClose: () => void;
  onConfirm: (iconName: string | null) => void;
}

export default function IconPicker({ onClose, onConfirm }: IconPickerProps) {
  const [search, setSearch] = useState<string>("");
  const [selected, setSelected] = useState<string | null>(null);

  const filteredIcons: IconOption[] = ICON_OPTIONS.filter((icon) =>
    icon.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-background w-[400px] rounded-xl p-6 shadow-xl">
        <h2 className="text-textPrimary text-lg font-semibold">
          Select an Icon
        </h2>
        <p className="text-textAccent mb-4 text-sm">
          Choose an icon to visually represent your habit.
        </p>

        <input
          type="text"
          placeholder="Search icons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-backgroundIcon text-textPrimary mb-4 w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid max-h-70 grid-cols-6 gap-3 overflow-y-auto px-1 pt-2">
          {filteredIcons.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => setSelected(name)}
              aria-label="Icon"
              className={`hover:bg-backgroundIcon text-textAccent flex cursor-pointer items-center justify-center rounded-lg border p-2 ${
                selected === name
                  ? "border-textSecondary bg-textSecondary outline-background text-textWhite hover:bg-textSecondary ring-4 ring-blue-500 outline-[0.5px]"
                  : "border-backgroundIcon"
              }`}
            >
              <Icon fontSize="medium" />
            </button>
          ))}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            aria-label="Cancel"
            className="text-textAccent hover:bg-backgroundIcon bg-backgroundIcon hover:text-textPrimary cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(selected)}
            disabled={!selected}
            aria-label="Confirm Selection"
            className={`text-background cursor-pointer rounded-md px-4 py-2 text-sm font-medium ${
              selected
                ? "bg-blue-600 hover:bg-blue-700"
                : "cursor-not-allowed bg-blue-300"
            }`}
          >
            Confirm Selection
          </button>
        </div>
      </div>
    </div>
  );
}
