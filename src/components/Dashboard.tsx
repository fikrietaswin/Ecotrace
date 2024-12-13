import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ArrowDown, ArrowUp } from 'lucide-react'

const data = [
  { month: 'Jan', emissions: 4000 },
  { month: 'Feb', emissions: 3000 },
  { month: 'Mar', emissions: 2000 },
  { month: 'Apr', emissions: 2780 },
  { month: 'May', emissions: 1890 },
  { month: 'Jun', emissions: 2390 },
]

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Environmental Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Total Carbon Footprint</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">16.2</p>
            <p className="ml-2 text-sm text-gray-500">tons CO2e</p>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <ArrowDown className="h-4 w-4 text-green-500" />
            <span className="text-green-500 font-medium">12% less</span>
            <span className="text-gray-500 ml-2">from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Active Projects</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">8</p>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-green-500 font-medium">2 new</span>
            <span className="text-gray-500 ml-2">this month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-sm font-medium text-gray-500">Compliance Score</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">94%</p>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <ArrowUp className="h-4 w-4 text-green-500" />
            <span className="text-green-500 font-medium">5% increase</span>
            <span className="text-gray-500 ml-2">from last quarter</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-medium text-gray-900">Carbon Emissions Trend</h3>
        <div className="mt-6" style={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="emissions" fill="#059669" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
