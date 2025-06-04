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

const FullScreenStage = ({ 
  step, 
  title, 
  description, 
  imageSrc, 
  imageAlt 
}: {
  step: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 0.8]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Full Screen Image */}
      <motion.div
        className="absolute inset-0"
        style={{ 
          scale: imageScale,
          y: imageY,
        }}
      >
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
      </motion.div>

      {/* Floating Text Content */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 max-w-4xl px-6"
        style={{ 
          y: textY,
          opacity: textOpacity 
        }}
      >
        {/* Step Number */}
        <motion.div 
          className="inline-flex items-center justify-center w-20 h-20 bg-golden/20 backdrop-blur-md rounded-full border border-golden/30 mb-8"
          initial={{ scale: 0, rotate: 180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-golden font-league font-bold text-3xl">{step}</span>
        </motion.div>

        {/* Title */}
        <motion.h2 
          className="font-league text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.div
          className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        {step < 3 && (
          <motion.div
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-white/60"
            >
              <span className="text-sm mb-2 tracking-wider">SCROLL</span>
              <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
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
    <section className="relative">
      {/* Section Header */}
      <div className="h-screen flex items-center justify-center bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-golden/5 to-transparent"></div>
        <motion.div 
          ref={ref}
          className="text-center z-10"
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
            <div className="h-px bg-golden w-24"></div>
            <span className="text-golden font-medium tracking-wider uppercase text-lg">Process</span>
            <div className="h-px bg-golden w-24"></div>
          </motion.div>
          
          <motion.h2 
            className="font-league text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-golden mb-12 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            How It Works
          </motion.h2>
          
          <motion.p 
            className="text-2xl sm:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transform your agency in 3 simple stages
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-golden/60"
            >
              <span className="text-sm mb-4 tracking-wider">SCROLL TO EXPLORE</span>
              <div className="w-px h-20 bg-gradient-to-b from-golden/60 to-transparent"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Full Screen Stages */}
      {steps.map((step, index) => (
        <FullScreenStage
          key={index}
          step={index + 1}
          title={step.title}
          description={step.description}
          imageSrc={step.imageSrc}
          imageAlt={step.imageAlt}
        />
      ))}

      {/* Bottom CTA Section */}
      <div className="h-screen flex items-center justify-center bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-golden/5 via-transparent to-golden/5"></div>
        <motion.div
          className="text-center z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="font-league text-4xl sm:text-5xl md:text-6xl font-bold text-golden mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Scale?
          </motion.h3>
          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto px-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Let's transform your agency into an automated growth machine
          </motion.p>
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-golden text-black font-semibold text-xl px-12 py-5 rounded-xl hover:bg-golden/90 transition-all duration-300 shadow-lg hover:shadow-golden/20 border-2 border-golden/20 hover:border-golden">
              Start Your Transformation
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
