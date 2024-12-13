import { useState } from 'react'

interface EmissionData {
  electricity: number
  transportation: number
  waste: number
}

const CarbonCalculator = () => {
  const [emissions, setEmissions] = useState<EmissionData>({
    electricity: 0,
    transportation: 0,
    waste: 0,
  })

  const calculateTotal = () => {
    return Object.values(emissions).reduce((a, b) => a + b, 0)
  }

  const handleInputChange = (field: keyof EmissionData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmissions(prev => ({
      ...prev,
      [field]: Number(e.target.value) || 0
    }))
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 hover:text-green-600 transition-colors duration-200">Carbon Footprint Calculator</h1>
      
      <div className="bg-white rounded-xl shadow-sm p-6 space-y-6 hover:shadow-lg transition-shadow duration-300 transform hover:scale-[1.01]">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 hover:text-green-600 transition-colors duration-200">
            Monthly Electricity Usage (kWh)
          </label>
          <input
            type="number"
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
            value={emissions.electricity}
            onChange={handleInputChange('electricity')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 hover:text-green-600 transition-colors duration-200">
            Monthly Transportation Emissions (kg CO2)
          </label>
          <input
            type="number"
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
            value={emissions.transportation}
            onChange={handleInputChange('transportation')}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 hover:text-green-600 transition-colors duration-200">
            Monthly Waste Production (kg)
          </label>
          <input
            type="number"
            className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 transition-all duration-200 hover:border-green-400"
            value={emissions.waste}
            onChange={handleInputChange('waste')}
          />
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between items-center transform hover:scale-105 transition-transform duration-200">
            <span className="text-lg font-medium text-gray-900">Total Emissions</span>
            <span className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors duration-200">
              {calculateTotal().toFixed(2)} kg CO2e
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarbonCalculator
