import React from 'react';
import { Download, MessageCircle, Shield, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <TrendingUp size={16} />
                <span>India's Trusted Micro-Savings App</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Chhoti Bachat,</span>
                <br />
                <span className="text-purple-600">Bada Sapna</span>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Roz ₹50 bachaao, kabhi bhi nikaalo – No tension, sirf savings aur growth!
              </p>
            </div>

            {/* Value Proposition */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Choose NiveshPe?</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">Invest as little as <strong>₹50 daily</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">Safe liquid/overnight mutual funds from <strong>HDFC, ICICI, Kotak</strong></p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700"><strong>Withdraw instantly</strong> – no lock-in, no hidden fees</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <Download size={24} />
                <span>Download App</span>
              </a>
              <a
                href="https://wa.me/919203355033"
                className="flex items-center justify-center space-x-3 px-8 py-4 bg-green-500 text-white rounded-xl font-semibold text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
              >
                <MessageCircle size={24} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="text-green-500" size={20} />
                <span className="text-sm text-gray-600">AMFI Registered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="text-blue-500" size={20} />
                <span className="text-sm text-gray-600">Instant Withdrawal</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                {/* Phone Screen Content */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white">
                  <div className="text-center">
                    <h3 className="text-lg font-bold">NiveshPe</h3>
                    <p className="text-sm opacity-90">Daily Savings</p>
                  </div>
                  <div className="mt-6 bg-white/20 rounded-xl p-4">
                    <p className="text-sm opacity-90">Today's Savings</p>
                    <p className="text-2xl font-bold">₹50</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="bg-green-50 p-4 rounded-xl">
                    <p className="text-sm text-green-800 font-medium">Total Saved</p>
                    <p className="text-xl font-bold text-green-900">₹15,250</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-sm text-blue-800 font-medium">Returns Earned</p>
                    <p className="text-xl font-bold text-blue-900">₹892</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-bounce">
              <span className="text-sm font-bold">₹50</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-pulse">
              <TrendingUp size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;