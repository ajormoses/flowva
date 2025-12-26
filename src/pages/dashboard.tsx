import EarnPoints from "../components/Resources/EarnPoints";
import RedeemPoints from "../components/Resources/RedeemPoints";
import DashboardLayout from "../components/Layout/DashboardLayout";
import TabSwitcher from "../components/Resources/TabSwitcher";

const Dashboard = () => {
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
              content: <EarnPoints />,
            },
            {
              label: "Redeem Rewards",
              content: <RedeemPoints />,
            },
          ]}
        />
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
