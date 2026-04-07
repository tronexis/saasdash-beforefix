import { useState, useEffect } from 'react';
import { fetchUsers } from '../utils/api';

export const useUsers = (query: string) => {
  const [users, setUsers] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchUsers().then((data: any) => {
      let filtered = data;
      if (query) {
        filtered = data.filter((u: any) => u.name.toLowerCase().includes(query.toLowerCase()));
      }
      // Bug: sets to null if no results, causing crash in UserTable
      setUsers(filtered.length > 0 ? filtered : null);
      setLoading(false);
    });
  }, [query]); // Fetches on every keystroke

  return { users, loading, setUsers };
}
