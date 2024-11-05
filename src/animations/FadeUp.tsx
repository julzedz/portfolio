import { motion } from "framer-motion";
import { ReactNode } from "react";
type Props = {
  tag: "h1" | "h2" | "h3" | "h4" | "p" | "div";
  children: ReactNode;
  className?: string;
};
export default function FadeUp({ tag, children, className }: Props) {
  const MotionTag = motion[tag];
  return (
    <MotionTag
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}