"use client";
import { useState } from "react";
import { NavBar } from "@/src/components/NavBar";

const faqs = [
  {
    question: "How do I apply to the university?",
    answer:
      "You can apply online through our admissions portal. Visit the Admissions page for detailed instructions and requirements.",
  },
  {
    question: "What programs are offered?",
    answer:
      "We offer a wide range of undergraduate and graduate programs across engineering, IT, social sciences, health, and more. See the Departments page for a full list.",
  },
  {
    question: "Is there on-campus housing?",
    answer:
      "Yes, we provide on-campus housing for both local and international students. Early application is recommended as spaces are limited.",
  },
  {
    question: "How can I contact the university?",
    answer:
      "You can reach us via the Contact page, by phone, or by email. Our staff are happy to assist you with any inquiries.",
  },
  {
    question: "Are there student clubs and activities?",
    answer:
      "Absolutely! We have a vibrant student life with many clubs, sports, and cultural activities. Check out the Clubs page for more info.",
  },
];

export default function QAPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div>
      <NavBar />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about admissions, programs, campus
            life, and more.
          </p>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6">
              <button
                className="w-full flex justify-between items-center text-left text-xl font-semibold text-blue-800 focus:outline-none"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-${idx}`}
              >
                {faq.question}
                <span className="ml-4 text-2xl">
                  {openIndex === idx ? "-" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <div
                  id={`faq-${idx}`}
                  className="mt-4 text-gray-700 text-base border-t pt-4"
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
