import React from 'react';
import { MessageCircle, Mail, Phone, MapPin, Shield, Award, CheckCircle } from 'lucide-react';

const Contact = () => {
  const trustBadges = [
    {
      name: "HDFC Mutual Fund",
      logo: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100",
      description: "Trusted Fund Partner"
    },
    {
      name: "ICICI Mutual Fund", 
      logo: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100",
      description: "Trusted Fund Partner"
    },
    {
      name: "Kotak Mutual Fund",
      logo: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=100", 
      description: "Trusted Fund Partner"
    }
  ];

  const trustFeatures = [
    {
      icon: Shield,
      title: "AMFI Registered",
      description: "Registered mutual fund distributor"
    },
    {
      icon: Award,
      title: "Regulatory Compliance",
      description: "Full compliance with SEBI guidelines"
    },
    {
      icon: CheckCircle,
      title: "100% Transparency",
      description: "No hidden charges, complete clarity"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Humse baat karo - hum yahan hain aapki financial journey mein help karne ke liye
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <MessageCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp Support</h4>
                    <a href="https://wa.me/919203355033" className="text-green-600 hover:text-green-700">
                      +91-9203355033
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Support</h4>
                    <a href="mailto:support@niveshpe.in" className="text-blue-600 hover:text-blue-700">
                      support@niveshpe.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Phone className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone Support</h4>
                    <a href="tel:+919203355033" className="text-purple-600 hover:text-purple-700">
                      +91-9203355033
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Company</h4>
                    <p className="text-gray-600">Evergrow Technologies Private Limited</p>
                    <p className="text-gray-500 text-sm mt-1">Registered in India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Features */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Trust NiveshPe?</h3>
              <div className="space-y-3">
                {trustFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <feature.icon className="text-green-600" size={16} />
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">{feature.title}</span>
                      <span className="text-gray-600 ml-2">- {feature.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Trusted Fund Partners
            </h3>
            
            <div className="text-center mb-8">
              <p className="text-gray-700 leading-relaxed">
                <strong>Funds are invested only in schemes of leading mutual fund houses:</strong>
                <br />
                HDFC, ICICI, and Kotak
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Registered mutual fund distributor (AMFI-ARN)
              </p>
            </div>

            {/* Partner Badges */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {trustBadges.map((partner, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-12 h-12 object-contain rounded-lg"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">{partner.name}</h4>
                  <p className="text-xs text-gray-600 mt-1">{partner.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">Ready to start your savings journey?</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/919203355033"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>Start on WhatsApp</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span>Download App</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;