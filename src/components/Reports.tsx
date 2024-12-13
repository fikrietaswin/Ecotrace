import { useState } from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Download, Filter } from 'lucide-react'

const monthlyData = [
  { month: 'Jan', emissions: 4000, reduction: 400 },
  { month: 'Feb', emissions: 3000, reduction: 300 },
  { month: 'Mar', emissions: 2000, reduction: 200 },
  { month: 'Apr', emissions: 2780, reduction: 278 },
  { month: 'May', emissions: 1890, reduction: 189 },
  { month: 'Jun', emissions: 2390, reduction: 239 },
]

const sourceData = [
  { source: 'Electricity', amount: 45 },
  { source: 'Transportation', amount: 30 },
  { source: 'Waste', amount: 15 },
  { source: 'Other', amount: 10 },
]

const Reports = () => {
  const [timeframe, setTimeframe] = useState('monthly')

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Environmental Reports</h1>
        <div className="flex gap-4">
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Carbon Emissions Over Time</h3>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="emissions" stroke="#059669" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Emissions by Source</h3>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sourceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="source" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="#059669" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Key Metrics</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">Total Emissions</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">16,060 kg CO2e</p>
              <p className="text-sm text-green-600 mt-1">↓ 12% vs last period</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">Carbon Reduction</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">1,606 kg CO2e</p>
              <p className="text-sm text-green-600 mt-1">↑ 8% vs last period</p>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">Sustainability Score</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">85/100</p>
              <p className="text-sm text-green-600 mt-1">↑ 5 points vs last period</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
