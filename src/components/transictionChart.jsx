import React from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import BuyerProfileChart from './buyerProfileChart';



const data = [
	{
		name: 'Jan',
		Expense: 4000,
		Income: 2400
	},
	{
		name: 'Feb',
		Expense: 3000,
		Income: 1398
	},
	{
		name: 'Mar',
		Expense: 2000,
		Income: 9800
	},
	{
		name: 'Apr',
		Expense: 2780,
		Income: 3908
	},
	{
		name: 'May',
		Expense: 1890,
		Income: 4800
	},
	{
		name: 'Jun',
		Expense: 2390,
		Income: 3800
	},
	{
		name: 'July',
		Expense: 3490,
		Income: 4300
	},
	{
		name: 'Aug',
		Expense: 2000,
		Income: 9800
	},
	{
		name: 'Sep',
		Expense: 2780,
		Income: 3908
	},
	{
		name: 'Oct',
		Expense: 1890,
		Income: 4800
	},
	{
		name: 'Nov',
		Expense: 2390,
		Income: 3800
	},
	{
		name: 'Dec',
		Expense: 3490,
		Income: 4300
	}
]

const TransictionChart = () => {
    return ( <>
    
    <div className='flex h-[22rem] w-full bg-white p-4 rounded-sm flex-col'>
    <strong className='text-gray-700 text-md ml-2'>Transiction</strong>
            <div className='flex flex-1'>
                
            <ResponsiveContainer width="100%" height={300}>
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Expense" fill="#8884d8" name="Expense" />
                <Bar dataKey="Income" fill="#FFBB28" name="Income" />
            </BarChart>
        </ResponsiveContainer>
        
            </div>
            </div>
            </> );
}
 
export default TransictionChart;