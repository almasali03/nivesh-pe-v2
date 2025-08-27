import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "ममता शर्मा",
      role: "गृहिणी",
      location: "लखनऊ",
      message: "घर के खर्चों से बचा के, रोज़ पचास रुपये NiveshPe में डालती हूँ। अब तक 15 हज़ार जमा हो गए हैं। जब बेटी की फीस भरनी थी, तुरंत पैसे मिल गए। बहुत अच्छा लगा!",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    },
    {
      name: "राम प्रसाद",
      role: "किराना दुकानदार",
      location: "वाराणसी",
      message: "दुकान बंद होने के बाद, बचे पैसे रोज NiveshPe में डाल देता हूँ। Bank में जाने की जरूरत नहीं, घर बैठे सब हो जाता है। अब मेरे पास emergency fund भी है।",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    },
    {
      name: "श्रुति सिंह",
      role: "जॉब वर्कर",
      location: "इंदौर",
      message: "Bank waale forms mushkil lagte the, idhar रोज़ थोड़ा डालो, जरुरत में तुरन्त paisa मिल जाता है। App भी बहुत simple है, मैं अपनी सहेलियों को भी recommend करती हूँ।",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Stories from <span className="text-blue-600">Real People</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how NiveshPe is helping everyday Indians build their savings and achieve their dreams
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Message */}
              <blockquote className="text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].message}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                />
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-blue-600 font-medium">{testimonials[currentIndex].role}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Preview */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`bg-white p-6 rounded-xl shadow-lg cursor-pointer transition-all hover:shadow-xl ${
                index === currentIndex ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm line-clamp-3">
                {testimonial.message.substring(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;