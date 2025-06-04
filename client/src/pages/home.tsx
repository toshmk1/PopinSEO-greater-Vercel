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
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  return (
    <motion.div 
      ref={ref}
      className="relative mb-32 sm:mb-48 group"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ 
        duration: 1, 
        delay: step * 0.2,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
    >
      {/* Step Number */}
      <motion.div 
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ duration: 0.8, delay: step * 0.2 + 0.3 }}
      >
        <div className="w-16 h-16 bg-golden rounded-full flex items-center justify-center shadow-lg border-4 border-black">
          <span className="text-black font-league font-bold text-2xl">{step}</span>
        </div>
      </motion.div>

      <div className={`grid lg:grid-cols-2 gap-16 sm:gap-20 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
        {/* Image Section */}
        <motion.div 
          className={`relative ${reverse ? 'lg:col-start-2' : ''}`}
          style={{ y }}
        >
          <motion.div
            className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-golden/20 transition-all duration-500"
            style={{ scale: imageScale }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              style={{ aspectRatio: '16/10' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
          
          {/* Floating Elements */}
          <motion.div
            className="absolute -top-6 -right-6 w-12 h-12 bg-golden/20 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: step * 0.5
            }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-8 h-8 bg-golden/30 rounded-full blur-lg"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.9, 0.4]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              delay: step * 0.3
            }}
          />
        </motion.div>
        
        {/* Content Section */}
        <motion.div 
          className={`${reverse ? 'lg:col-start-1' : ''}`}
          style={{ opacity: textOpacity }}
        >
          <motion.div 
            className="relative bg-gradient-to-br from-card/80 to-card/40 p-10 sm:p-12 rounded-3xl backdrop-blur-md border border-golden/20 shadow-xl hover:shadow-golden/10 transition-all duration-500 group-hover:border-golden/40"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-golden/5 to-transparent rounded-3xl"></div>
            
            <motion.h3 
              className="font-league text-4xl sm:text-5xl md:text-6xl font-bold text-golden mb-8 relative"
              initial={{ opacity: 0, x: reverse ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 50 : -50 }}
              transition={{ duration: 0.8, delay: step * 0.2 + 0.4 }}
            >
              {title}
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-golden rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "60%" } : { width: 0 }}
                transition={{ duration: 1, delay: step * 0.2 + 0.8 }}
              />
            </motion.h3>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-300 leading-relaxed relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: step * 0.2 + 0.6 }}
            >
              {description}
            </motion.p>

            {/* Decorative Arrow */}
            {step < 3 && (
              <motion.div
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 0.6, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: step * 0.2 + 1 }}
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-golden text-3xl"
                >
                  ↓
                </motion.div>
              </motion.div>
            )}
          </motion.div>
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
      imageSrc: "/src/images/stage 1.jpg",
      imageAlt: "Stage 1: Basic agency operations with house and few girls"
    },
    {
      title: "This Is Where We Step In",
      description: "After our initial SEO work, you start getting organic creator applications. Your agency gains social proof, and creators start to notice. You're no longer chasing—you're being found.",
      imageSrc: "/src/images/stage 2.jpg",
      imageAlt: "Stage 2: Mansion with pool and queue of girls wanting to join"
    },
    {
      title: "Scale on Autopilot",
      description: "Creators are lining up to join, and you have passive fan traffic flowing to every girl on your roster. You've built a system that grows itself.",
      imageSrc: "/src/images/stage 3.jpg",
      imageAlt: "Stage 3: Fans in queue to girls, automated scaling system"
    }
  ];

  return (
    <section ref={ref} className="relative py-32 sm:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-golden/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-golden/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-24 sm:mb-32"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-px bg-golden w-16"></div>
            <span className="text-golden font-medium tracking-wider uppercase text-sm">Process</span>
            <div className="h-px bg-golden w-16"></div>
          </motion.div>
          
          <motion.h2 
            className="font-league text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-golden mb-8 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            How It Works
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-2 bg-golden rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: "50%" } : { width: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From basic agency operations to scaled autopilot growth
            <br />
            <span className="text-golden font-medium">Transform your agency in 3 simple stages</span>
          </motion.p>
        </motion.div>

        {/* Progress Timeline */}
        <motion.div 
          className="relative mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="flex justify-center items-center space-x-8 sm:space-x-16">
            {[1, 2, 3].map((num, index) => (
              <motion.div
                key={num}
                className="flex items-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              >
                <div className="relative">
                  <div className="w-4 h-4 bg-golden rounded-full"></div>
                  <motion.div
                    className="absolute inset-0 bg-golden rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 0.3, 0.8]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                </div>
                {index < 2 && (
                  <motion.div
                    className="w-16 sm:w-24 h-px bg-golden/30 ml-4"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
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

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-32"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-golden text-black font-semibold text-lg px-10 py-4 rounded-xl hover:bg-golden/90 transition-all duration-300 shadow-lg hover:shadow-golden/20">
              Ready to Scale? Let's Talk
            </button>
          </motion.div>
        </motion.div>
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
