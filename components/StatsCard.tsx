"use client"
import { useEffect, useState } from 'react';
import { getDashboardStats } from '../services/dashboardService';

export default function StatsCard({ title, type }: any) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Duplicate fetch for every card
    getDashboardStats().then((res: any) => {
      setData(res);
    })
  }, []);

  let displayValue = 'Loading...';
  if (data) {
    if (type === 'users') displayValue = data.totalUsers;
    if (type === 'active') displayValue = data.activeUsers;
    if (type === 'rev') displayValue = data.revenue;
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px', width: '30%', backgroundColor: 'white', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
      <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">{title}</h3>
      <h1 className="text-3xl font-bold text-gray-800">{displayValue}</h1>
      <div className="mt-2 text-sm text-green-500">↑ 12% from last month</div>
    </div>
  )
}
