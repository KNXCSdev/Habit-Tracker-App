import { useEffect, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import TextInput from "../../ui/TextInput";
import { ICON_OPTIONS } from "../../config/iconOptions";
import IconPicker from "../../ui/IconPicker";
import { useCreateHabit } from "./useCreateHabit";
import { useEditHabit } from "../HabitDetails/useEditHabit";

type Habit = {
  id: string;
  title: string;
  description: string;
  icon: string;
  frequency: string;
};

export default function HabitForm({
  handleIsOpenModal,
  habit = null,
}: {
  handleIsOpenModal: (value: boolean) => void;
  habit?: Habit | null;
}) {
  const isEditMode = Boolean(habit);

  const { addHabit, isCreating } = useCreateHabit();
  const { edit: editHabit, isEditing } = useEditHabit();

  const [iconPickerOpen, setIconPickerOpen] = useState(false);

  const [selectedIconName, setSelectedIconName] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("");

  useEffect(() => {
    if (habit) {
      setTitle(habit.title);
      setDescription(habit.description);
      setFrequency(habit.frequency);
      setSelectedIconName(habit.icon);
    }
  }, [habit]);

  const SelectedIconComponent =
    ICON_OPTIONS.find((icon) => icon.name === selectedIconName)?.icon ||
    CheckCircleIcon;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title || !frequency || !description) return;

    const payload = {
      title,
      frequency,
      description,
      icon: selectedIconName ?? "CheckCircleIcon",
    };

    if (isEditMode && habit) {
      editHabit(
        { habitId: habit.id, ...payload },
        {
          onSettled: () => handleIsOpenModal(false),
        },
      );
    } else {
      addHabit(payload, {
        onSettled: () => handleIsOpenModal(false),
      });
    }
  }

  return (
    <div
      className="fixed top-0 left-0 z-30 h-screen w-full bg-[#0000004d] backdrop-blur-xs transition"
      onClick={() => handleIsOpenModal(false)}
    >
      <div
        className="bg-background fixed top-1/2 left-1/2 z-50 h-[40rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-lg py-[1.5rem] shadow-lg transition"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-full flex-col gap-6">
          <div className="px-[2rem]">
            <h3 className="text-textPrimary text-2xl font-medium">
              {isEditMode ? "Edit Habit" : "Create New Habit"}
            </h3>
            <p className="text-textAccent text-sm font-light">
              {isEditMode
                ? "Update your habit details below."
                : "Define a new habit to track and build a better routine."}
            </p>
          </div>
          <hr className="text-textAccent/20" />
          <form
            className="flex flex-grow flex-col gap-6 px-[2rem]"
            onSubmit={handleSubmit}
          >
            <TextInput
              id="title"
              label="Habit Title"
              placeholder="e.g., Morning Jog"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <TextInput
              id="description"
              label="Description"
              placeholder="e.g., Jog every morning at 7am"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div>
              <label
                htmlFor="icon"
                className="text-textPrimary mb-2 block text-sm font-medium"
              >
                Choose an icon
              </label>
              <div className="mb-2 flex items-center gap-4">
                <div className="bg-backgroundIcon text-textTertiary flex h-10 w-10 items-center justify-center rounded-full">
                  <SelectedIconComponent className="h-6 w-6" />
                </div>
                <button
                  className="bg-background text-textAccent border-textPrimary/20 hover:bg-backgroundSecondary cursor-pointer rounded-lg border px-5 py-2 text-sm font-light"
                  type="button"
                  aria-label="Select Icon"
                  onClick={() => setIconPickerOpen(true)}
                >
                  Select Icon
                </button>
              </div>
              <p className="text-textAccent text-[0.79rem]">
                Select an icon to represent your habit. Defaults to checkmark.
              </p>
            </div>

            <div>
              <label
                htmlFor="frequency"
                className="text-textPrimary mb-2 block text-sm font-medium"
              >
                Frequency
              </label>

              <select
                id="frequency"
                className="text-textAccent bg-background block w-full rounded-lg border border-gray-400 p-2.5 font-light outline-none focus:border-blue-500 focus:ring-blue-500"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select frequency
                </option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>

            <div className="border-t-textAccent/20 mt-auto flex items-center justify-end gap-2 border-t pt-5">
              <button
                onClick={() => handleIsOpenModal(false)}
                type="button"
                aria-label="Cancel"
                className="bg-backgroundIcon text-textPrimary hover:bg-backgroundIcon/60 cursor-pointer rounded-lg px-6 py-2"
              >
                Cancel
              </button>
              <button
                className="bg-textSecondary text-textWhite hover:bg-textSecondary/90 cursor-pointer rounded-lg px-6 py-2"
                type="submit"
                disabled={isCreating || isEditing}
                aria-label="Save Habit"
              >
                {isCreating || isEditing
                  ? "Saving..."
                  : isEditMode
                    ? "Update Habit"
                    : "Save Habit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {iconPickerOpen && (
        <IconPicker
          onClose={() => setIconPickerOpen(false)}
          onConfirm={(iconName) => {
            setSelectedIconName(iconName);
            setIconPickerOpen(false);
          }}
        />
      )}
    </div>
  );
}
