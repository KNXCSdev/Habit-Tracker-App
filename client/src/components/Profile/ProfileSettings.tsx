import UserSettingsForm from "./UserSettingsForm";
import UserPasswordForm from "./UserPasswordForm";
import { useUser } from "../Authentication/useUser";
import Spinner from "../../ui/Spinner";

export default function ProfileSettings() {
  const { user, isPending } = useUser();

  if (isPending) return <Spinner />;

  return (
    <div className="bg-background flex h-full w-[40rem] flex-col gap-2 self-center rounded-lg px-8 py-4 shadow-md">
      <UserSettingsForm user={user!} />
      <UserPasswordForm />
    </div>
  );
}
