import { useState } from 'react'
import { Search, Calendar, Users, Filter, Heart, Map, Star } from 'lucide-react'
import EcoPackageCard from './EcoPackageCard'
import { EcoPackage } from '../types/ecotourism'

const packages: EcoPackage[] = [
  {
    id: 1,
    title: "Rainforest Conservation Retreat",
    location: "Amazon, Brazil",
    price: 299,
    rating: 4.9,
    reviews: 128,
    images: ["/rainforest-1.jpg"],
    description: "Immerse yourself in rainforest conservation activities while staying in eco-friendly lodges.",
    sustainabilityScore: 95,
    duration: "3-7 days",
    activities: ["Wildlife observation", "Tree planting", "Indigenous community visits"],
  },
  {
    id: 2,
    title: "Marine Conservation Experience",
    location: "Great Barrier Reef, Australia",
    price: 399,
    rating: 4.8,
    reviews: 89,
    images: ["/marine-1.jpg"],
    description: "Join marine biologists in coral reef restoration and sea turtle conservation.",
    sustainabilityScore: 92,
    duration: "4-10 days",
    activities: ["Coral restoration", "Sea turtle monitoring", "Sustainable fishing workshops"],
  },
  // Add more packages as needed
]

const Ecotourism = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: 'all',
    duration: 'all',
    activityType: 'all',
  })

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Eco-Tourism Packages</h1>
          <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
            <Map className="h-4 w-4 mr-1" />
            Show Map
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations, activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            />
          </div>
          
          <div className="flex space-x-2">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
              <Calendar className="h-4 w-4 mr-2" />
              Dates
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
              <Users className="h-4 w-4 mr-2" />
              Guests
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </button>
          </div>
        </div>

        {/* Quick filters */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {['Price: Low to High', 'Best Rating', 'Sustainability Score', 'Duration'].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 text-sm bg-gray-100 rounded-full hover:bg-gray-200 whitespace-nowrap"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Package listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <EcoPackageCard key={pkg.id} package={pkg} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ecotourism
