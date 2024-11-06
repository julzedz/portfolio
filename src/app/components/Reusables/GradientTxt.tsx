import { createElement } from "react";
interface GradientTxtProps {
  tagName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  txt: string;
  className?: string;
}
export default function GradientTxt({
  tagName,
  txt,
  className,
}: GradientTxtProps) {
  return createElement(
    tagName,
    {
      className: `bg-gradient-to-r from-purple-400 via-red-500 bg-clip-text text-transparent to-orange-600 ${className}`,
    },
    txt,
  );
}
