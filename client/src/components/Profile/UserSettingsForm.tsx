// src/components/settings/UserSettingsForm.tsx
import { HiOutlineUser } from "react-icons/hi2";
import { MdMailOutline } from "react-icons/md";
import TextInput from "../../ui/TextInput";
import { useState } from "react";
import { useUpdateUser } from "./useUpdateUser";

export default function UserSettingsForm({
  user,
}: {
  user: { name: string; email: string };
}) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const { update, isUpdating } = useUpdateUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    update({ name, email });
  };

  return (
    <div className="border-b border-b-gray-200 pb-6">
      <h1 className="text-textPrimary mb-6 text-2xl font-medium">
        Profile Settings
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <TextInput
          id="fullName"
          label="Full Name"
          icon={<HiOutlineUser />}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          id="email"
          label="Email"
          icon={<MdMailOutline />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          disabled={isUpdating}
          aria-label="Save settings"
          className="bg-textSecondary text-textWhite hover:bg-textSecondary/90 cursor-pointer self-end rounded-lg px-6 py-2 disabled:opacity-50"
        >
          {isUpdating ? "Saving..." : "Save settings"}
        </button>
      </form>
    </div>
  );
}
