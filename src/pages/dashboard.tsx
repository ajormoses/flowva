import { useState } from "react";
import Btn from "../Ui/Btn";
import { userAuth } from "../context/AuthContext";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const { signOutUser } = userAuth();

  async function handleSignOut() {
    try {
      setLoading(true);
      await signOutUser();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <Btn
        isLoading={loading}
        onClick={handleSignOut}
        type="button"
        label="Sign Out"
      />
    </>
  );
};

export default Dashboard;
