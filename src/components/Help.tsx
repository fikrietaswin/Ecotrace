import { Search, ChevronDown, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'How is my carbon footprint calculated?',
    answer: 'Your carbon footprint is calculated using internationally recognized methodologies that take into account your energy consumption, ' +
      'transportation usage, and waste production. We use emission factors from respected sources like the EPA and IPCC to convert your activity ' +
      'data into CO2 equivalent emissions.'
  },
  {
    question: 'How often should I update my emissions data?',
    answer: 'For the most accurate tracking, we recommend updating your data monthly. However, you can update it as frequently as you like. ' +
      'Regular updates help you better understand your environmental impact and identify trends.'
  },
  {
    question: 'What are carbon credits and how do they work?',
    answer: 'Carbon credits are certificates representing the reduction of one metric ton of carbon dioxide emissions. When you purchase carbon ' +
      'credits, you\'re investing in projects that reduce or remove greenhouse gas emissions, helping to offset your own carbon footprint.'
  },
  {
    question: 'How can I reduce my carbon footprint?',
    answer: 'There are many ways to reduce your carbon footprint, including: using energy-efficient appliances, reducing energy consumption, ' +
      'choosing renewable energy sources, optimizing transportation routes, implementing recycling programs, and investing in sustainable technologies.'
  },
]

const Help = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Help & Support</h1>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transform transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-4 pb-4 text-gray-500">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Still Need Help?</h2>
        <div className="text-gray-500 mb-4">
          Our support team is available 24/7 to help you with any questions or concerns.
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          <MessageCircle className="h-4 w-4 mr-2" />
          Contact Support
        </button>
      </div>
    </div>
  )
}

export default Help
