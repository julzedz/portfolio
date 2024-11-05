"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const faqs = [
    {
      id: 1,
      question: "What type of projects do you work on?",
      answer:
        "I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding.",
    },
    {
      id: 2,
      question: "What is your design process?",
      answer:
        "I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding.",
    },
    {
      id: 3,
      question: "What is your design process?",
      answer:
        "I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding.",
    },
    {
      id: 3,
      question: "What is your design process?",
      answer:
        "I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding.",
    },
    {
      id: 3,
      question: "What is your design process?",
      answer:
        "I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding.",
    },
    {
      id: 3,
      question: "What is your design process?",
      answer:
        "I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding.",
    },
    {
      id: 3,
      question: "What is your design process?",
      answer:
        "I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding.",
    },
    {
      id: 3,
      question: "What is your design process?",
      answer:
        "I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding.",
    },
  ];
  const toggleActive = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };
  return (
    <section className="grid gap-10 lg:grid-cols-2">
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-[#666] pb-5">
          <div
            className="flex cursor-pointer items-center justify-between pb-5"
            onClick={() => toggleActive(faq.id)}
          >
            <p className="text-xl text-white md:text-2xl">{faq.question}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              className={`bi bi-chevron-down transition-transform duration-300 ${activeId === faq.id ? "rotate-180" : ""}`}
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
          <AnimatePresence initial={false}>
            {activeId === faq.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[17px] text-[#666] md:text-[18px]">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
}