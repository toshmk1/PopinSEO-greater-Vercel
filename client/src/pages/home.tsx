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
      className="relative h-screen w-full overflow-hidden snap-section"
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
        className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8"
        style={{ 
          y: textY,
          opacity: textOpacity 
        }}
      >
        <div className="text-center max-w-5xl w-full">
          {/* Step Number */}
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-golden/20 backdrop-blur-md rounded-full border border-golden/30 mb-6 sm:mb-8"
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-golden font-league font-bold text-2xl sm:text-3xl">{step}</span>
          </motion.div>

          {/* Title */}
          <motion.h2 
            className="font-league text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.div
            className="bg-black/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 mx-2 sm:mx-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Scroll Indicator - Hidden on very small screens */}
          {step < 3 && (
            <motion.div
              className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 hidden sm:block"
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
                <span className="text-xs sm:text-sm mb-2 tracking-wider">SCROLL</span>
                <div className="w-px h-12 sm:h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
              </motion.div>
            </motion.div>
          )}

          {/* Mobile Swipe Indicator */}
          {step < 3 && (
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 block sm:hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center text-white/60"
              >
                <span className="text-xs mb-2 tracking-wider">SWIPE UP</span>
                <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const WhyChooseUsCard = ({ 
  title, 
  description, 
  index 
}: {
  title: string;
  description: string;
  index: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]);

  return (
    <motion.div 
      ref={ref}
      className="h-screen flex items-center justify-center relative snap-section"
      style={{ y, opacity }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-golden/10 via-black to-golden/5"></div>
      
      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-golden/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          delay: index * 0.5
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-golden/3 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          delay: index * 0.3
        }}
      />

      {/* Content */}
      <motion.div
        className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
        style={{ scale }}
      >
        {/* Index Number */}
        <motion.div 
          className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-golden/20 backdrop-blur-md rounded-full border border-golden/30 mb-8 sm:mb-12"
          initial={{ scale: 0, rotate: 180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-golden font-league font-bold text-2xl sm:text-3xl">{index}</span>
        </motion.div>

        {/* Title */}
        <motion.h3 
          className="font-league text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 sm:mb-12 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.div
          className="bg-black/40 backdrop-blur-md rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Animated Arrow */}
        {index < 4 && (
          <motion.div
            className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 hidden sm:block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-golden/60"
            >
              <span className="text-xs mb-2 tracking-wider">CONTINUE</span>
              <div className="w-px h-12 bg-gradient-to-b from-golden/60 to-transparent"></div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const benefits = [
    {
      title: "Creators Apply to You",
      description: "No more DMs or chasing. With strong SEO, high-quality creators start finding you. They apply directly—without you lifting a finger."
    },
    {
      title: "Turn Applications Into Revenue", 
      description: "Don't just scale—monetise. Extra model applications can be sold, referred, or passed on to other agencies. It's a new income stream built on traffic you already own."
    },
    {
      title: "Instant Social Proof",
      description: "When creators see your name everywhere, trust builds fast. Ranking on Google = instant authority. That makes it easier to attract top talent and partners."
    },
    {
      title: "Premium Fan Traffic, on Autopilot",
      description: "Want USA, UK, and CA fans for your models? We send B2C traffic from high-intent searches straight to your roster. Like Tinder—but organic. Just one safe-for-work photo is enough."
    }
  ];

  return (
    <section className="relative">
      {/* Section Header */}
      <div className="h-screen flex items-center justify-center bg-black relative overflow-hidden px-4 sm:px-6 lg:px-8 snap-section">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-golden/8 to-transparent"></div>
        <motion.div 
          ref={ref}
          className="text-center z-10 max-w-6xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-px bg-golden w-12 sm:w-16 md:w-24"></div>
            <span className="text-golden font-medium tracking-wider uppercase text-sm sm:text-base md:text-lg">Benefits</span>
            <div className="h-px bg-golden w-12 sm:w-16 md:w-24"></div>
          </motion.div>
          
          <motion.h2 
            className="font-league text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-golden mb-8 sm:mb-12 relative leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Why Choose Us
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-2 bg-golden rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: "40%" } : { width: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Four game-changing advantages that set us apart
          </motion.p>

          {/* Desktop Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 sm:bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 hidden sm:block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-golden/60"
            >
              <span className="text-xs sm:text-sm mb-3 sm:mb-4 tracking-wider">DISCOVER MORE</span>
              <div className="w-px h-16 sm:h-20 bg-gradient-to-b from-golden/60 to-transparent"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Benefit Cards */}
      {benefits.map((benefit, index) => (
        <WhyChooseUsCard
          key={index}
          title={benefit.title}
          description={benefit.description}
          index={index + 1}
        />
      ))}
    </section>
  );
};

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const steps = [
    {
      title: "The Basics",
      description: "Your agency relies on recruiters and social media to attract both fans and creators. It works—but it's manual, time-consuming, and not built to scale.",
      imageSrc: stage1,
      imageAlt: "Stage 1: Basic agency operations with house and few girls"
    },
    {
      title: "This Is Where We Step In",
      description: "After our initial SEO work, you start getting organic creator applications. Your agency gains social proof, and creators start to notice. You're no longer chasing—you're being found.",
      imageSrc: stage2,
      imageAlt: "Stage 2: Mansion with pool and queue of girls wanting to join"
    },
    {
      title: "Scale on Autopilot",
      description: "Creators are lining up to join, and you have passive fan traffic flowing to every girl on your roster. You've built a system that grows itself.",
      imageSrc: stage3,
      imageAlt: "Stage 3: Fans in queue to girls, automated scaling system"
    }
  ];

  return (
    <section className="relative">
      {/* Section Header */}
      <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-4 sm:px-6 lg:px-8 snap-section">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-golden/5 to-transparent"></div>
        <motion.div 
          ref={ref}
          className="text-center z-10 max-w-6xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-px bg-golden w-12 sm:w-16 md:w-24"></div>
            <span className="text-golden font-medium tracking-wider uppercase text-sm sm:text-base md:text-lg">Process</span>
            <div className="h-px bg-golden w-12 sm:w-16 md:w-24"></div>
          </motion.div>
          
          <motion.h2 
            className="font-league text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-golden mb-8 sm:mb-12 relative leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            How It Works
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transform your agency in 3 simple stages
          </motion.p>

          {/* Desktop Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 sm:bottom-16 lg:bottom-20 left-1/2 transform -translate-x-1/2 hidden sm:block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-golden/60"
            >
              <span className="text-xs sm:text-sm mb-3 sm:mb-4 tracking-wider">SCROLL TO EXPLORE</span>
              <div className="w-px h-16 sm:h-20 bg-gradient-to-b from-golden/60 to-transparent"></div>
            </motion.div>
          </motion.div>

          {/* Mobile Swipe Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 block sm:hidden"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-golden/60"
            >
              <span className="text-xs mb-2 tracking-wider">SWIPE UP</span>
              <div className="w-px h-12 bg-gradient-to-b from-golden/60 to-transparent"></div>
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


    </section>
  );
};

const AboutUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative px-4 sm:px-6 lg:px-8 snap-section overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-golden/8 via-black to-golden/5"></div>
      
      {/* Floating Background Orbs */}
      <motion.div
        className="absolute top-1/3 left-1/5 w-80 h-80 bg-golden/6 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-golden/4 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, -30, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          delay: 2
        }}
      />
      
      {/* Diagonal Lines Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-golden to-transparent transform -rotate-12"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-golden to-transparent transform rotate-12"></div>
      </div>

      <motion.div
        ref={ref}
        className="text-center z-10 max-w-6xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        {/* Section Label */}
        <motion.div
          className="inline-flex items-center gap-2 sm:gap-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="h-px bg-golden w-16 sm:w-24 md:w-32"></div>
          <span className="text-golden font-medium tracking-wider uppercase text-sm sm:text-base md:text-lg">Our Story</span>
          <div className="h-px bg-golden w-16 sm:w-24 md:w-32"></div>
        </motion.div>
        
        {/* Title */}
        <motion.h2
          className="font-league text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-golden mb-12 sm:mb-16 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          About Us
        </motion.h2>
        
        {/* Story Content */}
        <motion.div
          className="bg-black/60 backdrop-blur-md rounded-3xl sm:rounded-[2rem] p-8 sm:p-12 md:p-16 border border-golden/20 max-w-5xl mx-auto relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Quote Mark */}
          <motion.div
            className="absolute -top-6 left-8 sm:left-12 text-golden/40 text-6xl sm:text-7xl md:text-8xl font-serif"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            "
          </motion.div>
          
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 leading-relaxed mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Back when traffic meant spamming GGs and praying to the Reddit gods—we were there. We made IG MCs work, cracked FetLife wide open (never again), and found gold where no one looked.
          </motion.p>
          
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 leading-relaxed mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Chances are, your creators have already felt our wave—you just didn't know.
          </motion.p>
          
          <motion.p 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-golden font-league font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            But now we're out in the open. Pippin Club's done playing quiet.
          </motion.p>
          
          {/* Decorative Bottom Element */}
          <motion.div
            className="flex justify-center items-center gap-3 sm:gap-4 mt-12 sm:mt-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-golden/60 to-transparent w-16 sm:w-24"></div>
            <motion.div
              className="w-2 h-2 bg-golden rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
            />
            <motion.div
              className="w-3 h-3 bg-golden rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: 0.3
              }}
            />
            <motion.div
              className="w-2 h-2 bg-golden rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: 0.6
              }}
            />
            <div className="h-px bg-gradient-to-r from-transparent via-golden/60 to-transparent w-16 sm:w-24"></div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-golden/60"
          >
            <span className="text-xs mb-2 tracking-wider">CONTINUE</span>
            <div className="w-px h-12 bg-gradient-to-b from-golden/60 to-transparent"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const ReadyToScaleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative px-4 sm:px-6 lg:px-8 snap-section">
      <div className="absolute inset-0 bg-gradient-to-r from-golden/5 via-transparent to-golden/5"></div>
      
      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-golden/8 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-golden/6 rounded-full blur-2xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          delay: 1
        }}
      />

      <motion.div
        ref={ref}
        className="text-center z-10 max-w-6xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h2
          className="font-league text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-golden mb-8 sm:mb-12 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to Scale?
        </motion.h2>
        
        {/* Description */}
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-12 sm:mb-16 max-w-5xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Let's transform your agency into an automated growth machine
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button 
            className="bg-golden text-black font-league font-bold text-xl sm:text-2xl md:text-3xl px-12 sm:px-16 md:px-20 py-6 sm:py-8 rounded-2xl hover:bg-golden/90 transition-all duration-300 shadow-2xl hover:shadow-golden/30 border-2 border-golden/20 hover:border-golden w-full sm:w-auto max-w-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(253, 191, 0, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Transformation
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-golden/40 to-transparent w-24 sm:w-32 md:w-48"></div>
          <motion.div
            className="w-3 h-3 bg-golden rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
          />
          <div className="h-px bg-gradient-to-r from-transparent via-golden/40 to-transparent w-24 sm:w-32 md:w-48"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <HeroSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <AboutUsSection />
      <ReadyToScaleSection />
    </div>
  );
}
