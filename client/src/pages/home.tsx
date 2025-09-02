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
            <span
              className={`brand-text ${animationStarted ? "animate" : ""} ${textRevealed ? "revealed" : ""}`}
            >
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
            onClick={() => window.open('http://wa.me/37495303063', '_blank')}
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
  imageAlt,
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
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 0.8]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [100, 0, 0, -100],
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0],
  );

  return (
    <motion.div
      ref={ref}
      className="relative min-h-[70vh] w-full overflow-hidden snap-section"
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
          opacity: textOpacity,
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
            <span className="text-golden font-league font-bold text-2xl sm:text-3xl">
              {step}
            </span>
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
                <span className="text-xs sm:text-sm mb-2 tracking-wider">
                  SCROLL
                </span>
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
  index,
  icon,
  visualElement
}: {
  title: string;
  description: string;
  index: number;
  icon: string;
  visualElement: JSX.Element;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]);

  return (
    <motion.div
      ref={ref}
      className="min-h-[30vh] py-2 sm:py-6 flex items-center justify-center relative snap-section overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-golden/15 via-black to-golden/8"></div>
      
      {/* Animated Background Pattern - Hidden on mobile */}
      <div className="absolute inset-0 opacity-10 hidden sm:block">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-golden/20 rounded-full"
            style={{
              width: `${20 + i * 15}px`,
              height: `${20 + i * 15}px`,
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i * 5)}%`,
            }}
            animate={{ 
              scale: [0.5, 1.2, 0.5],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Visual Element - Hidden on mobile to prevent overlap */}
      <motion.div
        className="absolute right-4 sm:right-12 lg:right-20 top-1/2 transform -translate-y-1/2 z-20 scale-75 sm:scale-100 hidden sm:block"
        initial={{ opacity: 0, x: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        viewport={{ once: true }}
      >
        {visualElement}
      </motion.div>

      {/* Content */}
      <motion.div
        className="text-left max-w-4xl mx-auto px-4 sm:px-5 lg:px-6 z-50 pr-0 sm:pr-20 lg:pr-28 relative"
        style={{ scale }}
      >
        {/* Icon & Number */}
        <motion.div 
          className="flex items-center gap-3 sm:gap-5 mb-4 sm:mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-golden/20 backdrop-blur-md rounded-2xl border border-golden/30 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl">{icon}</span>
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-golden">
            <span className="text-golden font-league font-bold text-lg sm:text-xl">{index}</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h3
          className="font-league text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.div
          className="bg-black/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-golden/30 max-w-3xl relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ 
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            borderColor: "rgba(253, 191, 0, 0.4)",
            scale: 1.02
          }}
        >
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
            {description}
          </p>
          
          {/* Interactive Highlight */}
          <motion.div 
            className="mt-4 flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-2 h-2 bg-golden rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-golden font-medium text-sm tracking-wider uppercase">
              {index === 1 && "PASSIVE RECRUITMENT"}
              {index === 2 && "MULTIPLE REVENUE STREAMS"}
              {index === 3 && "INSTANT CREDIBILITY"}
              {index === 4 && "PREMIUM AUDIENCES"}
            </span>
          </motion.div>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          className="absolute bottom-8 sm:bottom-12 left-4 sm:left-6 lg:left-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-2">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-1 h-8 rounded-full ${i + 1 === index ? 'bg-golden' : 'bg-golden/20'}`}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.3, delay: 1.4 + i * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </motion.div>
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
      description:
        "No more DMs or chasing. With strong SEO, high-quality creators start finding you. They apply directly—without you lifting a finger.",
      icon: "🎯",
      visualElement: (
        <motion.div 
          className="relative"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-golden/30 to-golden/10 rounded-3xl backdrop-blur-md border border-golden/40 flex flex-col items-center justify-center relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-golden/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <span className="text-4xl sm:text-5xl mb-2">📧</span>
            <motion.div
              className="flex gap-1"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-golden rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )
    },
    {
      title: "Turn Applications Into Revenue",
      description:
        "Don't just scale—monetise. Extra model applications can be sold, referred, or passed on to other agencies. It's a new income stream built on traffic you already own.",
      icon: "💰",
      visualElement: (
        <motion.div 
          className="relative"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-golden/30 to-golden/10 rounded-3xl backdrop-blur-md border border-golden/40 flex flex-col items-center justify-center relative">
            <motion.span 
              className="text-3xl sm:text-4xl mb-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💵
            </motion.span>
            <motion.div 
              className="flex items-center gap-1"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="text-golden text-xs font-bold">+$$$</span>
            </motion.div>
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-golden/80 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-black text-xs">↗️</span>
            </motion.div>
          </div>
        </motion.div>
      )
    },
    {
      title: "Instant Social Proof",
      description:
        "When creators see your name everywhere, trust builds fast. Ranking on Google = instant authority. That makes it easier to attract top talent and partners.",
      icon: "⭐",
      visualElement: (
        <motion.div 
          className="relative"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-golden/30 to-golden/10 rounded-3xl backdrop-blur-md border border-golden/40 flex flex-col items-center justify-center relative">
            <motion.span 
              className="text-3xl sm:text-4xl mb-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🏆
            </motion.span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-golden text-sm"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                >
                  ⭐
                </motion.span>
              ))}
            </div>
          </div>
          <motion.div
            className="absolute -top-1 -right-1 w-6 h-6 bg-golden rounded-full"
            animate={{ scale: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      )
    },
    {
      title: "Premium Fan Traffic, on Autopilot",
      description:
        "Want USA, UK, and CA fans for your models? We send B2C traffic from high-intent searches straight to your roster. Like Tinder—but organic. Just one safe-for-work photo is enough.",
      icon: "🚀",
      visualElement: (
        <motion.div 
          className="relative"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-golden/30 to-golden/10 rounded-3xl backdrop-blur-md border border-golden/40 flex flex-col items-center justify-center relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-golden/20 to-transparent"
              animate={{ y: ['100%', '-100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <span className="text-3xl sm:text-4xl mb-1">🌐</span>
            <motion.div 
              className="flex items-center gap-1 text-xs text-golden font-bold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <span>🇺🇸🇬🇧🇨🇦</span>
            </motion.div>
            <motion.div
              className="absolute bottom-2 right-2 text-xs"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🚀
            </motion.div>
          </div>
        </motion.div>
      )
    },
  ];

  return (
    <section className="relative">
      {/* Section Header */}
      <div className="min-h-[50vh] py-6 sm:py-8 flex items-center justify-center bg-black relative overflow-hidden px-4 sm:px-6 lg:px-8 snap-section">
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
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-px bg-golden w-12 sm:w-16 md:w-24"></div>
            <span className="text-golden font-medium tracking-wider uppercase text-sm sm:text-base md:text-lg">
              Benefits
            </span>
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
              <span className="text-xs sm:text-sm mb-3 sm:mb-4 tracking-wider">
                DISCOVER MORE
              </span>
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
          icon={benefit.icon}
          visualElement={benefit.visualElement}
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
      description:
        "Your agency relies on recruiters and social media to attract both fans and creators. It works—but it's manual, time-consuming, and not built to scale.",
      imageSrc: stage1,
      imageAlt: "Stage 1: Basic agency operations with house and few girls",
    },
    {
      title: "This Is Where We Step In",
      description:
        "After our initial SEO work, you start getting organic creator applications. Your agency gains social proof, and creators start to notice. You're no longer chasing—you're being found.",
      imageSrc: stage2,
      imageAlt: "Stage 2: Mansion with pool and queue of girls wanting to join",
    },
    {
      title: "Scale on Autopilot",
      description:
        "Creators are lining up to join, and you have passive fan traffic flowing to every girl on your roster. You've built a system that grows itself.",
      imageSrc: stage3,
      imageAlt: "Stage 3: Fans in queue to girls, automated scaling system",
    },
  ];

  return (
    <section className="relative">
      {/* Section Header */}
      {/*items-center*/}
      <div className="min-h-[50vh] py-8 sm:py-12 flex justify-center bg-black relative overflow-hidden px-4 sm:px-6 lg:px-8 snap-section">
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
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-px bg-golden w-12 sm:w-16 md:w-24"></div>
            <span className="text-golden font-medium tracking-wider uppercase text-sm sm:text-base md:text-lg">
              Process
            </span>
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
              <span className="text-xs sm:text-sm mb-3 sm:mb-4 tracking-wider">
                SCROLL TO EXPLORE
              </span>
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
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const chapters = [
    {
      title: "The Underground Era",
      stage: "GENESIS",
      text: "Back when traffic meant spamming GGs and praying to the Reddit gods—we were there. We made IG MCs work, cracked FetLife wide open (never again), and found gold where no one looked.",
      icon: "🔥",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      title: "The Shadow Network",
      stage: "EVOLUTION", 
      text: "Chances are, your creators have already felt our wave—you just didn't know. We were the invisible hand behind countless success stories, perfecting methods in the shadows.",
      icon: "⚡",
      color: "from-purple-500/20 to-blue-500/20"
    },
    {
      title: "Breaking The Surface",
      stage: "DOMINATION",
      text: "Now we're out in the open. POPPIN's done playing quiet. We've mastered SEO domination and we're ready to transform agencies that are serious about explosive growth.",
      icon: "🚀",
      color: "from-golden/20 to-yellow-400/20"
    }
  ];

  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      if (!isHovering) {
        setCurrentChapter((prev) => (prev + 1) % chapters.length);
      }
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isInView, isHovering, chapters.length]);

  return (
    <div className="min-h-[70vh] py-4 sm:py-12 flex items-center justify-center bg-black relative px-4 sm:px-6 lg:px-8 snap-section overflow-hidden">
      {/* Dynamic Background Based on Chapter */}
      <div className={`absolute inset-0 bg-gradient-to-br ${chapters[currentChapter].color} transition-all duration-1000`}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>

      {/* Interactive Particle System */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-golden/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Matrix-style Code Rain Effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-golden/20 text-xs font-mono"
            style={{ left: `${i * 12.5}%` }}
            animate={{ y: ['-100vh', '100vh'] }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 8
            }}
          >
            {Array.from({ length: 20 }, () => Math.random().toString(36)[2]).join('')}
          </motion.div>
        ))}
      </div>

      <motion.div
        ref={ref}
        className="text-center z-10 max-w-7xl w-full"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Section Header with Interactive Elements */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ y: -50 }}
          animate={isInView ? { y: 0 } : { y: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-4 mb-8">
            <motion.div 
              className="h-px bg-golden w-20 sm:w-32"
              animate={{ width: isInView ? ["0%", "100%"] : "0%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <span className="text-golden font-medium tracking-wider uppercase text-sm sm:text-base">
              Origin Story
            </span>
            <motion.div 
              className="h-px bg-golden w-20 sm:w-32"
              animate={{ width: isInView ? ["0%", "100%"] : "0%" }}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </div>

          <motion.h2
            className="font-league text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            About{" "}
            <motion.span 
              className="text-golden"
              animate={{ textShadow: ["0 0 0px #fdbf00", "0 0 20px #fdbf00", "0 0 0px #fdbf00"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              POPPIN
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Interactive Chapter Navigation */}
        <motion.div
          className="flex justify-center gap-2 sm:gap-4 mb-8 px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {chapters.map((chapter, index) => (
            <motion.button
              key={index}
              className={`px-3 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl border-2 transition-all duration-300 ${
                currentChapter === index
                  ? 'border-golden bg-golden/20 text-golden'
                  : 'border-golden/30 bg-black/40 text-gray-400 hover:border-golden/60 hover:text-gray-200'
              }`}
              onClick={() => setCurrentChapter(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-xs sm:text-sm font-bold tracking-wider">{chapter.stage}</div>
            </motion.button>
          ))}
        </motion.div>

        {/* Main Story Card with Interactive Elements */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Animated Border */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `linear-gradient(45deg, transparent, ${chapters[currentChapter].color.split(' ')[1]}, transparent)`,
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="relative bg-black/80 backdrop-blur-lg rounded-3xl p-4 sm:p-6 border border-golden/30 m-1">
            {/* Chapter Icon */}
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-golden/20 backdrop-blur-md rounded-full border border-golden/40 flex items-center justify-center"
              key={currentChapter}
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-2xl">{chapters[currentChapter].icon}</span>
            </motion.div>

            {/* Chapter Title */}
            <motion.h3
              className="font-league text-2xl sm:text-3xl md:text-4xl font-bold text-golden mb-4 text-center"
              key={`title-${currentChapter}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {chapters[currentChapter].title}
            </motion.h3>

            {/* Chapter Content */}
            <motion.div
              className="text-center"
              key={`content-${currentChapter}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                {chapters[currentChapter].text}
              </p>
            </motion.div>

            {/* Progress Indicator */}
            <motion.div
              className="flex justify-center gap-2 mt-4 sm:mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {chapters.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-12 h-1 rounded-full transition-all duration-500 ${
                    index === currentChapter ? 'bg-golden' : 'bg-golden/20'
                  }`}
                  animate={{
                    width: index === currentChapter ? 48 : 12,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-golden/20 to-golden/10 rounded-2xl border-2 border-golden/30 backdrop-blur-md transition-all duration-300 hover:bg-gradient-to-r hover:from-golden/30 hover:to-golden/20 hover:border-golden/60"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(253, 191, 0, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              // Scroll to contact section or trigger contact modal
              const readyToScaleSection = document.querySelector('#ready-to-scale');
              if (readyToScaleSection) {
                readyToScaleSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <motion.span
              className="text-golden text-xl font-bold tracking-wide"
              animate={{ opacity: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Ready to dominate your market?
            </motion.span>
            <motion.div
              className="flex items-center gap-2"
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="text-golden text-xl">→</span>
              <span className="text-golden text-xl">→</span>
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

const FAQItem = ({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className="bg-black/40 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-golden/20 hover:border-golden/40 transition-all duration-500 group"
      style={{ y, opacity }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Question Number */}
      <motion.div
        className="flex items-start gap-4 sm:gap-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-golden/20 rounded-full flex items-center justify-center border border-golden/30 group-hover:bg-golden/30 transition-colors duration-300">
          <span className="text-golden font-league font-bold text-sm sm:text-base">
            {index + 1}
          </span>
        </div>

        <div className="flex-1">
          {/* Question */}
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-league font-bold text-golden mb-4 sm:mb-6 leading-tight group-hover:text-golden/90 transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
            viewport={{ once: true }}
          >
            {question}
          </motion.h3>

          {/* Answer */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
            viewport={{ once: true }}
          >
            {answer}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const faqs = [
    {
      question: "How fast will I see results?",
      answer:
        "Organic traffic takes time to build, but most clients see early signs within the first month. Real momentum usually kicks in around month 2–3.",
    },
    {
      question: "What kind of fan traffic do you get?",
      answer:
        "Tier 1 only—USA, UK, CA. High-intent users who search, click, and spend. Think of it like Tinder-level quality, but it's all passive and organic.",
    },
    {
      question: "Do I need a website?",
      answer:
        "Yes—and if you don't have one, we'll build it for you. It's designed to rank, convert, and attract the right crowd.",
    },
    {
      question: "What's a 'traffic site' and why would I want one?",
      answer:
        "Traffic sites are model-focused blogs we run that pull in thousands of monthly visitors. We direct that traffic to your models, helping them grow passively.",
    },
    {
      question: "Is this white-hat SEO?",
      answer:
        "Mostly. We know what works, and we keep things clean enough to last—but sharp enough to win.",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 snap-section overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-golden/5 via-black to-golden/8"></div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-golden"
            style={{ left: `${i * 5}%` }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-golden/6 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-golden/4 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-6xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            className="inline-flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-px bg-golden w-16 sm:w-24 md:w-32"></div>
            <span className="text-golden font-medium tracking-wider uppercase text-sm sm:text-base md:text-lg">
              Questions
            </span>
            <div className="h-px bg-golden w-16 sm:w-24 md:w-32"></div>
          </motion.div>

          <motion.h2
            className="font-league text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-golden mb-8 sm:mb-12 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Real Talk
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            No bullshit answers to the questions you're actually asking
          </motion.p>
        </div>

        {/* FAQ Grid */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          className="flex justify-center items-center gap-4 sm:gap-6 mt-16 sm:mt-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-golden/40 to-transparent w-24 sm:w-32 md:w-48"></div>
          <motion.div
            className="flex gap-2"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <div className="w-2 h-2 bg-golden rounded-full animate-pulse"></div>
            <div
              className="w-2 h-2 bg-golden rounded-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="w-2 h-2 bg-golden rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </motion.div>
          <div className="h-px bg-gradient-to-r from-transparent via-golden/40 to-transparent w-24 sm:w-32 md:w-48"></div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-golden/60"
          >
            <span className="text-xs mb-2 tracking-wider">FINAL STEP</span>
            <div className="w-px h-12 bg-gradient-to-b from-golden/60 to-transparent"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
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
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-golden/6 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1,
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
              boxShadow: "0 25px 50px -12px rgba(253, 191, 0, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('http://wa.me/37495303063', '_blank')}
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
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
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
      <FAQSection />
      <ReadyToScaleSection />
    </div>
  );
}
