import { Heart, Star } from 'lucide-react'
import { EcoPackage } from '../types/ecotourism'
import { useState } from 'react'

interface EcoPackageCardProps {
  package: EcoPackage
}

const EcoPackageCard = ({ package: pkg }: EcoPackageCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
        <img
          src={pkg.images[0]}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200"
        >
          <Heart
            className={`h-5 w-5 ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-gray-900">{pkg.title}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">{pkg.rating}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500">{pkg.location}</p>
        
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {pkg.sustainabilityScore}% Eco-score
          </span>
          <span className="text-sm text-gray-500">{pkg.duration}</span>
        </div>

        <div className="pt-2 flex items-baseline">
          <span className="text-lg font-semibold">${pkg.price}</span>
          <span className="text-sm text-gray-500 ml-1">/ person</span>
        </div>

        {/* Activities */}
        <div className="pt-2">
          <p className="text-sm text-gray-600">
            Activities: {pkg.activities.slice(0, 2).join(", ")}
            {pkg.activities.length > 2 && "..."}
          </p>
        </div>
      </div>
    </div>
  )
}

export default EcoPackageCard
