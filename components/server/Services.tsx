import Link from 'next/link';
import { Search, Flame, Hammer, Wind, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { ServiceItem } from '@/lib/types';
import { COMPANY_INFO } from '@/lib/constants';

const services: ServiceItem[] = [
  {
    id: 'sweep',
    title: 'Chimney Sweeping',
    description: 'Remove dangerous creosote buildup and soot to prevent chimney fires. Deep cleaning for maximum safety.',
    icon: Wind,
    link: '/services/chimney-sweeping/',
  },
  {
    id: 'inspection',
    title: 'Safety Inspections',
    description: 'Level 1, 2, & 3 inspections using advanced camera technology to find hidden cracks and hazards.',
    icon: Search,
    link: '/services/chimney-inspection/',
  },
  {
    id: 'repair',
    title: 'Chimney Repairs',
    description: 'Masonry repair, crown rebuilding, and flue liner restoration. We fix leaks and structural damage.',
    icon: Hammer,
    link: '/services/chimney-repair/',
  },
  {
    id: 'caps',
    title: 'Cap Installation',
    description: 'Keep animals, debris, and rain out of your chimney with a high-quality stainless steel cap.',
    icon: CheckCircle2,
    link: '/services/cap-installation/',
  },
  {
    id: 'logs',
    title: 'Gas Logs & Fireplaces',
    description: 'Installation and servicing of gas log sets. Enjoy a cozy fire with the flip of a switch.',
    icon: Flame,
    link: '/services/gas-logs/',
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-black text-3xl md:text-5xl font-extrabold mb-4">
            Our Premium Services
          </h2>
          <p className="text-gray-600 text-lg">
            We provide comprehensive chimney care to ensure your fireplace is efficient, functional, and most importantly, <span className="font-bold text-brand-red">safe</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              href={service.link}
              key={service.id}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-red group flex flex-col"
            >
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors duration-300">
                <service.icon
                  size={32}
                  className="text-brand-red group-hover:text-white transition-colors duration-300"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
              <div className="text-brand-red font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Learn More{' '}
                <ArrowRight size={16} aria-hidden="true" />
              </div>
            </Link>
          ))}

          {/* Call to Action Card in Grid */}
          <div className="bg-brand-black rounded-xl p-8 shadow-md flex flex-col justify-center items-center text-center border-b-4 border-brand-red hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Need Something Else?</h3>
            <p className="text-gray-300 mb-8">We handle all chimney and fireplace related needs.</p>
            <a
              href={`tel:${COMPANY_INFO.phoneTel}`}
              className="w-full bg-brand-red text-white py-4 rounded-lg font-bold hover:bg-white hover:text-brand-red transition-colors shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              <span>Call an Expert</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
