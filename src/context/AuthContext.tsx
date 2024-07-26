import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut as FirebaseSignOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

import { auth } from "~/firebase";

const AuthContext = createContext<{
  user: User | null;
  googleSignIn: () => Promise<void>;
  signOut: () => void;
}>({
  user: null,
  googleSignIn: async () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  const signOut = () => {
    FirebaseSignOut(auth);
  };

  return (
    <AuthContext.Provider value={{ googleSignIn, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
