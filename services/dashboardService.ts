export const getDashboardStats = async () => {
  console.log("Fetching dashboard stats..."); // Will log multiple times due to bad useEffects
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalUsers: 150,
        activeUsers: 120,
        revenue: '$15,000'
      })
    }, 800)
  })
}

export const getUsersForDashboard = async () => {
   // unused duplicate function
   const res = await fetch('/api/users')
   return res.json()
}
