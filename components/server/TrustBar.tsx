import React from 'react';
import { Award, Shield, Star, Users } from 'lucide-react';

const TrustBar: React.FC = () => {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <Award size={40} className="text-brand-red mb-3" />
            <h4 className="font-bold text-lg text-brand-black">Top Rated</h4>
            <p className="text-sm text-gray-500">5-Star Reputation</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield size={40} className="text-brand-red mb-3" />
            <h4 className="font-bold text-lg text-brand-black">Insured</h4>
            <p className="text-sm text-gray-500">Full Liability Coverage</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users size={40} className="text-brand-red mb-3" />
            <h4 className="font-bold text-lg text-brand-black">Atlanta Based</h4>
            <p className="text-sm text-gray-500">Local Expert Team</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Star size={40} className="text-brand-red mb-3" />
            <h4 className="font-bold text-lg text-brand-black">Guaranteed</h4>
            <p className="text-sm text-gray-500">100% Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
