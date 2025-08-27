import React from 'react';
import { PiggyBank, Zap, Shield, Users } from 'lucide-react';

const WhyNiveshPe = () => {
  const features = [
    {
      icon: PiggyBank,
      title: "Daily Savings Habit",
      description: "Roz ₹50 bachaao, sapney poore karo",
      detail: "Build a consistent saving habit with as little as ₹50 per day. Small amounts, big dreams!",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Instant Liquidity",
      description: "Paise kabhi bhi nikaalo, cash jaisa withdrawal",
      detail: "Access your money instantly whenever you need it. No waiting periods, no penalties.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "100% Transparency & Trust",
      description: "Funds invested with HDFC, ICICI, Kotak mutual funds",
      detail: "Your money is invested only in top-rated mutual fund schemes from India's most trusted fund houses.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Made for Bharat",
      description: "Designed for everyday Indians",
      detail: "Simple, Hindi-friendly interface built specifically for micro-merchants, housewives, and gig workers.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="why-niveshpe" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">NiveshPe</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India's most trusted micro-savings platform designed for everyday savers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white" size={28} />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-blue-600 font-medium text-sm">
                  {feature.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {feature.detail}
                </p>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Happy Savers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">₹10Cr+</div>
              <div className="text-blue-100">Total Savings</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">6-7%</div>
              <div className="text-blue-100">Annual Returns*</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNiveshPe;