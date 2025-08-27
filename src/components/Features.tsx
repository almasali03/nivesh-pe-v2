import React from 'react';
import { Target, Pause, Gift, Smartphone, CreditCard, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Target,
      title: "Goal-Based Pots",
      description: "Set & track festival, family, or emergency goals",
      details: [
        "Create multiple savings goals",
        "Track progress visually",
        "Festival & emergency funds",
        "Family milestone planning"
      ],
      image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Pause,
      title: "Flexible Savings",
      description: "Pause week, smart retries for failed auto-debits",
      details: [
        "Pause anytime without penalty",
        "Smart retry for failed payments",
        "Flexible amount adjustments",
        "No pressure, your pace"
      ],
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: Gift,
      title: "Referral Rewards",
      description: "Simple referral for double rewards",
      details: [
        "Earn for every referral",
        "Double rewards program",
        "Share with family & friends",
        "Build savings community"
      ],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const additionalFeatures = [
    {
      icon: Smartphone,
      title: "Simple Mobile App",
      description: "Easy-to-use interface in Hindi & English"
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description: "UPI, Net Banking, Debit Card - choose what's convenient"
    },
    {
      icon: TrendingUp,
      title: "Real-time Tracking",
      description: "Watch your savings grow with live updates"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful <span className="text-blue-600">Features</span> for Smart Saving
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build a strong savings habit and achieve your financial goals
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-blue-600 font-medium">{feature.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <p className="text-gray-700">{detail}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Learn more about this feature
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">More Features You'll Love</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;