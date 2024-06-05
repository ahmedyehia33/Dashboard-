import React from 'react';
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5';


const DashboardStatsGrid = () => {
    return (
        <>
        <div className="flex gap-2 w-full">
            <BoxWrapper >
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                    <IoBagHandle className='text-2xl text-white'/>
                </div>
                <div className='pl-4'>
                    <span className='text-gray-500 text-sm font-light'>Total sales</span>
                    <div>
                        <strong className='text-gray-800 font-meidum'>$34525.60</strong>
                        <span className='text-gray-500 text-sm font-light'>+234</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper >
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-red-500'>
                    <IoPieChart className='text-2xl text-white'/>
                </div>
                <div className='pl-4'>
                    <span className='text-gray-500 text-sm font-light'>Total Express</span>
                    <div>
                        <strong className='text-gray-800 font-meidum'>$34525.60</strong>
                        <span className='text-gray-500 text-sm font-light'>+234</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper >
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500'>
                    <IoPeople className='text-2xl text-white'/>
                </div>
                <div className='pl-4'>
                    <span className='text-gray-500 text-sm font-light'>Total Customers</span>
                    <div>
                        <strong className='text-gray-800 font-meidum'>$34525.60</strong>
                        <span className='text-gray-500 text-sm font-light'>+234</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper >
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-red-500'>
                    <IoCart className='text-2xl text-white'/>
                </div>
                <div className='pl-4'>
                    <span className='text-gray-500 text-sm font-light'>Total Orders</span>
                    <div>
                        <strong className='text-gray-800 font-meidum'>$34525.60</strong>
                        <span className='text-gray-500 text-sm font-light'>+234</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
        </>
      );
}
 const BoxWrapper = ({children}) => {
    return (  <>
                <div className='bg-white rounded-sm flex-1 border border-gray-200 flex items-center p-4 m-2'>{children}</div>
            
    </>);
 }
  
 
export default DashboardStatsGrid;