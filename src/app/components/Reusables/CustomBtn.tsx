'use client';
import { motion } from 'framer-motion';
interface CustomBtnProps {
  className: string;
  txt: string;
}
export default function CustomBtn({ className, txt }: CustomBtnProps) {
  return (
    <div className={`relative bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 h-[60px] ${className}`}>
      <motion.button initial={{ right: '8px', bottom: '8px' }} whileHover={{ right: 0, bottom: 0 }} className={`text-[18px] absolute font-medium bg-black text-white h-[60px] ${className}`}>
        {txt}
      </motion.button>
    </div>
  );
}