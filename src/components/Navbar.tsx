import { useState } from 'react'
import { Bell, User, Settings, LogOut, X } from 'lucide-react'

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const notifications = [
    { id: 1, message: "Monthly carbon report is ready", time: "2 hours ago" },
    { id: 2, message: "New sustainability goal achieved", time: "1 day ago" },
    { id: 3, message: "Project 'Solar Panel Installation' updated", time: "2 days ago" },
  ]

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="px-4 mx-auto max-w-full">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors duration-200 transform hover:scale-105">EcoMetrics</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                className="p-2 text-gray-600 hover:text-gray-900 relative transition-all duration-200 hover:scale-110 hover:bg-gray-100 rounded-full"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="h-5 w-5 transform hover:rotate-12 transition-transform duration-200" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transform transition-all duration-200 animate-float">
                  <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="font-medium">Notifications</h3>
                    <button onClick={() => setShowNotifications(false)} className="hover:rotate-90 transition-transform duration-200">
                      <X className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-4 border-b hover:bg-gray-50 transition-colors duration-200 hover:scale-[1.02] transform">
                        <p className="text-sm text-gray-800">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center transform hover:scale-110 transition-transform duration-200 hover:bg-green-200"
                onClick={() => setShowProfile(!showProfile)}
              >
                <span className="text-sm font-medium text-green-800">JD</span>
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 transform transition-all duration-200 animate-float">
                  <div className="py-1">
                    <a href="/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-all duration-200 hover:translate-x-1">
                      <Settings className="h-4 w-4 mr-3" />
                      Settings
                    </a>
                    <a href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-all duration-200 hover:translate-x-1">
                      <User className="h-4 w-4 mr-3" />
                      Profile
                    </a>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-all duration-200 hover:translate-x-1">
                      <LogOut className="h-4 w-4 mr-3" />
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
