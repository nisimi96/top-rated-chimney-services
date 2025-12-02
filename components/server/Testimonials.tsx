import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Sarah Mitchell',
    location: 'Marietta, GA',
    text: 'Top Rated Chimney Services came out on short notice and did an excellent job. They found a crack in my flue that could have been dangerous. Professional, courteous, and very knowledgeable. Highly recommend!',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'James Rodriguez',
    location: 'Sandy Springs, GA',
    text: 'Been using them for 3 years now for annual inspections and maintenance. The team is always punctual and thorough. They caught a bird nest before it became a problem. Great service at a fair price.',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Patricia Johnson',
    location: 'Roswell, GA',
    text: 'Had a chimney leak that was damaging my ceiling. Called Top Rated Chimney and they diagnosed the issue immediately. The repair was done professionally and the leak is completely gone. Very satisfied!',
    rating: 5,
  },
  {
    id: 'testimonial-4',
    name: 'Michael Chen',
    location: 'Alpharetta, GA',
    text: 'Got the chimney cap installation done last month. The team was clean, efficient, and explained everything they were doing. My home is much better protected from animals and weather now. Worth every penny!',
    rating: 5,
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {[...Array(rating)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className="fill-yellow-400 text-yellow-400"
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-black text-3xl md:text-5xl font-extrabold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by homeowners across Metro Atlanta for quality service and reliable expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-8 shadow-md border-l-4 border-brand-red hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-brand-black">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
