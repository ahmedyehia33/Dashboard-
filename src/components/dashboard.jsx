import React from 'react';
import { Link } from 'react-router-dom';
import DashboardStatsGrid from './dashboardStatsGrid';
import TransictionChart from './transictionChart';
import BuyerProfileChart from './buyerProfileChart';
import RecentOrders from './recentOrders';
import PopularProducts from './popularProducts';


const Dashboard = () => {
    return (
    <>
        <div className="flex flex-col gap-4">
            <DashboardStatsGrid/>
        </div>
        <div className="flex flex-row gap-4 w-full">
            <TransictionChart/>
            <BuyerProfileChart/>
        </div>
        <div className="flex flex-row gap-4 w-full ">
            <RecentOrders/>
            <PopularProducts/>
        </div>
    </>);
}
 
export default Dashboard;