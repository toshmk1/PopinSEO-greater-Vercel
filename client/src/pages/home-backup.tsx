import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import stage1 from "@/images/stage 1.jpg";
import stage2 from "@/images/stage 2.jpg";
import stage3 from "@/images/stage 3.jpg";

const HeroSection = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [textRevealed, setTextRevealed] = useState(false);

  useEffect(() => {
    // Start the animation after component mounts
    const timer1 = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);

    // Complete the reveal after animation
    const timer2 = setTimeout(() => {
      setTextRevealed(true);
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8 snap-section">
      <div className="text-center max-w-4xl mx-auto">
        {/* Brand Name with Letter Reveal Animation */}
        <div className="mb-8 sm:mb-12 brand-container">
          <h1 className="font-league text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black tracking-wider">
            <span className={`brand-text ${animationStarted ? 'animate' : ''} ${textRevealed ? 'revealed' : ''}`}>
              POPPIN
            </span>
          </h1>
        </div>
        
        {/* Main Headline */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-league font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          OnlyFans SEO? We Own It.
        </motion.h2>
        
        {/* Subheadline */}
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 0.8 }}
        >
          We get your agency to the top of search results. More creators apply to you, more fans find your models. All with zero ads.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div 
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.8 }}
        >
          <Button className="bg-golden text-black font-semibold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-xl hover:bg-golden/90 transition-all duration-300 shadow-lg hover:shadow-golden/20 border-2 border-golden/20 hover:border-golden w-full sm:w-auto max-w-sm">
            Start Your Takeover
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <HeroSection />
    </div>
  );
}