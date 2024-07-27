import { Icon } from "@/icon/icon";
import { Loader } from "@/loader/Loader";
import { useAuth0 } from "@auth0/auth0-react";

export const CurrentUser = () => {
  const { user, loginWithRedirect, logout, isLoading } = useAuth0();

  if (isLoading) {
    return <Loader className="h-7 w-7 text-gray-400" />;
  }

  if (!user) {
    return (
      <button
        onClick={() => loginWithRedirect()}
        className="border-2 rounded-full px-3 hover:bg-gray-200"
      >
        Log In
      </button>
    );
  }

  return user.picture ? (
    <img
      title={user.name}
      src={user.picture}
      alt={user.name}
      className="w-7 h-7 rounded-full"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    />
  ) : (
    <Icon
      iconName="account_circle"
      title={user.name}
      className="text-gray-500 w-7 h-7 flex-center text-3xl"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    />
  );
};
