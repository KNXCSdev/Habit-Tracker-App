import { useState } from "react";
import { HiOutlineLockClosed } from "react-icons/hi2";
import { MdOutlineLockReset } from "react-icons/md";
import TextInput from "../../ui/TextInput";
import { useUpdatePassword } from "./useUpdatePassword";

export default function UserPasswordForm() {
  const [passwordCurrent, setPasswordCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { update, isUpdating } = useUpdatePassword();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    update({ passwordCurrent, password, passwordConfirm });
  };

  return (
    <div className="mt-auto flex flex-col gap-4">
      <h2 className="text-textPrimary text-2xl font-medium">Password Change</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <TextInput
          id="passwordCurrent"
          label="Current Password"
          type="password"
          placeholder="Enter current password"
          icon={<HiOutlineLockClosed />}
          value={passwordCurrent}
          onChange={(e) => setPasswordCurrent(e.target.value)}
        />
        <TextInput
          id="newPassword"
          label="New Password"
          type="password"
          placeholder="Enter new password"
          icon={<HiOutlineLockClosed />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextInput
          id="passwordConfirm"
          label="Confirm New Password"
          type="password"
          placeholder="Confirm new password"
          icon={<MdOutlineLockReset />}
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button
          type="submit"
          disabled={isUpdating}
          className="bg-textSecondary text-textWhite hover:bg-textSecondary/90 cursor-pointer self-end rounded-lg px-6 py-2 disabled:opacity-50"
        >
          {isUpdating ? "Updating..." : "Save New Password"}
        </button>
      </form>
    </div>
  );
}
