import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

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
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 lg:px-8">
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
        
        {/* Sub-headline */}
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
        >
          Start getting free creator and fan traffic for your agency
        </motion.p>
        
        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 0.8 }}
        >
          <Button 
            size="lg"
            className="bg-golden text-black font-semibold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-lg hover:bg-golden/90 transition-all duration-300 transform hover:scale-105"
          >
            Chat with Our Manager
          </Button>
        </motion.div>
        
        {/* Trust Bar */}
        <motion.div 
          className="mt-12 sm:mt-16 text-sm sm:text-base text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 0.8 }}
        >
          <p>Powered by Pippin Club • 2+ Years of OnlyFans SEO Experience</p>
        </motion.div>
      </div>
    </section>
  );
};

const StepCard = ({ 
  step, 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  reverse = false 
}: {
  step: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ y, opacity }}
      className="parallax-container mb-24 sm:mb-32"
    >
      <div className={`grid lg:grid-cols-2 gap-12 sm:gap-16 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
        <motion.div 
          className={reverse ? 'lg:col-start-2' : ''}
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 50 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={imageSrc}
            alt={imageAlt}
            className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            style={{ aspectRatio: '16/10' }}
          />
        </motion.div>
        
        <motion.div 
          className={`${reverse ? 'lg:col-start-1 lg:text-right' : 'lg:text-left'} text-left`}
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? -50 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-card/50 p-8 sm:p-12 rounded-2xl backdrop-blur-sm border border-border">
            <h3 className="font-league text-3xl sm:text-4xl md:text-5xl font-bold text-golden mb-6">
              {title}
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const steps = [
    {
      title: "The Basics",
      description: "Your agency relies on recruiters and social media to attract both fans and creators. It works—but it's manual, time-consuming, and not built to scale.",
      imageSrc: "/src/images/stage1.svg",
      imageAlt: "Stage 1: Basic agency operations with house and few girls"
    },
    {
      title: "This Is Where We Step In",
      description: "After our initial SEO work, you start getting organic creator applications. Your agency gains social proof, and creators start to notice. You're no longer chasing—you're being found.",
      imageSrc: "/src/images/stage2.svg",
      imageAlt: "Stage 2: Mansion with pool and queue of girls wanting to join"
    },
    {
      title: "Scale on Autopilot",
      description: "Creators are lining up to join, and you have passive fan traffic flowing to every girl on your roster. You've built a system that grows itself.",
      imageSrc: "/src/images/stage3.svg",
      imageAlt: "Stage 3: Fans in queue to girls, automated scaling system"
    }
  ];

  return (
    <section ref={ref} className="min-h-screen py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20 sm:mb-32"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-league text-4xl sm:text-5xl md:text-6xl font-bold text-golden mb-6">
            How It Works
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            From basic agency operations to scaled autopilot growth
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={index + 1}
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
              imageAlt={step.imageAlt}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <HeroSection />
      <HowItWorksSection />
    </div>
  );
}
