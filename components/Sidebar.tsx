"use client"
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Sidebar() {
  const { isSidebarOpen } = useContext(AppContext);

  if (!isSidebarOpen) return null;

  return (
    <div className="w-64 bg-gray-900 text-white h-screen flex flex-col transition-all duration-300">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-2xl font-bold tracking-tighter text-blue-400">SaaS<span className="text-white">Dash</span></h2>
      </div>
      <ul className="flex-1 p-4">
        <li className="mb-2 p-3 bg-blue-600 rounded cursor-pointer font-medium">Dashboard</li>
        <li className="mb-2 p-3 hover:bg-gray-800 rounded cursor-pointer text-gray-300">Users</li>
        <li className="mb-2 p-3 hover:bg-gray-800 rounded cursor-pointer text-gray-300">Analytics</li>
        <li className="mb-2 p-3 hover:bg-gray-800 rounded cursor-pointer text-gray-300">Settings</li>
      </ul>
      <div className="p-4 border-t border-gray-800 text-sm text-gray-500">
        v1.0.4-beta
      </div>
    </div>
  )
}
