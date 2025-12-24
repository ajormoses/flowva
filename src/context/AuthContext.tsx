import { createContext, useEffect, useState, useContext } from "react";
import { supbase } from "./SupbaseClient";

const AuthContext = createContext<any>(null);
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState<any>(null);

  //   Sign Up
  const signUpNewUser = async (email: string, password: string) => {
    const { data, error } = await supbase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.error("Error signing up:", error.message);
      return { success: false, error };
    }
  };

  //   Sign in
  const signInUser = async (email: string, password: string) => {
    try {
      await supbase.auth.signInWithPassword({
        email: email,
        password: password,
      });
    } catch (err) {
      console.error("Error signing in:", err);
    }
  };

  useEffect(() => {
    supbase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supbase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
    });
  }, []);

  //   Sign Out
  const signOutUser = async () => {
    const { error } = await supbase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ session, signUpNewUser, signInUser, signOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => {
  return useContext(AuthContext);
};
