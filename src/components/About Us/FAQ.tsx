import { FileX } from "lucide-react";
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
    <div>
      <section className="bg-[hsl(var(--brand-purple))] text-white py-16 px-4 sm:px-6 lg:px-12 text-center mt-[250px]">
        {/* Title and Description */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold mb-4">
          Built on Your Success
        </h2>
        <p className="max-w-[1180px] mx-auto text-sm sm:text-base md:text-lg  lg:text-[30px] font-medium leading-relaxed text-white mb-12  mt-[30px]">
          Driven by a passionate team of creative minds, we blend diverse
          expertise with a wide array of services to turn complex challenges
          into 100% client success stories.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-[36px] sm:text-[42px] md:text-[48px] lg:text:[80px]  font-bold text-[hsl(var(--brand-orange))]">
              20+
            </h3>
            <p className="text-sm sm:text-base md:text-lg  lg:text-[24px] font-bold">
              Industries Served
            </p>
          </div>
          <div>
            <h3 className="text-[36px] sm:text-[42px] md:text-[48px] lg:text:[80px] font-bold text-[hsl(var(--brand-orange))]">
              30+
            </h3>
            <p className="text-sm sm:text-base md:text-lg  lg:text-[24px] font-bold">
              Creative Minds
            </p>
          </div>
          <div>
            <h3 className="text-[36px] sm:text-[42px] md:text-[48px] lg:text:[80px] font-bold text-[hsl(var(--brand-orange))]">
              7+
            </h3>
            <p className="text-sm sm:text-base md:text-lg  lg:text-[24px] font-bold">
              Unique Services
            </p>
          </div>
          <div>
            <h3 className="text-[36px] sm:text-[42px] md:text-[48px] lg:text:[80px] font-bold text-[hsl(var(--brand-orange))]">
              100%
            </h3>
            <p className="text-sm sm:text-base md:text-lg  lg:text-[24px] font-bold">
              Client Satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Faq */}
      <div className="container mx-auto px-4 sm:px-6 bg-background relative overflow-hidden mt-[250px] ">
        <div className="text-[60px] sm:text-[80px] lg:text-[128px] font-black text-[#E5E5E5] leading-none mb-[-30px] sm:mb-[-40px] lg:mb-[-60px] select-none">
          FAQ
        </div>
        <h2
          className="text-3xl sm:text-4xl lg:text-[60px] font-bold mb-4 sm:mb-6"
          style={{ color: "hsl(var(--brand-orange))" }}
        >
          Frequently Asked Questions
        </h2>
        <p className="text-base sm:text-lg text-regular lg:text-[24px] mb-6 max-w-4xl lg:mt-10 sm:mt-4 ">
          Find quick answers to common questions about our services and
          processes.
        </p>

        <section className=" mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#FFF8F3] rounded-xl p-5 shadow-sm border border-[#f3e8df] transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px]  font-bold text-[#1A1A1A]">
                    {faq.question}
                  </h3>
                  <span className="text-[#1A1A1A] text-2xl transition-all">
                    {openIndex === index ? <FiX /> : <FiPlus />}
                  </span>
                </button>

                {openIndex === index && (
                  <p className="mt-3 text-[#333333] text-[20px] sm:text-[20px] md:text-[22px] lg:text-[24px]     font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default FAQ;
