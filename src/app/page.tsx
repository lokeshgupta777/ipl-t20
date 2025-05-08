"use client";
import { TabItem, Tabs, Textarea, TextInput, Card } from "flowbite-react";
import Fixtures from "@/features/Fixtures/Fixtures";
import { useState } from "react";
import PointsTable from "@/features/PointsTable/PointsTable";
import LiveUpcoming from "@/features/LiveUpcoming/LiveUpcoming";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="py-12 px-4 lg:px-16">
      <h1 className="text-3xl font-bold flex justify-center">IPL Dashboard</h1>
      <Card className="mt-12">
        <Tabs
          variant="fullWidth"
          onActiveTabChange={(tab) => setActiveTab(tab)}
          className="[&>*:last-child]:overflow-auto"
        >
          <TabItem title="Live / Upcoming">
            <LiveUpcoming />
          </TabItem>
          <TabItem title="Points Table">
            <PointsTable isActive={activeTab === 1} />
          </TabItem>
          <TabItem title="Matches">
            <Fixtures isActive={activeTab === 2} />
          </TabItem>
        </Tabs>
      </Card>
    </div>
  );
};

export default Dashboard;
