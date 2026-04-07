"use client"
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Header() {
  const { user, searchQuery, setSearchQuery, setIsSidebarOpen, isSidebarOpen } = useContext(AppContext);

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 w-full shadow-sm z-10">
      <div className="flex items-center">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="mr-4 p-2 hover:bg-gray-100 rounded text-gray-600"
        >
          ☰
        </button>
        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 pl-10 pr-4 py-2 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-gray-700">🔔</button>
        <div className="flex items-center gap-3 border-l pl-4">
          <div className="text-right hidden md:block">
            <div className="text-sm font-medium text-gray-700">{user.name}</div>
            <div className="text-xs text-gray-500">Administrator</div>
          </div>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            {user.name.charAt(0)}
          </div>
        </div>
      </div>
    </header>
  )
}
