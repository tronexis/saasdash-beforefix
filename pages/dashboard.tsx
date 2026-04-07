import { useContext } from 'react';
import { AppProvider, AppContext } from '../context/AppContext';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatsCard from '../components/StatsCard';
import UserTable from '../components/UserTable';
import { useUsers } from '../hooks/useUsers';

function DashboardContent() {
  const { searchQuery } = useContext(AppContext);
  const { users, loading, setUsers } = useUsers(searchQuery);

  return (
    <div className="flex h-screen bg-gray-100 w-full font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
              <div className="text-sm text-gray-500">Last updated: Just now</div>
            </div>

            <div className="flex flex-wrap gap-6 mb-8">
              <StatsCard title="Total Users" type="users" />
              <StatsCard title="Active Users" type="active" />
              <StatsCard title="Total Revenue" type="rev" />
            </div>

            <div className="mb-4">
              {loading ? (
                <div className="p-8 text-center text-gray-500 bg-white rounded-lg shadow-sm border border-gray-200">
                  Loading user data...
                </div>
              ) : (
                <UserTable users={users} setUsers={setUsers} />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <AppProvider>
      <DashboardContent />
    </AppProvider>
  )
}
