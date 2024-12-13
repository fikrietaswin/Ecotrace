import { useState } from 'react'
import { Plus, Trash2, Sparkles, Save, RefreshCw } from 'lucide-react'

interface TOCStep {
  id: string
  content: string
  aiSuggestions?: string[]
}

interface TOCSection {
  inputs: TOCStep[]
  activities: TOCStep[]
  outputs: TOCStep[]
  outcomes: TOCStep[]
  impact: TOCStep[]
}

const TheoryOfChange = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [tocData, setTocData] = useState<TOCSection>({
    inputs: [{ id: '1', content: '', aiSuggestions: [] }],
    activities: [{ id: '1', content: '', aiSuggestions: [] }],
    outputs: [{ id: '1', content: '', aiSuggestions: [] }],
    outcomes: [{ id: '1', content: '', aiSuggestions: [] }],
    impact: [{ id: '1', content: '', aiSuggestions: [] }],
  })

  const handleAdd = (section: keyof TOCSection) => {
    setTocData(prev => ({
      ...prev,
      [section]: [...prev[section], { id: Date.now().toString(), content: '', aiSuggestions: [] }]
    }))
  }

  const handleRemove = (section: keyof TOCSection, id: string) => {
    setTocData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id)
    }))
  }

  const handleChange = (section: keyof TOCSection, id: string, value: string) => {
    setTocData(prev => ({
      ...prev,
      [section]: prev[section].map(item =>
        item.id === id ? { ...item, content: value } : item
      )
    }))
  }

  const generateAISuggestions = async (section: keyof TOCSection, id: string) => {
    setIsLoading(true)
    // Simulated AI response - in a real app, this would call your AI service
    setTimeout(() => {
      setTocData(prev => ({
        ...prev,
        [section]: prev[section].map(item =>
          item.id === id
            ? {
                ...item,
                aiSuggestions: [
                  'Implement renewable energy solutions',
                  'Develop sustainable supply chains',
                  'Establish community engagement programs'
                ]
              }
            : item
        )
      }))
      setIsLoading(false)
    }, 1000)
  }

  const renderSection = (title: string, section: keyof TOCSection) => (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <button
          onClick={() => handleAdd(section)}
          className="inline-flex items-center px-3 py-1 text-sm text-green-600 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors duration-200"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add
        </button>
      </div>
      
      {tocData[section].map((item) => (
        <div key={item.id} className="space-y-2">
          <div className="flex gap-2">
            <div className="flex-1">
              <input
                type="text"
                value={item.content}
                onChange={(e) => handleChange(section, item.id, e.target.value)}
                placeholder={`Enter ${title.toLowerCase()}...`}
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <button
              onClick={() => generateAISuggestions(section, item.id)}
              className={`inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium ${
                isLoading ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'
              }`}
            >
              {isLoading ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="h-4 w-4 text-yellow-500" />
              )}
            </button>
            {tocData[section].length > 1 && (
              <button
                onClick={() => handleRemove(section, item.id)}
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium bg-white hover:bg-gray-50"
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </button>
            )}
          </div>
          
          {item.aiSuggestions && item.aiSuggestions.length > 0 && (
            <div className="pl-4 space-y-2">
              {item.aiSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-600 animate-float cursor-pointer hover:text-green-600"
                  onClick={() => handleChange(section, item.id, suggestion)}
                >
                  <Sparkles className="h-3 w-3 text-yellow-500" />
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Theory of Change Calculator</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
          <Save className="h-4 w-4 mr-2" />
          Save Theory of Change
        </button>
      </div>

      <p className="text-gray-600">
        Build your Theory of Change framework with AI-powered suggestions. Define your pathway from inputs to impact.
      </p>

      {renderSection('Inputs', 'inputs')}
      {renderSection('Activities', 'activities')}
      {renderSection('Outputs', 'outputs')}
      {renderSection('Outcomes', 'outcomes')}
      {renderSection('Impact', 'impact')}
    </div>
  )
}

export default TheoryOfChange
