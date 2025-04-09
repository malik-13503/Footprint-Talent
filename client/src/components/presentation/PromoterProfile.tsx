import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Flag, Briefcase, Ruler, Layers, MapPin } from "lucide-react";
import { Promoter, Document } from "@shared/schema";

interface PromoterProfileProps {
  promoter: Promoter;
  documents: Document[];
}

export function PromoterProfile({ promoter, documents }: PromoterProfileProps) {
  // Get professional photos
  const photos = documents.filter(doc => doc.type === "photo").slice(0, 3);
  
  // Function to get brand list as an array
  const getBrands = () => {
    if (!promoter.brandsWorkedFor) return [];
    return promoter.brandsWorkedFor.split(',').map(brand => brand.trim()).filter(Boolean);
  };
  
  // Function to get nationality display name
  const getNationalityDisplay = (code: string) => {
    const nationalityMap: Record<string, string> = {
      ae: "United Arab Emirates",
      us: "United States",
      uk: "United Kingdom",
      in: "India",
      ph: "Philippines",
      pk: "Pakistan",
      other: "Other"
    };
    
    return nationalityMap[code] || code;
  };
  
  // Function to get area display name
  const getAreaDisplay = (code: string) => {
    const areaMap: Record<string, string> = {
      dubai: "Dubai",
      "abu-dhabi": "Abu Dhabi",
      sharjah: "Sharjah",
      ajman: "Ajman",
      fujairah: "Fujairah",
      "ras-al-khaimah": "Ras Al Khaimah",
      "umm-al-quwain": "Umm Al Quwain",
      other: "Other"
    };
    
    return areaMap[code] || code;
  };

  return (
    <div id="promoter-profile" className="bg-gray-50 rounded-lg p-8 mx-auto max-w-3xl">
      {/* Profile Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {promoter.firstName} {promoter.lastName}
        </h2>
        <p className="text-lg text-gray-600">Professional Promoter</p>
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mt-2">
          <Flag className="h-4 w-4 mr-1" />
          {getNationalityDisplay(promoter.nationality)}
        </div>
      </div>
      
      {/* Photos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <div key={index} className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden bg-gray-200">
              <img 
                src={photo.fileData} 
                alt={`${promoter.firstName} ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))
        ) : (
          // Placeholders if no photos are available
          Array(3).fill(0).map((_, index) => (
            <div key={index} className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
              <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          ))
        )}
      </div>
      
      {/* Profile Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Professional Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Profile</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <Briefcase className="h-5 w-5 text-primary-600 mr-2" />
              <p className="text-gray-700">
                <span className="font-medium">Experience:</span> {promoter.yearsExperience ? `${promoter.yearsExperience} years` : 'N/A'}
              </p>
            </div>
            <div className="flex items-center">
              <Ruler className="h-5 w-5 text-primary-600 mr-2" />
              <p className="text-gray-700">
                <span className="font-medium">Height:</span> {promoter.height ? `${promoter.height} cm` : 'N/A'}
              </p>
            </div>
            <div className="flex items-center">
              <Layers className="h-5 w-5 text-primary-600 mr-2" />
              <p className="text-gray-700">
                <span className="font-medium">Sizes:</span> {promoter.tShirtSize ? promoter.tShirtSize.toString().toUpperCase() : 'N/A'} (T-Shirt), {promoter.shirtSize ? promoter.shirtSize.toString().toUpperCase() : 'N/A'} (Shirt)
              </p>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-primary-600 mr-2" />
              <p className="text-gray-700">
                <span className="font-medium">Area:</span> {getAreaDisplay(promoter.area)}
              </p>
            </div>
          </div>
        </div>
        
        {/* Brands and Languages */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Brands Worked With</h3>
          <div className="flex flex-wrap gap-2">
            {getBrands().length > 0 ? (
              getBrands().map((brand, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1 bg-gray-100 text-gray-800 hover:bg-gray-200">
                  {brand}
                </Badge>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No brands specified</p>
            )}
          </div>
          
          {/* Add some mock languages based on nationality for the presentation */}
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Languages</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="px-3 py-1 bg-gray-100 text-gray-800 hover:bg-gray-200">
              English (Fluent)
            </Badge>
            {promoter.nationality === 'ae' && (
              <Badge variant="outline" className="px-3 py-1 bg-gray-100 text-gray-800 hover:bg-gray-200">
                Arabic (Native)
              </Badge>
            )}
            {promoter.nationality === 'in' && (
              <Badge variant="outline" className="px-3 py-1 bg-gray-100 text-gray-800 hover:bg-gray-200">
                Hindi (Native)
              </Badge>
            )}
          </div>
        </div>
      </div>
      
      {/* Experience Summary */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Experience Summary</h3>
        <p className="text-gray-700">
          {promoter.previousExperience ? promoter.previousExperience : (
            `${promoter.firstName} has ${promoter.yearsExperience || 'several'} years of experience as a professional promoter. ${
              promoter.brandsWorkedFor ? `They have worked with brands such as ${promoter.brandsWorkedFor}.` : ''
            } ${promoter.firstName} is based in ${getAreaDisplay(promoter.area)} and is available for promotional activities.`
          )}
        </p>
      </div>
      
      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-500">
          Promoter ID: {promoter.uniqueId} • Available for bookings • Contact: {promoter.mobileNumber}
        </p>
        <div className="flex items-center justify-center mt-4">
          <div className="bg-primary-600 text-white text-sm font-medium px-4 py-1 rounded">
            PromoterPro
          </div>
        </div>
      </div>
    </div>
  );
}
