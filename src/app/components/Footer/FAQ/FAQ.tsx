"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/animations/FadeUp";
export default function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const faqs = [
    {
      id: 1,
      question: "What type of projects do you work on?",
      answer:
        "I work on a variety of projects including web development, mobile applications, and software solutions. My expertise lies in both B2C and B2B applications, with a focus on creating intuitive and effective user experiences.",
    },
    {
      id: 2,
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in frontend technologies like HTML, CSS, Javascript and React. On the backend, I work with Node.js, Express, and MongoDB.",
    },
    {
      id: 3,
      question: "Can you describe your design process?",
      answer:
        "My design process involves initial research and brainstorming, creating wireframes and prototypes, user testing, and iterative design improvements. I focus on user-centered design principles to ensure the end product is both functional and user-friendly.",
    },
    {
      id: 4,
      question: "How do you ensure the quality of your code?",
      answer:
        "I ensure code quality through rigorous testing, code reviews, and adherence to best practices. I use automated testing tools and maintain clean, readable, and maintainable code.",
    },
    {
      id: 5,
      question:
        "Do you provide maintenance and support after project completion?",
      answer:
        "Yes, I offer ongoing maintenance and support services to ensure your project runs smoothly after launch. This includes bug fixes, updates, and any additional enhancements needed.",
    },
    {
      id: 6,
      question: "What is your approach to project management?",
      answer:
        "I follow agile project management methodologies, which involve breaking down the project into manageable sprints and delivering iterative improvements. This allows for flexibility and continuous feedback from stakeholders.",
    },
    {
      id: 7,
      question: "How do you handle project timelines and deadlines?",
      answer:
        "I set realistic timelines and deadlines based on the project scope and complexity. Regular updates and communication with clients help ensure that the project stays on track and any potential delays are addressed promptly.",
    },
    {
      id: 8,
      question: "Can you work with existing projects and codebases?",
      answer:
        "Yes, I have experience working with existing projects and codebases. I can help refactor, optimize, and enhance your current application while ensuring minimal disruption to your ongoing operations.",
    },
  ];
  const toggleActive = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };
  return (
    <section className="grid gap-10 lg:grid-cols-2">
      {faqs.map((faq) => (
        <FadeUp key={faq.id} tag="div" className="border-b border-[#666] pb-5">
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
        </FadeUp>
      ))}
    </section>
  );
}