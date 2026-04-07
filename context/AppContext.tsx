"use client"
import { createContext, useState } from 'react';

export const AppContext = createContext<any>(null);

export const AppProvider = ({ children }: any) => {
  const [user, setUser] = useState({ name: 'Admin User', email: 'admin@saas.com' });
  const [theme, setTheme] = useState('light');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState([]);

  return (
    <AppContext.Provider value={{
      user, setUser,
      theme, setTheme,
      searchQuery, setSearchQuery,
      isSidebarOpen, setIsSidebarOpen,
      notifications, setNotifications
    }}>
      {children}
    </AppContext.Provider>
  )
}
