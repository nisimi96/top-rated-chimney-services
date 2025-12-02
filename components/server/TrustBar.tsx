import React from 'react';
import { Award, Shield, Star, Users } from 'lucide-react';

const TrustBar: React.FC = () => {
  const trustItems = [
    { icon: Award, title: 'Top Rated', subtitle: '5-Star Reputation' },
    { icon: Shield, title: 'Insured', subtitle: 'Full Liability Coverage' },
    { icon: Users, title: 'Atlanta Based', subtitle: 'Local Expert Team' },
    { icon: Star, title: 'Guaranteed', subtitle: '100% Satisfaction' },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-100" aria-label="Why choose us">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
                role="region"
                aria-label={`${item.title}: ${item.subtitle}`}
              >
                <IconComponent
                  size={40}
                  className="text-brand-red mb-3"
                  aria-hidden="true"
                />
                <h3 className="font-bold text-lg text-brand-black">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
