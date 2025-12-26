import { useState } from "react";
import Btn from "../Ui/Btn";
import { userAuth } from "../context/AuthContext";
import DashboardLayout from "../components/Layout/DashboardLayout";
import TabSwitcher from "../components/Resources/TabSwitcher";

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
      <DashboardLayout
        title="Rewards Hub"
        desc="Earn points, unlock rewards, and celebrate your progress!"
      >
        <TabSwitcher
          tabs={[
            {
              label: "Earn Points",
              content: <div>Overview content</div>,
            },
            {
              label: "Redeem Rewards",
              content: <div>Notifications content</div>,
            },
          ]}
        />
        {/* <Btn
          isLoading={loading}
          onClick={handleSignOut}
          type="button"
          label="Sign Out"
        /> */}
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
