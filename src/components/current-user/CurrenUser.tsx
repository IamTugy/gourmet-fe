import { Icon } from "@/icon/icon";
import { useAuth } from "~/context/AuthContext";

export const CurrentUser = () => {
  const { user, googleSignIn, signOut } = useAuth();

  if (!user) {
    return (
      <button
        onClick={googleSignIn}
        className="border-2 rounded-full px-3 hover:bg-gray-200"
      >
        Log In
      </button>
    );
  }

  return user.photoURL ? (
    <img
      title={user.displayName || user.uid}
      src={user.photoURL || ""}
      alt={user.displayName || ""}
      className="w-7 h-7 rounded-full"
      onClick={signOut}
    />
  ) : (
    <Icon
      iconName="account_circle"
      className="text-gray-500 w-7 h-7 flex-center text-3xl"
      onClick={signOut}
    />
  );
};
