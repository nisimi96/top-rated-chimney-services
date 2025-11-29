'use client';

import React, { useState, useCallback } from 'react';
import { MapPin } from 'lucide-react';

interface City {
  name: string;
  lat: number;
  lng: number;
  description: string;
}

const cities: City[] = [
  {
    name: 'Atlanta',
    lat: 33.7490,
    lng: -84.3880,
    description: 'Our primary service hub and home to our headquarters. We provide expert chimney sweeping, inspections, and repairs throughout Atlanta and surrounding areas.',
  },
  {
    name: 'Marietta',
    lat: 33.9526,
    lng: -84.5535,
    description: 'Neighborhood leader for chimney expertise. We specialize in inspecting and repairing throughout all of Cobb County, from the Square to East Cobb.',
  },
  {
    name: 'Alpharetta',
    lat: 34.0736,
    lng: -84.2942,
    description: 'Serving the Alpharetta and north Atlanta areas. We specialize in inspecting and repairing the diverse mix of modern and estate home chimneys found in Alpharetta.',
  },
  {
    name: 'Roswell',
    lat: 34.0204,
    lng: -84.3627,
    description: 'Fast, reliable service for the growing Roswell community. We handle everything from annual maintenance for homes near the Chattahoochee River to prevent wildlife entry.',
  },
  {
    name: 'Sandy Springs',
    lat: 33.9425,
    lng: -84.3765,
    description: 'Providing comprehensive Level 2 real estate inspections for home buyers and sellers inside and outside the perimeter.',
  },
  {
    name: 'Johns Creek',
    lat: 34.0037,
    lng: -84.2204,
    description: 'Dedicated maintenance for busy homes. We ensure gas logs and masonry fireplaces are operating at peak efficiency and safety.',
  },
  {
    name: 'Woodstock',
    lat: 34.0966,
    lng: -84.5002,
    description: 'Fast, reliable service for the growing Woodstock community. We handle everything from annual maintenance for homes near the Chattahoochee River to prevent wildlife entry.',
  },
  {
    name: 'Dunwoody',
    lat: 33.9491,
    lng: -84.3258,
    description: 'Trusted by Dunwoody homeowners for decades. We identify and fix water leak issues common in the area\'s established brick homes.',
  },
  {
    name: 'Canton',
    lat: 34.2284,
    lng: -84.4718,
    description: 'Extending our expert services to Cherokee County. We provide full safety inspections and soot removal for wood burning stoves and fireplaces.',
  },
  {
    name: 'Smyrna',
    lat: 33.8792,
    lng: -84.5073,
    description: 'From Vikings to the Battery, we are the top rated choice for chimney repairs. Focusing on safety and code compliance.',
  },
  {
    name: 'Dallas',
    lat: 33.7613,
    lng: -84.4474,
    description: 'Comprehensive services for the Dallas community with a focus on maintaining safe and efficient fireplaces.',
  },
  {
    name: 'Peachtree City',
    lat: 33.3871,
    lng: -84.5986,
    description: 'Professional chimney care for the Peachtree City area with emphasis on quality and customer satisfaction.',
  },
];

const InteractiveMap: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<City>(cities[0]);

  const handleCityClick = useCallback((city: City) => {
    setSelectedCity(city);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-brand-black mb-4">
            Atlanta's Expert Chimney Services & Beyond
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Top Rated Chimney Services is proudly based in Atlanta, serving the entire Metro Atlanta area and surrounding communities. We're equipped to travel within a <span className="font-bold">60-mile radius from Atlanta</span> to bring certified chimney safety expertise to your doorstep.
          </p>
          <p className="text-base text-gray-600">
            Whether you're in the heart of Atlanta, the northern suburbs of Alpharetta and Cumming, west towards Dallas, or south towards Peachtree City, our commitment remains the same: Top-Rated service, fair pricing, and absolute safety for your home.
          </p>
        </div>

        {/* Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Static Atlanta Map */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-[500px] relative flex items-center justify-center border-2 border-gray-200 shadow-lg">
              <img
                src="/images/atlanta-map.png"
                alt="Atlanta and surrounding service areas map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Service Info Panel */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-brand-black mb-2">{selectedCity.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{selectedCity.description}</p>
            <div className="text-xs text-gray-500 mb-6">
              <p>Latitude: {selectedCity.lat.toFixed(4)}</p>
              <p>Longitude: {selectedCity.lng.toFixed(4)}</p>
            </div>
            <a
              href={`https://www.google.com/maps/search/${selectedCity.name}+GA/@${selectedCity.lat},${selectedCity.lng},13z`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-red text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-red-700 transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* City Cards Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-brand-black mb-6">Key Cities We Serve</h3>
          <p className="text-gray-600 mb-2">Click any city below to view its location on the map</p>
          <p className="text-gray-600 mb-8">Don't see your town listed? If you are within 60 miles of Atlanta, we've got you covered.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <button
                key={city.name}
                onClick={() => handleCityClick(city)}
                className={`p-6 rounded-lg border-2 transition-all text-left ${
                  selectedCity.name === city.name
                    ? 'border-brand-red bg-red-50'
                    : 'border-gray-200 bg-white hover:border-brand-red hover:bg-red-50'
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="text-brand-red shrink-0 mt-1" size={20} />
                  <h4 className="font-bold text-brand-black text-lg">{city.name}</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {city.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
