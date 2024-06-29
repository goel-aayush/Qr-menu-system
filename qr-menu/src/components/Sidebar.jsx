import React from 'react';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-1/5 min-h-screen border-r-2 border-gray-400 border-t-0">
      <div className="pt-12 pl-16 flex flex-col gap-5">
        <NavLink to='/add' className="flex items-center gap-3.5 border border-gray-400 border-r-0 p-2.5 rounded-l cursor-pointer">
            <img src={assets.add_icon} alt="" className="w-5"/>
            <p className="hidden md:inline">Add Items</p>
        </NavLink>
        <NavLink to='/list' className="flex items-center gap-3.5 border border-gray-400 border-r-0 p-2.5 rounded-l cursor-pointer">
            <img src={assets.order_icon} alt="" className="w-5"/>
            <p className="hidden md:inline">List Items</p>
        </NavLink>
        <NavLink to='/orders' className="flex items-center gap-3.5 border border-gray-400 border-r-0 p-2.5 rounded-l cursor-pointer">
            <img src={assets.order_icon} alt="" className="w-5"/>
            <p className="hidden md:inline">Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar;