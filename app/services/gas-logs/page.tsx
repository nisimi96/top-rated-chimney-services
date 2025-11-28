import type { Metadata } from 'next';
import PageHero from '@/components/server/PageHero';
import Location from '@/components/server/Location';
import { Phone, Flame, Wrench, Thermometer, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Gas Log Installation & Repair | Marietta GA | Vented & Vent-Free',
  description: 'Professional gas log installation and service. Enjoy a cozy fire with the flip of a switch.',
  alternates: {
    canonical: 'https://topratedchimney.com/services/gas-logs/',
  },
};

export default function GasLogs() {
  return (
    <>
      <PageHero
        title="Gas Logs & Fireplaces"
        subtitle="Installation, repair, and safety services for vented and vent-free gas log sets."
        bgImage="/images/placeholder.jpg"
      />

      <section className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 lg:mb-24">
            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-black mb-6 lg:mb-8 leading-tight">
                Gas Log Installation & Service in Marietta, GA
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                Enjoy the warmth and ambiance of a fire with the simple flip of a switch. At {COMPANY_INFO.name}, we specialize in the installation and maintenance of premium gas log sets for homeowners across the Greater Atlanta area.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 lg:mb-12 leading-relaxed">
                Whether you want to convert an old wood-burning hearth to a convenient gas system or need service for your existing unit, our certified technicians ensure your system is operating efficiently and, most importantly, safely.
              </p>

              {/* Service Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-16 lg:mb-24">
                <div className="bg-gray-50 p-6 lg:p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-red-100 w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-4 lg:mb-6">
                    <Flame className="text-brand-red" size={28} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-brand-black mb-3 lg:mb-4">New Installations</h3>
                  <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                    We install top-quality Vented and Vent-Free gas log sets. We handle the gas line connection, burner placement, and ember bed styling for a realistic look.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 lg:p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-4 lg:mb-6">
                    <Wrench className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-brand-black mb-3 lg:mb-4">Repair & Maintenance</h3>
                  <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                    Pilot light won't stay lit? Soot building up on the logs? We clean burners, replace thermocouples, and troubleshoot ignition issues.
                  </p>
                </div>
              </div>

              {/* Vented vs Vent-Free */}
              <h3 className="text-2xl lg:text-3xl font-bold text-brand-black mb-10 lg:mb-14">Which Option is Right for You?</h3>
              <div className="space-y-6 lg:space-y-8 mb-16 lg:mb-24">
                <div className="bg-white border-l-4 lg:border-l-8 border-brand-red p-6 lg:p-8 shadow-sm rounded-r-lg">
                  <h4 className="text-lg lg:text-2xl font-bold text-brand-black mb-3 lg:mb-4">Vented Gas Logs</h4>
                  <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4"><strong>Best for:</strong> Aesthetics and realism.</p>
                  <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                    Vented logs require a fully functional chimney flue (damper open). They produce a massive, realistic yellow flame that looks just like a wood fire but provide less radiant heat into the room.
                  </p>
                </div>

                <div className="bg-white border-l-4 lg:border-l-8 border-brand-black p-6 lg:p-8 shadow-sm rounded-r-lg">
                  <h4 className="text-lg lg:text-2xl font-bold text-brand-black mb-3 lg:mb-4">Vent-Free (Ventless) Logs</h4>
                  <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4"><strong>Best for:</strong> Heating efficiency.</p>
                  <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                    These units burn extremely clean and can be operated with the damper closed (or in a firebox without a chimney). They direct 99% of the heat into the room, making them an excellent backup heat source.
                  </p>
                </div>
              </div>

              {/* Safety Section */}
              <div className="bg-brand-black text-white p-8 lg:p-10 rounded-xl lg:rounded-2xl">
                <div className="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
                  <AlertTriangle className="text-brand-red shrink-0" size={36} />
                  <h3 className="text-2xl lg:text-3xl font-bold">Gas Fireplace Safety Checks</h3>
                </div>
                <p className="text-base lg:text-lg text-gray-300 mb-6 lg:mb-8 leading-relaxed">
                  Gas appliances require respect. An improperly functioning unit can leak gas or carbon monoxide into your home. Our safety service includes:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div className="flex items-center gap-3 lg:gap-4">
                    <CheckCircle2 className="text-brand-red shrink-0" size={22} />
                    <span className="text-base lg:text-lg text-gray-300">Gas leak detection</span>
                  </div>
                  <div className="flex items-center gap-3 lg:gap-4">
                    <CheckCircle2 className="text-brand-red shrink-0" size={22} />
                    <span className="text-base lg:text-lg text-gray-300">Pilot light assembly check</span>
                  </div>
                  <div className="flex items-center gap-3 lg:gap-4">
                    <CheckCircle2 className="text-brand-red shrink-0" size={22} />
                    <span className="text-base lg:text-lg text-gray-300">Burner port cleaning</span>
                  </div>
                  <div className="flex items-center gap-3 lg:gap-4">
                    <CheckCircle2 className="text-brand-red shrink-0" size={22} />
                    <span className="text-base lg:text-lg text-gray-300">Carbon monoxide testing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white border-2 lg:border-4 border-brand-red rounded-xl lg:rounded-2xl shadow-lg lg:shadow-2xl p-6 lg:p-10 sticky top-20 lg:top-24">
                <div className="flex justify-center mb-4 lg:mb-6">
                  <Thermometer size={52} className="text-brand-red" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-brand-black mb-4 lg:mb-6 text-center">Get Cozy Today</h3>
                <p className="text-sm lg:text-base text-gray-600 text-center mb-6 lg:mb-8 leading-relaxed">
                  Ready to upgrade your fireplace? Schedule a consultation for a new log set installation.
                </p>

                <a
                  href={`tel:${COMPANY_INFO.phoneTel}`}
                  className="flex items-center justify-center gap-2 lg:gap-3 bg-brand-red text-white px-6 lg:px-8 py-4 lg:py-5 rounded-lg lg:rounded-xl font-bold text-base lg:text-lg hover:bg-red-700 active:scale-95 transition-all w-full mb-4 lg:mb-6 shadow-md hover:shadow-lg"
                >
                  <Phone size={24} />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
                <p className="text-xs lg:text-sm text-gray-500 text-center leading-relaxed mb-6 lg:mb-8">
                  Service for all major brands.
                </p>

                <div className="pt-6 lg:pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-brand-black mb-4 lg:mb-5 text-center text-sm lg:text-base">Common Issues We Fix:</h4>
                  <ul className="text-sm lg:text-base text-gray-700 space-y-2 lg:space-y-3">
                    <li className="flex justify-between items-center border-b border-gray-200 pb-2 lg:pb-3">
                      <span>Pilot light won't stay on</span>
                      <span className="text-brand-red font-bold ml-2">✓</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-200 pb-2 lg:pb-3">
                      <span>Soot on logs</span>
                      <span className="text-brand-red font-bold ml-2">✓</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-200 pb-2 lg:pb-3">
                      <span>Strange odors</span>
                      <span className="text-brand-red font-bold ml-2">✓</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Remote not working</span>
                      <span className="text-brand-red font-bold ml-2">✓</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Location />
    </>
  );
}
