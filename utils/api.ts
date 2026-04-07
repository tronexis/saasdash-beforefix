export const fetchUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Active' },
        { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'Active' },
      ])
    }, 500)
  })
}

export const updateUser = async (id: any, data: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(data.name === 'error') reject('Server error')
      resolve({ success: true, data })
    }, 500)
  })
}
