import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Calculator, TreePine, Settings, LineChart, User, Bell, HelpCircle, Network, Palmtree } from 'lucide-react'

const Sidebar = () => {
  const location = useLocation()

  const navigation = [
    { name: 'Dashboard', href: '/', icon: LayoutDashboard },
    { name: 'Carbon Calculator', href: '/calculator', icon: Calculator },
    { name: 'Theory of Change', href: '/theory-of-change', icon: Network },
    { name: 'Projects', href: '/projects', icon: TreePine },
    { name: 'Reports', href: '/reports', icon: LineChart },
    { name: 'Ecotourism', href: '/ecotourism', icon: Palmtree },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Notifications', href: '/notifications', icon: Bell },
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Help & Support', href: '/help', icon: HelpCircle },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-4rem)]">
      <nav className="flex flex-col gap-1 p-4">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transform transition-all duration-200 hover:scale-105 ${
                isActive
                  ? 'bg-green-50 text-green-700 shadow-sm hover:shadow-md hover:bg-green-100'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'
              }`}
            >
              <item.icon className={`h-5 w-5 transition-transform duration-200 ${isActive ? 'animate-pulse' : 'group-hover:rotate-12'}`} />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default Sidebar
