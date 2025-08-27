import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Wallet, TrendingUp, Shield, CreditCard, Building } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: Wallet,
      question: "NiveshPe par minimum kitna bacha sakte hai?",
      answer: "Aap sirf ₹50 daily se shuru kar sakte hain! Koi maximum limit nahi hai. Jitna comfortable feel karo, utna save karo. Flexibility hamara main feature hai."
    },
    {
      icon: TrendingUp,
      question: "Withdrawal process kya hai? Kitni jaldi paise mil jaate hain?",
      answer: "Bilkul instant! T+0 ya T+1 basis par aapke bank account mein paise aa jaate hain. Koi waiting period nahi, koi penalty nahi. Jab chahiye, tab nikaalo."
    },
    {
      icon: CreditCard,
      question: "Returns kitne milte hain? Kya guaranteed hai?",
      answer: "Typically 6-7% annual returns milte hain*, lekin yeh mutual fund scheme par depend karta hai. Market risks hain, but liquid funds generally stable hote hain. Guaranteed returns nahi hain."
    },
    {
      icon: Shield,
      question: "KYC zaroori hai kya? Documents kya chahiye?",
      answer: "Haan, KYC zaroori hai but bilkul simple hai. Sirf PAN card aur Aadhaar card chahiye. 5 minute mein complete ho jaata hai. One-time process hai."
    },
    {
      icon: HelpCircle,
      question: "Koi hidden charges hai? Transaction fees?",
      answer: "Bilkul nahi! 100% transparency hai. Koi hidden charges, koi transaction fees nahi. Jo invest karte ho, wahi amount mutual fund mein jaata hai."
    },
    {
      icon: Building,
      question: "Kya yeh bank hai? Paise kahan jaate hain?",
      answer: "Nahi, hum bank nahi hain. Hum registered mutual fund distributor hain (AMFI-ARN). Aapke paise HDFC, ICICI, Kotak ke liquid/overnight mutual fund schemes mein invest hote hain."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aapke saare doubts clear karte hain - simple Hindi mein
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <faq.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="text-blue-600" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={24} />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pl-14">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Humse directly baat karo - hum yahan hain aapki help ke liye
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919203355033"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Support
              </a>
              <a
                href="mailto:support@niveshpe.in"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;