import React from 'react'

const Dashboard = () => {
  return (
    
    <div className='mt-4'>
    <div>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard! Here you can manage your content and view analytics.</p>   
        <p>Use the navigation menu to access different sections of the dashboard.</p>
        <nav>
          <ul>
            <li><a href="/dashboard">Home</a></li>
            <li><a href="/dashboard/profile">Profile</a></li>
            <li><a href="/dashboard/settings">Settings</a></li>
          </ul>
        </nav>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>    
                        <td>Total Users</td>
                        <td>1500</td>
                    </tr>   
                    <tr>
                        <td>Active Sessions</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>Revenue</td>
                        <td>$10,000</td>
                    </tr>
                </tbody>

            </table>
            <div>
                <h2 className='p-4 mt-4'>Recent Activity</h2>
                <ul>
                    <li>User JohnDoe signed up</li> 
                    <li>User JaneSmith made a purchase</li>
                    <li>User MikeBrown updated profile</li>
                </ul>

            </div>
        </div>
      </div>

    </div>
    
  )
}

export default Dashboard