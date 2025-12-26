import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "./SupbaseClient";

const AuthContext = createContext<any>(null);
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const redirectUrl = window.location.origin;

  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  //   Sign Up
  const signUpNewUser = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
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
      await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
    } catch (err) {
      console.error("Error signing in:", err);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);

      // ✅ FORCE-REMOVE OAUTH HASH
      if (window.location.hash) {
        console.log("hello");
        const url = new URL(window.location.href);
        url.hash = "";
        window.history.replaceState({}, "", url.toString());
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setLoading(false); // ✅ DONE LOADING
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  //   Sign Out
  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    }
  };

  //  Sign Up with Google
  const signUpGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: redirectUrl },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        loading,
        signUpNewUser,
        signInUser,
        signOutUser,
        signUpGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => {
  return useContext(AuthContext);
};
