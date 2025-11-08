import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";

const faqs = [
  {
    question: "What services does WeQode Technologies offer?",
    answer:
      "We specialize in web design, app development, branding, and digital marketing, delivering scalable and user-focused solutions.",
  },
  {
    question: "How long does it take to complete a website project?",
    answer:
      "Project timelines vary based on complexity and requirements, but typically range from 4–8 weeks.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we provide 1–3 months of complimentary support after launch to ensure everything runs smoothly.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We collaborate with clients across diverse industries including technology, education, healthcare, real estate, and e-commerce.",
  },
  {
    question: "What platforms and technologies do you use?",
    answer:
      "Our team works with modern technologies such as React, Node.js, WordPress, Laravel, Flutter, and more — ensuring scalable, fast, and secure digital products.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* ================= HERO STATS SECTION ================= */}
      <section className="bg-[hsl(var(--brand-purple))] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-4">
          Built on Your Success
        </h2>
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-[22px] font-medium leading-relaxed mb-12 mt-6">
          Driven by a passionate team of creative minds, we blend diverse
          expertise with a wide array of services to turn complex challenges
          into 100% client success stories.
        </p>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          {[
            { number: "20+", label: "Industries Served" },
            { number: "30+", label: "Creative Minds" },
            { number: "7+", label: "Unique Services" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <h3 className="text-[32px] sm:text-[42px] md:text-[48px] lg:text-[64px] font-bold text-[hsl(var(--brand-orange))]">
                {item.number}
              </h3>
              <p className="text-xs sm:text-base md:text-lg lg:text-[20px] font-semibold">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <div className="container mx-auto px-4 sm:px-6 mt-16 sm:mt-20 md:mt-28 mb-20">
        {/* FAQ HEADING */}
        <div className="relative text-center lg:text-left">
          <div className="text-[48px] sm:text-[72px] md:text-[96px] lg:text-[128px] font-black text-[#E5E5E5] leading-none mb-[-40px] sm:mb-[-20px] md:mb-[-45px] lg:mb-[-50px] select-none">
            FAQ
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold mb-4 sm:mb-6"
            style={{ color: "hsl(var(--brand-orange))" }}
          >
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-[20px] text-[#444] max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-12">
            Find quick answers to common questions about our services and
            processes.
          </p>
        </div>

        {/* FAQ ITEMS */}
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#FFF8F3] rounded-xl p-4 sm:p-6 md:p-8 shadow-sm border border-[#f3e8df] transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold text-[#1A1A1A]">
                  {faq.question}
                </h3>
                <span className="text-[#1A1A1A] text-2xl sm:text-3xl transition-all">
                  {openIndex === index ? <FiX /> : <FiPlus />}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-3 sm:mt-4 text-[#333333] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
